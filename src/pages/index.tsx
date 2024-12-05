import ImageDisplay from "@/components/MainComponent";

export default function Home() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center scrollable">
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
                /* Enable scrolling on mobile */
                .scrollable {
                    overflow-y: auto; /* Allow vertical scrolling */
                    min-height: 100vh; /* Ensure full viewport height */
                    background-color: #BFAEAF; /* Set the background color */
                }
                html, body {
                    height: 100%;
                    margin: 0;
                    background-color: #BFAEAF; /* Set background color for the page */
                }
            `}</style>
        </main>
    );
}
