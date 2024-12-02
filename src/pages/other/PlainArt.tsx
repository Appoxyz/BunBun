import Image from "next/image";
import Y00tsBoothMain from "@/components/ArtBooth/Y00tsBoothMain";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between`}
    >
      <Y00tsBoothMain />
    </main>
  );
}
