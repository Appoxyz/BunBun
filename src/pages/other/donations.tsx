import React from "react";

class ArtistsList extends React.Component {
    state = {
        copiedText: null
    };

    copyText = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                this.setState({ copiedText: text });
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    }


    render() {
        return (
            <div className="section">
                <h2 className="d3" style={{ fontFamily: 'D3', fontSize: '30px' }}>Artists</h2>
                <div>
                    <p className="d2" style={{ fontFamily: 'D2', fontSize: '24px' }}>Juiced</p>
                    <p className="t3" style={{ fontFamily: 'T2', fontSize: '18px' }}>UDca....ZodM</p>
                    <button onClick={() => this.copyText('UDca37YnmJBn36xRYWehBAjrZUSa1VsiZu8y4KPZodM')}>
                        Copy
                    </button>
                </div>
                <div className="py-2"></div>
                <div>
                    <p className="d2" style={{ fontFamily: 'D2', fontSize: '24px' }}>Cry</p>
                    <p className="t3" style={{ fontFamily: 'T2', fontSize: '18px' }}>CKdB....tkLb</p>
                    <button onClick={() => this.copyText('CKdB8LCyCcXMQeVTSeiLmEuXhfyUpEdTxvGMvKkFtkLb')}>
                        Copy
                    </button>
                </div>
                <div className="py-2"></div>
                <div>
                    <p className="d2" style={{ fontFamily: 'D2', fontSize: '24px' }}>AGZ</p>
                    <p className="t3" style={{ fontFamily: 'T2', fontSize: '18px' }}>Hagm....Send</p>
                    <button onClick={() => this.copyText('HagmDQjpW4FNmx2aeER9gep7YEiuCeSRNzRFcwP9Send')}>
                        Copy
                    </button>
                </div>
                <div className="py-2"></div>
                <div>
                    <p className="d2" style={{ fontFamily: 'D2', fontSize: '24px' }}>Hikaru</p>
                    <p className="t3" style={{ fontFamily: 'T2', fontSize: '18px' }}>3YAL....Zidx</p>
                    <button onClick={() => this.copyText('3YALEV95davyWM8r9SVNoEiPpPf7XMDcrnuZiUw2Zidx')}>
                        Copy
                    </button>
                </div>
            </div>
        );
    }
}

class TreasuryList extends React.Component {
    state = {
        copiedText: null
    };

    copyText = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                this.setState({ copiedText: text });
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    }

    render() {
        return (
            <div className="section">
                <h2 className="d3" style={{ fontFamily: 'D3', fontSize: '30px' }}> </h2>
                <div>
                    <p className="d2" style={{ fontFamily: 'D3', fontSize: '30px' }}>y7 Treasury</p>
                    <p className="t3" style={{ fontFamily: 'T2', fontSize: '18px' }}>y00ts7.sol</p>
                    <button onClick={() => this.copyText('y00ts7.sol')}>
                        Copy
                    </button>
                </div>
                <div className="py-4"></div>
            </div>
        );
    }
}

class TeamList extends React.Component {
    state = {
        copiedText: null
    };

    copyText = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                this.setState({ copiedText: text });
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    }


    render() {
        return (
            <div className="section">
                <h2 className="d3" style={{ fontFamily: 'D3', fontSize: '30px' }}>Team</h2>
                <div>
                    <p className="d2" style={{ fontFamily: 'D2', fontSize: '24px' }}>Appo</p>
                    <p className="t3" style={{ fontFamily: 'T2', fontSize: '18px' }}>EEip....RD9q</p>
                    <button onClick={() => this.copyText('EEipPHq5wQ6usEZtYfpkB4A8d7P5EFUMKhepoJkFRD9q')}>
                        Copy
                    </button>
                </div>
                <div className="py-2"></div>
                <div>
                    <p className="d2" style={{ fontFamily: 'D2', fontSize: '24px' }}>Dekashi</p>
                    <p className="t3" style={{ fontFamily: 'T2', fontSize: '18px' }}>Dekash.sol</p>
                    <button onClick={() => this.copyText('Dekash.sol')}>
                        Copy
                    </button>
                </div>
                <div className="py-2"></div>
                <div>
                    <p className="d2" style={{ fontFamily: 'D2', fontSize: '24px' }}>Night</p>
                    <p className="t3" style={{ fontFamily: 'T2', fontSize: '18px' }}>HQiM....UznR</p>
                    <button onClick={() => this.copyText('HQiMmV6gwG48XqZaHgpUYNDVtqsmyYFwDktCrfHpUznR')}>
                        Copy
                    </button>
                </div>
                <div className="py-4"></div>
            </div>
        );
    }
}


export default function Home() {
    return (
        <main className={`flex min-h-screen w-full flex-col items-center justify-start pt-8 sm:pl-0 pl-8`}>
            <div className="sm:py-4" style={{ zIndex: 0 }}></div>
            <div className="container flex w-full px-2 py-2 justify-center">
                {/* Left Column */}
                <div className="w-full sm:w-1/2"></div>
            </div>
            <div className="container flex justify-between">
                {/* Section 1 */}
                <TreasuryList />

                {/* Section 2 */}
                <TeamList />

                {/* Section 3 */}
                <ArtistsList />
            </div>
            <style jsx>{`
                .container {
                    position: relative; /* Ensure relative positioning */
                }
                .d2 {
                    font-size: 24px; /* Set a reasonable font size */
                    font-family: 'D2';
                }
                .t3 {
                    font-size: 18px; /* Set a reasonable font size */
                    font-family: 'T2';
                }
                .d3 {
                    font-size: 30px; /* Set a reasonable font size */
                    font-family: 'D3';
                }
                .section {
                    flex: 1;
                    margin: 0 10px; /* Add some margin between sections */
                }
                @media (max-width: 768px) {
                    .container {
                        flex-direction: column; /* Stack sections vertically on small screens */
                    }
                    .section {
                        margin: 10px 0; /* Adjust margin for stacked sections */
                    }
                }
            `}</style>
        </main>
    );
}
