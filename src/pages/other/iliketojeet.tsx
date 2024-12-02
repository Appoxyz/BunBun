import Image from "next/image";
import Y00tBanners from "@/components/Banner/Y00tsBanners";
import Y00tsBoothAussie from "@/components/ArtBooth/Y00tsBoothAussie";

export default function Home() {
    return (
        <main>
            <Y00tsBoothAussie />
            <div style={{ paddingBottom: '32px' }}></div>
        </main>
    );
}
