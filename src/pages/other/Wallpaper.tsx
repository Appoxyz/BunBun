import Image from "next/image";
import Y00tWallpapers from "@/components/Wallpaper/Y00tsWallpapers";

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between`}
        >
            <Y00tWallpapers />
        </main>
    );
}
