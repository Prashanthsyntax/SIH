import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Welcome to Next.js!</h1>
      <p>This is the home page.</p>
      <Link href="/About">Go to About Page</Link>
    </div>
  );
}
