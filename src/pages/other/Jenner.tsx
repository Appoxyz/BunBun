import Image from "next/image";
import Y00tBanners from "@/components/Banner/Y00tsBanners";
import Y00tsBoothJenneBlank from "@/components/ArtBooth/Y00tsBoothJenneBlank";

export default function Home() {
    return (
        <main>
            <Y00tsBoothJenneBlank />
            <div style={{ paddingBottom: '32px' }}></div>
        </main>
    );
}
