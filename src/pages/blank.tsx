import Y00tsBoothForbes from "@/components/ArtBooth/Y00tsBoothForbes";

export default function Home() {
  return (
    <main className={`flex min-h-screen w-full flex-col items-center justify-start pt-8`}>
      <div className="sm:py-4" style={{ zIndex: 0 }}></div>
      <div className="container flex w-full px-2 py-2 " style={{ zIndex: 2 }}>
        {/* Left Column */}
        <div className="w-full sm:w-1/2"></div>
      </div>
      <div className={`container`}></div>
      <style jsx>{`
        .container {
          position: relative; /* Ensure relative positioning */
        }
      `}</style>
    </main>
  );
}