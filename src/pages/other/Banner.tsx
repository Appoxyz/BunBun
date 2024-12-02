import Image from "next/image";
import Y00tBanners from "@/components/Banner/Y00tsBanners";

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between`}
        >
            <Y00tBanners />
        </main>
    );
}
