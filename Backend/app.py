from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import chromadb
from sentence_transformers import SentenceTransformer
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM, pipeline
import torch

# --------------------------
# 1️⃣ Initialize FastAPI
# --------------------------
app = FastAPI(title="Sentenara Pro Backend")

# Allow CORS for your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------------------------
# 2️⃣ Request model
# --------------------------
class QuestionRequest(BaseModel):
    question: str
    type: str | None = None  # optional filter

# --------------------------
# 3️⃣ Load models & ChromaDB
# --------------------------
embedder = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

model_name = "google/flan-t5-base"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)
device = 0 if torch.cuda.is_available() else -1
qa_pipeline = pipeline("text2text-generation", model=model, tokenizer=tokenizer, device=device)


  
client = chromadb.CloudClient(
  api_key='ck-FsBHek1GcFRd9WMQJD9YamcvZaSZTEQAkpGhsoFThgZw',
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
    metas = results.get('metadatas', [[]])[0]
    if not docs:
        return [("No relevant context found.", {})]
    return list(zip(docs, metas))

def answer_question(question, filter_type=None, top_k=5):
    retrieved = retrieve(question, top_k, filter_type)
    context = "\n\n".join([doc for doc, _ in retrieved])
    prompt = f"Answer the following legal question using the provided context.\n\nContext:\n{context}\n\nQuestion: {question}\n\nAnswer clearly and concisely:"
    
    result = qa_pipeline(prompt, max_length=300, do_sample=False)
    return result[0]["generated_text"], retrieved

# --------------------------
# 5️⃣ API Endpoint
# --------------------------
@app.post("/ask")
async def ask_question(req: QuestionRequest):
    try:
        answer, sources = answer_question(req.question, req.type)
        formatted_sources = [
            {
                "title": meta.get("title", ""),
                "act": meta.get("act", ""),
                "section": meta.get("section", meta.get("article", "")),
                "type": meta.get("type", ""),
                "source": meta.get("source", "Unknown")
            }
            for _, meta in sources
        ]
        return {
            "question": req.question,
            "type": req.type or "all",
            "answer": answer,
            "sources": formatted_sources
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
