import Image from "next/image";
import Y00tsBoothPrivate from "@/components/ArtBooth/Y00tsBoothPrivate";
import ArtistDropdown from "@/components/ArtistDropdown";
import NavBar from '@/components/Site/Navnew';
import { SetStateAction, useState } from "react";

export default function Home() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center non-scrollable">
            <Y00tsBoothPrivate />

            <style jsx>{`
                .selected {
                    color: white;
                    z-index: 1;
                }
                button {
                    color: black;
                    position: relative;
                    z-index: 2;
                }
                .container {
                    position: relative;
                }
                @media (min-width: 630px) {
                    .container {
                        top: 35%;
                        transform: translate(0%, -19%);
                    }
                }
                /* Disable scrolling */
                .non-scrollable {
                    overflow: hidden;
                    height: 100vh; /* Ensure it takes full viewport height */
                }
                html, body {
                    height: 100%;
                    margin: 0;
                    overflow: hidden; /* Disable scrolling on the whole page */
                }
            `}</style>
        </main>
    );
}
