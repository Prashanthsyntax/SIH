from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import chromadb  # type: ignore
from sentence_transformers import SentenceTransformer  # type: ignore
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM, pipeline  # type: ignore
import torch  # type: ignore

# --------------------------
# 1️⃣ Initialize FastAPI
# --------------------------
app = FastAPI(title="Sentenara Pro Backend")

# Allow CORS for your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # replace with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------------------------
# 2️⃣ Request model
# --------------------------
class QuestionRequest(BaseModel):
    question: str
    type: str | None = None  # optional field for filtering (IPC, CrPC, Judgments, etc.)

# --------------------------
# 3️⃣ Load models & ChromaDB
# --------------------------
# Sentence Transformer for embeddings
embedder = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

# FLAN-T5 for QA
model_name = "google/flan-t5-base"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)
device = 0 if torch.cuda.is_available() else -1
qa_pipeline = pipeline("text2text-generation", model=model, tokenizer=tokenizer, device=device)

# Load ChromaDB (Cloud)
client = chromadb.CloudClient(
    api_key='ck-8ogrFSdCtYH9Bxh9mZ7A4dMsGbdQ2zp3VrLKNeHrfirE',
    tenant='f9ac33d4-f162-4b85-b38d-1c8b719366e6',
    database='VECDB'
)
collection_name = "indian_laws"
collection = client.get_collection(name=collection_name)

# --------------------------
# 4️⃣ Helper functions
# --------------------------
def retrieve(query, top_k=5, filter_type=None):
    where = {"type": filter_type} if filter_type else None
    results = collection.query(
        query_texts=[query],
        n_results=top_k,
        where=where
    )
    docs = results.get('documents', [[]])[0]
    return docs or ["No relevant context found."]

def answer_question(question, filter_type=None, top_k=5):
    context_chunks = retrieve(question, top_k, filter_type)
    context = "\n\n".join(context_chunks)
    prompt = f"Context: {context}\n\nQuestion: {question}\n\nAnswer:"
    result = qa_pipeline(prompt, max_length=256, do_sample=False)
    return result[0]["generated_text"]

# --------------------------
# 5️⃣ API Endpoint
# --------------------------
@app.post("/ask")
async def ask_question(req: QuestionRequest):
    try:
        answer = answer_question(req.question, req.type)
        return {
            "question": req.question,
            "type": req.type or "all",
            "answer": answer
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
