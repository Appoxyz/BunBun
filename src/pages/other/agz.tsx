import Image from "next/image";
import Y00tsBoothMain from "@/components/ArtBooth/Y00tsBoothMain";
import Y00tsBoothForbes from "@/components/ArtBooth/Y00tsBoothForbes";
import Y00tsBoothCry from "@/components/ArtBooth/Y00tsBoothCry";
import Y00tsBoothAGZ from "@/components/ArtBooth/Y00tsBoothAGZ";
import Y00tsBoothStrike from "@/components/ArtBooth/Y00tsBoothStrike";
import { SetStateAction, useState } from "react";
import ArtistDropdown from "@/components/ArtistDropdownAGZ";
import Y00tsBoothHikaru from "@/components/ArtBooth/Y00tsBoothHikaru";

export default function Home() {
    const [toggleValue, setToggleValue] = useState("Option 3");
    const [toggleValue2, setToggleValue2] = useState("AGZ");
    const [toggleValue3, setToggleValue3] = useState("Check 1");
    const [toggleValue4, setToggleValue4] = useState("Number 1");
    const [toggleValue5, setToggleValue5] = useState("Art");

    const handleToggleChange = (value: SetStateAction<string>) => {
        setToggleValue(value);
        if (value === "Option 1") {
            setToggleValue2("Option A");
        } else if (value === "Option 2") {
            setToggleValue2("Check 1");
        } else if (value === "Option 3") {
            setToggleValue2("Number 1");
        }
    };

    const handleToggleChange2 = (value: SetStateAction<string>) => {
        setToggleValue2(value);
    };

    const handleArtistSelect = (artist: string) => {
        setToggleValue2(artist);
    };

    return (
        <main className={`flex min-h-screen w-full flex-col items-center justify-start pt-8`}>
            <div className="sm:py-10" style={{ zIndex: 0 }}></div>

            <div className="container flex w-40 sm:right-[380px]" style={{ position: 'absolute', zIndex: 2 }}>
                {/* Left Column */}
                <div className="w-40">
                    {/* Primary Toggle */}
                    <div className={`w-full flex mx-auto justify-center mb-2 sm:top-[-160px]`} style={{ position: 'absolute' }}>
                        <div className="w-96 h-15 bg-greywhite bg-opacity-50 sm:px-2 sm:py-2 px-2 py-2 rounded-xl border-2 border-greywhite border-opacity-50">
                            <div className="flex space-x-3 relative justify-center">
                                <button
                                    className={`w-28 h-10 sm:px-6 sm:py-2 px-7 py-2.5 text-white rounded-md relative ${toggleValue === "Option 1" ? "selected bg-slate text-white" : ""}`}
                                    onClick={() => {
                                        handleToggleChange("Option 1");
                                        handleToggleChange2("Option A");
                                    }}
                                    style={{}}>
                                    <a className={` text-sm flex mx-auto justify-center`}>y7</a>
                                </button>
                                <button
                                    className={`w-28 h-10 sm:px-6 sm:py-2 px-7 py-2.5 text-white rounded-md ${toggleValue === "Option 2" ? "selected bg-slate text-white" : ""}`}
                                    onClick={() => {
                                        handleToggleChange("Option 2");
                                        handleToggleChange2("Check 2");
                                    }}
                                    style={{}}>
                                    <a className={`text-sm flex mx-auto justify-center`}>Partnerships</a>
                                </button>
                                <button
                                    className={`w-28 h-10 sm:px-6 sm:py-2 px-7 py-2.5 text-white rounded-md ${toggleValue === "Option 3" ? "selected bg-slate text-white" : ""}`}
                                    onClick={() => {
                                        handleToggleChange("Option 3");
                                        handleToggleChange2("Number 1");
                                    }}
                                    style={{}}>
                                    <a className={` text-sm flex mx-auto justify-center`}>Artists</a>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Toggle */}
                    {toggleValue === "Option 1" && (
                        <div className={`w-full flex mx-auto justify-center mb-2 top-[70px] sm:top-[-90px]`} style={{ position: 'absolute' }}>
                            <div className="w-96 h-15 bg-greywhite bg-opacity-50 sm:px-2 sm:py-2 px-2 py-2 rounded-xl border-2 border-greywhite border-opacity-50">
                                <div className="flex space-x-3 relative justify-center">
                                    <button
                                        className={`w-28 h-10 sm:px-6 sm:py-2 px-7 py-2.5 text-white rounded-md ${toggleValue2 === "Option A" ? "selected bg-slate text-green" : ""}`}
                                        onClick={() => handleToggleChange2("Option A")}
                                        style={{}}>
                                        <a className={`text-sm flex mx-auto justify-center`}>Main</a>
                                    </button>
                                    <button
                                        className={`w-28 h-10 sm:px-6 sm:py-2 px-7 py-2.5 text-white rounded-md ${toggleValue2 === "Option B" ? "selected bg-slate text-green" : ""}`}
                                        onClick={() => handleToggleChange2("Option B")}
                                        style={{}}>
                                        <a className={`text-sm flex mx-auto justify-center`}>Suit</a>
                                    </button>
                                    <button
                                        className={`w-28 h-10 sm:px-6 sm:py-2 px-7 py-2.5 text-grey rounded-md ${toggleValue2 === "Option C" ? "selected bg-slate text-green" : ""}`}
                                        disabled
                                        style={{ opacity: 0.65 }}>
                                        <a className={`text-sm flex mx-auto justify-center`}>s00n</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Partnerships Toggle */}
                    {toggleValue === "Option 2" && (
                        <div className={`w-full flex mx-auto justify-center mb-2 top-[70px] sm:top-[-90px]`} style={{ position: 'absolute' }}>
                            <div className="w-96 h-15 bg-greywhite bg-opacity-50 sm:px-2 sm:py-2 px-2 py-2 rounded-xl border-2 border-greywhite border-opacity-50">
                                <div className="flex space-x-3 relative justify-center">
                                    <button
                                        className={`w-28 h-10 sm:px-6 sm:py-2 px-7 py-2.5 text-white rounded-md ${toggleValue2 === "Check 2" ? "selected bg-gradient-to-br from-forbes-light to-forbes-dark text-green" : ""}`}
                                        onClick={() => handleToggleChange2("Check 2")}
                                        style={{}}>
                                        <a className={`text-sm flex mx-auto justify-center`}>ForbesWeb3</a>
                                    </button>
                                    <button
                                        className={`w-28 h-10 sm:px-6 sm:py-2 px-7 py-2.5 text-grey rounded-md ${toggleValue2 === "Check 1" ? "selected bg-slate text-green" : ""}`}
                                        disabled
                                        style={{ opacity: 0.65 }}>
                                        <a className={`text-sm flex mx-auto justify-center`}>Cr00wns</a>
                                    </button>
                                    <button
                                        className={`w-28 h-10 sm:px-6 sm:py-2 px-7 py-2.5 text-grey rounded-md ${toggleValue2 === "Check 3" ? "selected bg-slate text-green" : ""}`}
                                        disabled
                                        style={{ opacity: 0.65 }}>
                                        <a className={`text-sm flex mx-auto justify-center`}>Partner3</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Artists Dropdown */}
                    {toggleValue === "Option 3" && (
                        <ArtistDropdown onSelect={handleArtistSelect} />
                    )}
                </div>
            </div>

            <div className={`container sm:pt-10 pt-24 mt-3 sm:mt-0`}>
                {/* Content based on second toggle */}
                {toggleValue2 === "Option A" && <Y00tsBoothMain />}
                {toggleValue2 === "Option B" && <Y00tsBoothMain />}
                {toggleValue2 === "Option C" && <Y00tsBoothMain />}

                {/* Content based on third toggle */}
                {toggleValue2 === "Check 1" && <Y00tsBoothMain />}
                {toggleValue2 === "Check 2" && <Y00tsBoothForbes />}
                {toggleValue2 === "Check 3" && <Y00tsBoothMain />}

                {/* Content based on fourth toggle */}
                {toggleValue2 === "Strike" && <Y00tsBoothStrike />}
                {toggleValue2 === "AGZ" && <Y00tsBoothAGZ />}
                {toggleValue2 === "Cry" && <Y00tsBoothCry />}
                {toggleValue2 === "Hikaru" && <Y00tsBoothHikaru />}

                {/* Content based on generator types toggle */}
                {toggleValue5 === "Number 1" && <Y00tsBoothMain />}
                {toggleValue5 === "Number 2" && <Y00tsBoothMain />}
                {toggleValue5 === "Number 3" && <Y00tsBoothMain />}
            </div>

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
    position: relative; /* Ensure relative positioning */
  }
  
  @media (min-width: 630px) { /* Apply styles for small screens */
    .container {
      top: 35%;
      transform: translate(0%, -19%);
    }
  }
`}</style>

        </main>
    );
}
