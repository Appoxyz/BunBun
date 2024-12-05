import ImageDisplay from "@/components/ArtBooth/Y00tsBoothPrivate";

export default function Home() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center non-scrollable">
            <ImageDisplay />

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
                    background-color: #FFB5BA; /* Set the background color */
                }
                html, body {
                    height: 100%;
                    margin: 0;
                    overflow: hidden; /* Disable scrolling on the whole page */
                    background-color: #FFB5BA; /* Ensure the background color applies to the entire page */
                    //read colour is. BFAEAF
                }
            `}</style>
        </main>
    );
}
