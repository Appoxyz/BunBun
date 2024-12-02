import Link from "next/link";
import Y00tsBoothForbes from "@/components/ArtBooth/Y00tsBoothForbes";

export default function Home() {
  return (
    <main className={`flex min-h-screen w-full flex-col items-center justify-center pt-8`}>
      <div className="container flex w-full flex-col items-center py-2" style={{ zIndex: 2 }}>
        <h1 className="text-9xl text-slate mt-4">404</h1>
        <p className="text-8xl text-slate mt-4">something went wrong</p>
        <Link href="/">
          <span
            className="text-base mt-6 px-8 py-3 bg-gradient-to-br from-slate-light to-slate-dark text-white rounded-full hover:bg-slate-light cursor-pointer">
            Home
          </span>
        </Link>
      </div>
      <style jsx>{`
        .container {
          position: relative; /* Ensure relative positioning */
          text-align: center; /* Center align text */
        }
        .cursor-pointer {
          display: inline-block;
        }
      `}</style>
    </main>
  );
}
