import "./globals.css";

export const metadata = {
  title: "Sentenara",
  description: "AI-Research Engine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}
