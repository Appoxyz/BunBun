import Link from "next/link";
import Y00tsBoothForbes from "@/components/ArtBooth/Y00tsBoothForbes";

export default function Home() {
  return (
    <main className={`flex min-h-screen w-full flex-col items-center justify-center pt-8`}>
      <div className="container flex w-full flex-col items-center py-2" style={{ zIndex: 2 }}>
        <h1 className="text-10xl text-slate mt-4">y7Studios</h1>
        <p className="text-8xl text-slate mt-4">The website will be back soon...</p>
      </div>
      <style jsx>{`
        .container {
          position: relative; /* Ensure relative positioning */
          text-align: center; /* Center align text */
        }
        .text-9xl {
          font-size: 6rem;
        }
        .text-2xl {
          font-size: 1.5rem;
        }
      `}</style>
    </main>
  );
}
