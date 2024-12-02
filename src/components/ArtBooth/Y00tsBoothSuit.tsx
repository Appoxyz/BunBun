import React, { useState, useRef, useEffect } from "react";
import mergeImages from 'merge-images';
import {
    Furs,
    Backgrounds,
    Clothess,
    Eyewears,
    Faces,
    Heads,
    furImages,
    backgroundImages,
    headImages,
    clothesImages,
    eyewearImages,
    faceImages,
    headlowerlevelImages,
    HeadsLowerLevel,
    outfits,
    outfits21,
    outfits22,
    outfits3,
    outfits4,
    outfits5,
} from "@/components/ArtBooth/y00t_booth_constants";

let y00tAttributes = {
    head: "",
    clothes: "",
    face: "",
    fur: "",
    eyewear: "",
    background: "",
    headlowerlevel: "",
};
interface Attribute {
    trait_type: string;
    value: string
}

function Y00tsBoothSuit() {
    const [searchLink, setSearchLink] = useState("");
    const [baseImageUrl, setBaseImageUrl] = useState(
        "https://metadata.y00ts.com/y/8367.png"
    );
    const [visibleFace, setVisibleFace] = useState("");
    const [visibleClothes, setVisibleClothes] = useState("SundayShirt");
    const [visibleEyewear, setVisibleEyewear] = useState("RetroApple");
    const [visibleFur, setVisibleFur] = useState("SandDollarBlase");
    const [visibleBg, setVisibleBg] = useState("PhantomGreen");
    const [visibleHead, setVisibleHead] = useState("MoneyBands");
    const [visibleHeadLowerLevel, setVisibleHeadLowerLevel] = useState("");
    const [isDownloadClicked, setIsDownloadClicked] = useState(false);
    const baseImageStyle = {
        position: "absolute",
        top: "80px", // Set the initial top position of the base image here
    };
    const [selectedOutfitSuit, setSelectedOutfitSuit] = useState("");
    const [ActiveOutfitSuit, setActiveOutfitSuit] = useState("");
    const [selectedOutfitTux, setSelectedOutfitTux] = useState("");
    const [ActiveOutfitTux, setActiveOutfitTux] = useState("");
    const [selectedOutfitHeadUpper, setSelectedOutfitHeadUpper] = useState("");
    const [selectedOutfitEyewear, setSelectedOutfitEyewear] = useState("");
    const [ActiveOutfitEyewear, setActiveOutfitEyewear] = useState("");
    const [selectedOutfitBg, setSelectedOutfitBg] = useState("");
    const [ActiveOutfitBg, setActiveOutfitBg] = useState("");
    const [selectedOutfitFur, setSelectedOutfitFur] = useState("");
    const [ActiveOutfitFur, setActiveOutfitFur] = useState("");
    const [selectedOutfitBackwear, setSelectedOutfitBackwear] = useState("");
    const [ActiveOutfitBackwear, setActiveOutfitBackwear] = useState("");
    const [isHatRemoved, setIsHatRemoved] = useState(false);
    const [isClothesRemoved, setIsClothesRemoved] = useState(false);
    const [isBackgroundRemoved, setIsBGRemoved] = useState(false);
    const [isEyewearRemoved, setIsEyewearRemoved] = useState(false);



    const leftSectionRef = useRef(null);

    const baseImageSize = "470px";




    const ToggleRemoveHat = () => {
        setIsHatRemoved(!isHatRemoved);
        setVisibleHead(prevState => {
            // Get the new head from y00tAttributes
            const newHead = Heads[y00tAttributes.head as keyof typeof Heads];
            // Check if the current state is "None", if so, set to newHead, otherwise set to "None"
            return prevState === Heads["None"] ? newHead : Heads["None"];
        });

        setVisibleHeadLowerLevel(prevState => {
            // Get the new head from y00tAttributes
            const newLowerHead = HeadsLowerLevel[y00tAttributes.headlowerlevel as keyof typeof HeadsLowerLevel];
            // Check if the current state is "None", if so, set to newHead, otherwise set to "None"
            return prevState === HeadsLowerLevel["None"] ? newLowerHead : HeadsLowerLevel["None"];
        });

    };

    const ToggleRemoveClothes = () => {
        setIsClothesRemoved(!isClothesRemoved);
        setVisibleClothes(prevState => {
            // Get the new head from y00tAttributes
            const newClothes = Clothess[y00tAttributes.clothes as keyof typeof Clothess];
            // Check if the current state is "None", if so, set to newHead, otherwise set to "None"
            return prevState === Clothess["None"] ? newClothes : Clothess["None"];
        });
    };

    const ToggleRemoveEyewear = () => {
        setIsEyewearRemoved(!isEyewearRemoved);
        setVisibleEyewear(prevState => {
            // Get the new head from y00tAttributes
            const newEyewear = Eyewears[y00tAttributes.eyewear as keyof typeof Eyewears];
            // Check if the current state is "None", if so, set to newHead, otherwise set to "None"
            return prevState === Eyewears["None"] ? newEyewear : Eyewears["None"];
        });
    };

    const ToggleRemoveBG = () => {
        setIsBGRemoved(!isBackgroundRemoved);
        setVisibleBg(prevState => {
            // Get the new head from y00tAttributes
            const newBackground = Backgrounds[y00tAttributes.background as keyof typeof Backgrounds];
            // Check if the current state is "None", if so, set to newHead, otherwise set to "None"
            return prevState === Backgrounds["None"] ? newBackground : Backgrounds["None"];
        });
        setBaseImageUrl(`https://ljoskdi63hqlxxuy.public.blob.vercel-storage.com/face/Blase-UmHLodB0hRNPGhlN5P4m1CXPiIjEAN.png`);
    };




    const toggleOverlaySuit = (overlayImage: string, outfitType: string, y00tAttributes: { head?: string; headlowerlevel?: string; clothes?: string; face?: string; fur?: string; eyewear?: string; background?: string; }) => {
        setSelectedOutfitSuit((prevSelectedOutfitSuit) =>
            prevSelectedOutfitSuit === overlayImage ? "" : overlayImage
        );

        if (selectedOutfitSuit === overlayImage) {
            setVisibleClothes(Clothess[y00tAttributes.clothes as keyof typeof Clothess]);
        } else {
            if (outfitType === 'outfit') {
                setVisibleClothes(Clothess["None"]);
            }

        }
    }

    const toggleOverlayTux = (overlayImage: string, outfitType: string, y00tAttributes: { head?: string; headlowerlevel?: string; clothes?: string; face?: string; fur?: string; eyewear?: string; background?: string; }) => {
        setSelectedOutfitTux((prevSelectedOutfitTux) =>
            prevSelectedOutfitTux === overlayImage ? "" : overlayImage
        );

        if (selectedOutfitTux === overlayImage) {
            setVisibleClothes(Clothess[y00tAttributes.clothes as keyof typeof Clothess]);
        } else {
            if (outfitType === 'outfit') {
                setVisibleClothes(Clothess["None"]);
            }

        }
    }

    const toggleOverlayEyewear = (overlayImage: string, outfitType: string, y00tAttributes: { head?: string; headlowerlevel?: string; clothes?: string; face?: string; fur?: string; eyewear?: string; background?: string; }) => {
        setSelectedOutfitEyewear((prevSelectedOutfitEyewear) =>
            prevSelectedOutfitEyewear === overlayImage ? "" : overlayImage
        );

        if (selectedOutfitEyewear === overlayImage) {
            setVisibleEyewear(Eyewears[y00tAttributes.eyewear as keyof typeof Eyewears]);
        } else {
            if (outfitType === 'outfit') {
                setVisibleEyewear(Eyewears["None"]);
            }

        }
    }

    const toggleOverlayBg = (overlayImage: string, outfitType: string, y00tAttributes: { head?: string; headlowerlevel?: string; clothes?: string; face?: string; fur?: string; eyewear?: string; background?: string; }) => {
        setSelectedOutfitBg((prevSelectedOutfitBg) =>
            prevSelectedOutfitBg === overlayImage ? "" : overlayImage
        );

        if (selectedOutfitBg === overlayImage) {
            setVisibleBg(Backgrounds[y00tAttributes.background as keyof typeof Backgrounds]);
        } else {
            if (outfitType === 'outfit') {
                setVisibleBg(Backgrounds["None"]);
            }

        }
    }

    const toggleOverlayBackwear = (overlayImage: string, outfitType: string, y00tAttributes: { head?: string; headlowerlevel?: string; clothes?: string; face?: string; fur?: string; eyewear?: string; background?: string; }) => {
        setSelectedOutfitBackwear((prevSelectedOutfitBackwear) =>
            prevSelectedOutfitBackwear === overlayImage ? "" : overlayImage
        );

        if (selectedOutfitBackwear === overlayImage) {
            setVisibleBg(Backgrounds[y00tAttributes.background as keyof typeof Backgrounds]);
        } else {
            if (outfitType === 'outfit') {
                setVisibleBg(Backgrounds[y00tAttributes.background as keyof typeof Backgrounds]);
            }

        }
    }

    const toggleOverlayFur = (overlayImage: string, outfitType: string, y00tAttributes: { head?: string; headlowerlevel?: string; clothes?: string; face?: string; fur?: string; eyewear?: string; background?: string; }) => {
        setSelectedOutfitFur((prevSelectedOutfitFur) =>
            prevSelectedOutfitFur === overlayImage ? "" : overlayImage
        );

        if (selectedOutfitFur === overlayImage) {
            setVisibleFur(Furs[`${y00tAttributes.fur} ${y00tAttributes.face}`]);
        } else {
            if (outfitType === 'outfit') {
                setVisibleFur(Furs["None"]);
            }

        }
    }


    const getY00tAttributes = async (id: number) => {
        const newID = id - 1; // Subtract 1 from the entered value
        try {
            const response = await fetch(`https://metadata.y00ts.com/y/${newID}.json`);
            const data = await response.json();
            const attributes: Attribute[] = data.attributes || [];
            const attributesFound: any = {};
            attributes.forEach((attribute: Attribute) => {
                attributesFound[attribute.trait_type] = attribute.value;
            });
            // Save attributes globally
            const y00tAttributes = {
                background: attributesFound["Background"] || "",
                fur: attributesFound["Fur"] || "",
                head: attributesFound["Head"] || "",
                headlowerlevel: attributesFound["Head"] || "",
                face: attributesFound["Face"] || "",
                clothes: attributesFound["Clothes"] || "",
                eyewear: attributesFound["Eyewear"] || "",
            };

            return y00tAttributes;
        } catch (error) {
            console.error("Error fetching data:", error);
            return { background: "", fur: "", head: "", headlowerlevel: "", face: "", eyewear: "", clothes: "" };
        }
    };

    const handleSearchSubmit = async () => {
        const link = parseInt(searchLink);

        if (!isNaN(link)) {
            const adjustedLink = link - 1; // Subtract 1 from the entered value
            // if (allowedIDS.includes(link)) { - allowedy00tIDS
            y00tAttributes = await getY00tAttributes(link);

            setVisibleBg(Backgrounds[y00tAttributes.background as keyof typeof Backgrounds]);
            setVisibleHead(Heads[y00tAttributes.head as keyof typeof Heads]);
            setVisibleHeadLowerLevel(HeadsLowerLevel[y00tAttributes.headlowerlevel as keyof typeof HeadsLowerLevel]);
            setVisibleFace(Faces[y00tAttributes.face as keyof typeof Faces]);
            setVisibleEyewear(Eyewears[y00tAttributes.eyewear as keyof typeof Eyewears]);
            setVisibleClothes(Clothess[y00tAttributes.clothes as keyof typeof Clothess]);
            setBaseImageUrl(`https://metadata.y00ts.com/y/${adjustedLink}.png`);
            setVisibleFur(Furs[`${y00tAttributes.fur} ${y00tAttributes.face}`]);
            setSelectedOutfitTux("");
            setSelectedOutfitSuit("");
            setTimeout(() => {
            }, 1000);
        } else {
            setBaseImageUrl("https://metadata.y00ts.com/y/8367.png");
            setVisibleBg(Backgrounds["None"]);
            setVisibleFur(Furs["None"]);
            setVisibleHead(Heads["None"]);
            setVisibleHeadLowerLevel(HeadsLowerLevel["None"]);
            setVisibleFace(Faces["None"]);
            setVisibleEyewear(Eyewears["None"]);
            setVisibleClothes(Clothess["None"]);
        }
    };



    const handleDownloadClick = async () => {
        try {
            setIsDownloadClicked(true); // Set download button clicked state to true

            // Array to hold only active layers for merging
            const activeLayers = [
                backgroundImages[visibleBg as keyof typeof backgroundImages],
                selectedOutfitBg,
                selectedOutfitBackwear,
                furImages[visibleFur as keyof typeof furImages],
                selectedOutfitFur,
                headImages[visibleHead as keyof typeof headImages],
                headlowerlevelImages[visibleHeadLowerLevel as keyof typeof headlowerlevelImages],
                eyewearImages[visibleEyewear as keyof typeof eyewearImages],
                clothesImages[visibleClothes as keyof typeof clothesImages],
                selectedOutfitSuit,
                selectedOutfitTux,
                selectedOutfitEyewear,
            ].filter(layer => layer !== ""); // Filter out empty layers

            // If there are no active layers, return without downloading
            if (activeLayers.length === 0) {
                setIsDownloadClicked(false); // Set download button clicked state to false
                return;
            }

            let mergedImage = await mergeImages(activeLayers, {
                crossOrigin: "anonymous" // Make sure crossOrigin property is set correctly
            });

            // Adding a 2-second timeout before setting IsDownloadClicked to false
            setTimeout(() => {
                setIsDownloadClicked(false); // Set download button clicked state to false after 2 seconds
            }, 500);

            mergedImage = mergedImage.replace(/^data:image\/png;base64,/, "");
            const byteCharacters = atob(mergedImage);
            const byteArrays = [];

            for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
                const slice = byteCharacters.slice(offset, offset + 1024);

                const byteNumbers = new Array(slice.length);
                for (let i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }

                const byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }

            const blob = new Blob(byteArrays, { type: 'image/png' });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `y7Studio.png`;
            link.click();
        } catch (ex) {
            console.log(ex);
            setIsDownloadClicked(false); // Set download button clicked state back to false
        }
    }


    return (
        <><div className="w-full sm:pt-20">
            <div className="flex flex-col sm:flex-row justify-center justifyItems:center justify-evenly mx-6">
                <section
                    ref={leftSectionRef}
                    className="mt-10  rounded rounded-lg rounded-lg justify-center  "
                    id="downloadable"
                    style={{
                        position: "relative",

                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "left",
                            marginBottom: "20px"
                        }}
                    >
                        {/* input Buttons */}
                        <div className="w-baseImageSize flex sm:justify-center z-9">
                            <input
                                type="number" // Change type to "number"
                                placeholder="Enter y00ts ID"
                                value={searchLink}
                                className="w-full rounded-lg pl-4 pr-2 focus:outline-none bg-white"
                                style={{
                                    fontFamily: 'T2',
                                    fontWeight: 'bold',
                                    fontSize: "16px",
                                    backgroundColor: 'rgba(225, 225, 225, 0.27)',
                                    border: "2px solid rgba(0, 0, 0)",
                                    marginRight: "5px" // Adding margin to create a gap between input and button
                                }}
                                onChange={(e) => setSearchLink(e.target.value)} />
                            <button
                                className="text-base text-white h-11 w-60 rounded-lg bg-gradient-to-tl from-green-dark to-green-light"
                                style={{
                                    marginLeft: "5px"
                                }}
                                onClick={handleSearchSubmit}
                            >
                                Submit
                            </button>

                        </div>
                    </div>
                    <img
                        src={baseImageUrl}
                        alt="Base Image"
                        style={{
                            width: "470px",
                            height: "auto",
                            border: "2px solid rgba(0, 0, 0)",
                            borderRadius: "20px",
                            marginTop: "36px",
                        }}
                    />
                    {backgroundImages[visibleBg as keyof typeof backgroundImages] && (
                        <img
                            src={backgroundImages[visibleBg as keyof typeof backgroundImages]}
                            alt={`${visibleBg} Overlay`}
                            style={{
                                position: "absolute",
                                top: baseImageStyle.top, // Copying top position from base image
                                width: baseImageSize, // Copying width from base image
                                height: "auto",
                                borderRadius: "20px",
                            }}
                        />
                    )}
                    {selectedOutfitBg && (
                        <img
                            src={selectedOutfitBg}
                            alt="Overlay"
                            style={{
                                position: "absolute",
                                top: baseImageStyle.top, // Copying top position from base image
                                width: baseImageSize, // Copying width from base image
                                height: "auto",
                                borderRadius: "20px",
                            }} />
                    )}
                    {selectedOutfitBackwear && (
                        <img
                            src={selectedOutfitBackwear}
                            alt="Overlay"
                            style={{
                                position: "absolute",
                                top: baseImageStyle.top, // Copying top position from base image
                                width: baseImageSize, // Copying width from base image
                                height: "auto",
                                borderRadius: "20px",
                            }} />
                    )}
                    {furImages[visibleFur as keyof typeof furImages] && (
                        <img
                            src={furImages[visibleFur as keyof typeof furImages]}
                            alt={`${visibleFur} Overlay`}
                            style={{
                                position: "absolute",
                                top: baseImageStyle.top, // Copying top position from base image
                                width: baseImageSize, // Copying width from base image
                                height: "auto",
                                borderRadius: "20px",
                            }} />
                    )}
                    {selectedOutfitFur && (
                        <img
                            src={selectedOutfitFur}
                            alt="Overlay"
                            style={{
                                position: "absolute",
                                top: baseImageStyle.top, // Copying top position from base image
                                width: baseImageSize, // Copying width from base image
                                height: "auto",
                                borderRadius: "20px",
                            }} />
                    )}
                    {faceImages[visibleFace as keyof typeof faceImages] && (
                        <img
                            src={faceImages[visibleFace as keyof typeof faceImages]}
                            alt={`${visibleFace} Overlay`}
                            style={{
                                position: "absolute",
                                top: baseImageStyle.top, // Copying top position from base image
                                width: baseImageSize, // Copying width from base image
                                height: "auto",
                                borderRadius: "20px",
                            }} />
                    )}
                    {clothesImages[visibleClothes as keyof typeof clothesImages] && (
                        <img
                            src={clothesImages[visibleClothes as keyof typeof clothesImages]}
                            alt={`${visibleClothes} Overlay`}
                            style={{
                                position: "absolute",
                                top: baseImageStyle.top, // Copying top position from base image
                                width: baseImageSize, // Copying width from base image
                                height: "auto",
                                borderRadius: "20px",
                            }} />
                    )}
                    {selectedOutfitSuit && (
                        <img
                            src={selectedOutfitSuit}
                            alt="Overlay"
                            style={{
                                position: "absolute",
                                top: baseImageStyle.top, // Copying top position from base image
                                width: baseImageSize, // Copying width from base image
                                height: "auto",
                                borderRadius: "20px",
                            }} />
                    )}
                    {headlowerlevelImages[visibleHeadLowerLevel as keyof typeof headlowerlevelImages] && (
                        <img
                            src={headlowerlevelImages[visibleHeadLowerLevel as keyof typeof headlowerlevelImages]}
                            alt={`${visibleHeadLowerLevel} Overlay`}
                            style={{
                                position: "absolute",
                                top: baseImageStyle.top, // Copying top position from base image
                                width: baseImageSize, // Copying width from base image
                                height: "auto",
                                borderRadius: "20px",
                            }} />
                    )}
                    {eyewearImages[visibleEyewear as keyof typeof eyewearImages] && (
                        <img
                            src={eyewearImages[visibleEyewear as keyof typeof eyewearImages]}
                            alt={`${visibleEyewear} Overlay`}
                            style={{
                                position: "absolute",
                                top: baseImageStyle.top, // Copying top position from base image
                                width: baseImageSize, // Copying width from base image
                                height: "auto", // Keeping aspect ratio
                                borderRadius: "20px",
                                border: "2px solid rgba(0, 0, 0)",
                            }} />
                    )}
                    {selectedOutfitEyewear && (
                        <img
                            src={selectedOutfitEyewear}
                            alt="Overlay"
                            style={{
                                position: "absolute",
                                top: baseImageStyle.top, // Copying top position from base image
                                width: baseImageSize, // Copying width from base image
                                height: "auto",
                                borderRadius: "20px",
                            }} />
                    )}
                    {selectedOutfitHeadUpper && (
                        <img
                            src={selectedOutfitHeadUpper}
                            alt="Overlay"
                            style={{
                                position: "absolute",
                                top: baseImageStyle.top, // Copying top position from base image
                                width: baseImageSize, // Copying width from base image
                                height: "auto",
                                borderRadius: "20px",
                            }} />
                    )}
                    {headImages[visibleHead as keyof typeof headImages] && (
                        <img
                            src={headImages[visibleHead as keyof typeof headImages]}
                            alt={`${visibleHead} Overlay`}
                            style={{
                                position: "absolute",
                                top: baseImageStyle.top, // Copying top position from base image
                                width: baseImageSize, // Copying width from base image
                                height: "auto",
                                borderRadius: "20px",
                            }} />
                    )}


                    {/* Buttons */}
                    <div
                        className="w-full flex my-5"
                        style={{
                            position: 'absolute',
                            top: '20px', // Adjust as necessary
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            justifyContent: 'space-around',
                            width: '100%',
                        }}
                    >
                        <button
                            className="text-xsm text-slate h-11 w-32 rounded-lg"
                            onClick={ToggleRemoveHat}
                        >
                            {isHatRemoved ? 'Add Hat' : 'Remove Hat'}
                        </button>
                        <button
                            className="text-xsm text-slate h-11 w-32 rounded-lg"
                            onClick={ToggleRemoveClothes}
                        >
                            {isClothesRemoved ? 'Add Clothes' : 'Remove Clothes'}
                        </button>
                        <button
                            className="text-xsm text-slate h-11 w-32 rounded-lg"
                            onClick={ToggleRemoveEyewear}
                        >
                            {isEyewearRemoved ? 'Add Eyewear' : 'Remove Eyewear'}
                        </button>
                        <button
                            className="text-xsm text-slate h-11 w-32 rounded-lg"
                            onClick={ToggleRemoveBG}
                        >
                            {isBackgroundRemoved ? 'Add BG' : 'Remove BG'}
                        </button>
                    </div>

                    <div className="w-full flex my-5">
                        <div className="w-full">
                            <button
                                className="flex justify-center items-center rounded-lg w-full h-12 relative overflow-hidden bg-gradient-to-br from-slate-dark to-slate-light text-white font-bold text-16px"
                                style={{ position: 'relative' }}
                                onClick={handleDownloadClick}
                            >
                                <div className="flex gap-1.5" style={{ zIndex: 2 }}>
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/68d0396bacfe4888fe13fd9395f930b65ceb447ba22b5358451a5ccb4eddcfcc?"
                                        alt="Download icon"
                                        className={`aspect-square w-23px ${isDownloadClicked ? 'scaled' : 'noscaled'}`}
                                        loading="lazy"
                                    />
                                    <div
                                        className={`grow my-auto ${isDownloadClicked ? 'hide' : 'nohide'} text-lg`}
                                        style={{ zIndex: 2 }}
                                    >
                                        DOWNLOAD
                                    </div>
                                </div>
                                <div className="hover-circle" />
                            </button>
                        </div>
                    </div>

                    <div className="container"></div>
                    <style jsx>{`
            .container {
              position: relative;
            }
            .hover-circle {
              position: absolute;
              background-color: #0ea5e9;
              border-radius: 100%;
              width: 100%;
              height: 200%;
              top: 100%;
              left: 50%;
              transform: translate(-50%, -50%) scale(0);
              transition: transform 0.4s ease-out;
              z-index: 0;
            }
            button:hover .hover-circle {
              transform: translate(-50%, -50%) scale(1.6);
            }
            .hide {
              opacity: 0;
              transform: translate(100%, 0%) scale(1);
              transition: opacity 0.2s ease-in, transform 0.2s ease-in;
            }
            .nohide {
              opacity: 1;
              transition: opacity 0.2s ease-in, transform 0.2s ease-in;
            }
            .scaled {
              transform: scale(1.3);
              transform: translate(180%, 0%) scale(1.6);
              transition: transform 0.3s ease;
            }
            .noscaled {
              transform: scale(1);
              transition: transform 0.5s ease;
            }
          `}</style>
                </section>

                <div>
                    {/* <div className="sm:py-8"></div> */}

                    <div className="sm:py-24"></div>

                    <div className="flex flex-col items-start justify-top h-full relative">
                        {/* Suit Outfits */}
                        <section className="w-full" >
                            <h1
                                className={`flex text-xl font-bold pb-2 pt-5 text-slate `}
                                style={{}}>Suits</h1>
                            <section
                                className="left pb-2 grid grid-cols-4 gap-x-1 gap-y-1"
                            >
                                {/* Render outfits from 'outfits' constant */}
                                {outfits21.map((outfit, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            toggleOverlaySuit(outfit.overlayImage, 'outfit', y00tAttributes);
                                            setActiveOutfitSuit(outfit.name);
                                            console.log(ActiveOutfitSuit);
                                        }}
                                        style={{
                                            border: "2px solid transparent",
                                            width: "85px", // Add fixed width to maintain consistent size
                                            height: "85px", // Add fixed height to maintain consistent size
                                            borderRadius: "16px",
                                            ...(selectedOutfitSuit === outfit.overlayImage && { // Check against outfit name
                                                border: "2px solid black",

                                            }),
                                            position: "relative", // Add position relative
                                        }}
                                    >
                                        <img
                                            src={outfit.image}
                                            alt={outfit.name}
                                            style={{
                                                width: 80,
                                                height: 80,
                                                borderRadius: "16px",
                                                position: "relative", // Add position relative
                                            }} />
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "0",
                                                left: "0",
                                                width: "100%",
                                                height: "100%",
                                                maxWidth: "80px",
                                                maxHeight: "80px",
                                                border: "2.5px solid rgba(255, 255, 255, 1)",
                                                boxShadow: "inset 0 3px 0 rgba(0, 0, 0, 0.25)",
                                                borderRadius: "16px",
                                                zIndex: "1", // Add higher z-index to box shadow
                                            }} />
                                    </div>
                                ))}
                            </section>
                        </section>

                        {/* Tuxs Outfits */}
                        <section className="w-full" >
                            <h1
                                className={`flex text-xl font-bold pb-2 pt-5 text-slate `}
                                style={{}}>Tuxs</h1>
                            <section
                                className="left pb-2 grid grid-cols-4 gap-x-1 gap-y-1"
                            >
                                {/* Render outfits from 'outfits' constant */}
                                {outfits22.map((outfit, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            toggleOverlaySuit(outfit.overlayImage, 'outfit', y00tAttributes);
                                            setActiveOutfitSuit(outfit.name);
                                            console.log(ActiveOutfitSuit);
                                        }}
                                        style={{
                                            border: "2px solid transparent",
                                            width: "85px", // Add fixed width to maintain consistent size
                                            height: "85px", // Add fixed height to maintain consistent size
                                            borderRadius: "16px",
                                            ...(selectedOutfitSuit === outfit.overlayImage && { // Check against outfit name
                                                border: "2px solid black",

                                            }),
                                            position: "relative", // Add position relative
                                        }}
                                    >
                                        <img
                                            src={outfit.image}
                                            alt={outfit.name}
                                            style={{
                                                width: 80,
                                                height: 80,
                                                borderRadius: "16px",
                                                position: "relative", // Add position relative
                                            }} />
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "0",
                                                left: "0",
                                                width: "100%",
                                                height: "100%",
                                                maxWidth: "80px",
                                                maxHeight: "80px",
                                                border: "2.5px solid rgba(255, 255, 255, 1)",
                                                boxShadow: "inset 0 3px 0 rgba(0, 0, 0, 0.25)",
                                                borderRadius: "16px",
                                                zIndex: "1", // Add higher z-index to box shadow
                                            }} />
                                    </div>
                                ))}
                            </section>
                        </section>

                        {/* Fur Outfits */}
                        <section className="w-full opacity-0" >
                            <h1
                                className={`flex text-xl font-bold pb-2 pt-5 text-slate `}
                                style={{}}>Fur</h1>
                            <section
                                className="left pb-2 grid grid-cols-4 gap-x-1 gap-y-1"
                            >
                                {/* Render outfits from 'outfits' constant */}
                                {outfits5.map((outfit, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            toggleOverlayFur(outfit.overlayImage, 'outfit', y00tAttributes);
                                            setActiveOutfitFur(outfit.name);
                                            console.log(ActiveOutfitFur);
                                        }}
                                        style={{
                                            border: "2px solid transparent",
                                            width: "85px", // Add fixed width to maintain consistent size
                                            height: "85px", // Add fixed height to maintain consistent size
                                            borderRadius: "16px",
                                            ...(selectedOutfitFur === outfit.overlayImage && { // Check against outfit name
                                                border: "2px solid black",

                                            }),
                                            position: "relative", // Add position relative
                                        }}
                                    >
                                        <img
                                            src={outfit.image}
                                            alt={outfit.name}
                                            style={{
                                                width: 80,
                                                height: 80,
                                                borderRadius: "16px",
                                                position: "relative", // Add position relative
                                            }} />
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "0",
                                                left: "0",
                                                width: "100%",
                                                height: "100%",
                                                maxWidth: "80px",
                                                maxHeight: "80px",
                                                border: "2.5px solid rgba(255, 255, 255, 1)",
                                                boxShadow: "inset 0 3px 0 rgba(0, 0, 0, 0.25)",
                                                borderRadius: "16px",
                                                zIndex: "1", // Add higher z-index to box shadow
                                            }} />
                                    </div>
                                ))}
                            </section>
                        </section>


                        {/* Backwear Outfits */}
                        <section className="w-ful opacity-0" >
                            <h1
                                className={`flex text-xl font-bold pb-2 pt-5 text-slate `}
                                style={{}}>Backwear</h1>
                            <section
                                className="left pb-2 grid grid-cols-4 gap-x-1 gap-y-1"
                            >
                                {/* Render outfits from 'outfits' constant */}
                                {outfits.map((outfit, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            toggleOverlayBackwear(outfit.overlayImage, 'outfit', y00tAttributes);
                                            setActiveOutfitBackwear(outfit.name);
                                            console.log(ActiveOutfitBackwear);
                                        }}
                                        style={{
                                            border: "2px solid transparent",
                                            width: "85px", // Add fixed width to maintain consistent size
                                            height: "85px", // Add fixed height to maintain consistent size
                                            borderRadius: "16px",
                                            ...(selectedOutfitBackwear === outfit.overlayImage && { // Check against outfit name
                                                border: "2px solid black",

                                            }),
                                            position: "relative", // Add position relative
                                        }}
                                    >
                                        <img
                                            src={outfit.image}
                                            alt={outfit.name}
                                            style={{
                                                width: 80,
                                                height: 80,
                                                borderRadius: "16px",
                                                position: "relative", // Add position relative
                                            }} />
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "0",
                                                left: "0",
                                                width: "100%",
                                                height: "100%",
                                                maxWidth: "80px",
                                                maxHeight: "80px",
                                                border: "2.5px solid rgba(255, 255, 255, 1)",
                                                boxShadow: "inset 0 3px 0 rgba(0, 0, 0, 0.25)",
                                                borderRadius: "16px",
                                                zIndex: "1", // Add higher z-index to box shadow
                                            }} />
                                    </div>
                                ))}
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default Y00tsBoothSuit;

