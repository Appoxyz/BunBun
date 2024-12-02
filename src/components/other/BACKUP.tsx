import React, { useState, useRef, useEffect } from "react";
import { useGenerateImage } from "@/helpers";
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
    outfits8,
    outfits9,
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

function Y00tsBoothForbes() {
    const [searchLink, setSearchLink] = useState("");
    const [baseImageUrl, setBaseImageUrl] = useState(
        "https://metadata.y00ts.com/y/8368.png"
    );
    const [visibleFace, setVisibleFace] = useState("Blase");
    const [visibleClothes, setVisibleClothes] = useState("SundayShirt");
    const [visibleEyewear, setVisibleEyewear] = useState("RetroApple");
    const [visibleFur, setVisibleFur] = useState("SandDollarBlase");
    const [visibleBg, setVisibleBg] = useState("PhantomGreen");
    const [visibleHead, setVisibleHead] = useState("MoneyBands");
    const [visibleHeadLowerLevel, setVisibleHeadLowerLevel] = useState("MoneyBands");
    const [selectedOutfit, setSelectedOutfit] = useState("");
    const [isDownloadClicked, setIsDownloadClicked] = useState(false);
    const [ActiveOutfit, setActiveOutfit] = useState("");
    const baseImageStyle = {
        position: "absolute",
        top: "64px", // Set the initial top position of the base image here
    };
    const [ForbesHatUpperVisible, setForbesHatUpperVisible] = useState(false);
    const [UpperForbesVariable, setUpperForbesVariable] = useState("");

    const leftSectionRef = useRef(null);

    const baseImageSize = "470px";


    const toggleOverlay = (overlayImage: string, outfitType: string, y00tAttributes: { head?: string; headlowerlevel?: string; clothes?: string; face?: string; fur?: string; eyewear?: string; background?: string; }) => {
        setSelectedOutfit((prevSelectedOutfit) =>
            prevSelectedOutfit === overlayImage ? "" : overlayImage
        );

        if (selectedOutfit === overlayImage) {
            setVisibleHead(Heads[y00tAttributes.head as keyof typeof Heads]);
            setVisibleClothes(Clothess[y00tAttributes.clothes as keyof typeof Clothess]);
            setVisibleEyewear(Eyewears[y00tAttributes.eyewear as keyof typeof Eyewears]);
            setVisibleHeadLowerLevel(HeadsLowerLevel[y00tAttributes.headlowerlevel as keyof typeof HeadsLowerLevel]);
            setForbesHatUpperVisible(false);
            setUpperForbesVariable("Other")
        } else {
            if (outfitType === 'outfit') {
                setVisibleClothes(Clothess["None"]);
                setVisibleHead(Heads[y00tAttributes.head as keyof typeof Heads]);
                setVisibleEyewear(Eyewears[y00tAttributes.eyewear as keyof typeof Eyewears]);
                setVisibleHeadLowerLevel(HeadsLowerLevel[y00tAttributes.headlowerlevel as keyof typeof HeadsLowerLevel]);
                setForbesHatUpperVisible(false);
                setUpperForbesVariable("Other")
            } else if (outfitType === 'outfit2') {
                setVisibleHead(Heads["None"]);
                setVisibleClothes(Clothess[y00tAttributes.clothes as keyof typeof Clothess]);
                setVisibleEyewear(Eyewears[y00tAttributes.eyewear as keyof typeof Eyewears]);
                setVisibleHeadLowerLevel(HeadsLowerLevel["None"]);
                setForbesHatUpperVisible(true);
                setUpperForbesVariable("ForbesHatUpper")
            } else if (outfitType === 'outfit3') {
                setVisibleHead(Heads[y00tAttributes.head as keyof typeof Heads]);
                setVisibleClothes(Clothess[y00tAttributes.clothes as keyof typeof Clothess]);
                setVisibleEyewear(Eyewears["None"]);
                setVisibleHeadLowerLevel(HeadsLowerLevel[y00tAttributes.headlowerlevel as keyof typeof HeadsLowerLevel]);
                setForbesHatUpperVisible(false);
                setUpperForbesVariable("Other")
            } else if (outfitType === 'outfit4') {
                setVisibleHead(Heads["None"]);
                setVisibleClothes(Clothess[y00tAttributes.clothes as keyof typeof Clothess]);
                setVisibleEyewear(Eyewears[y00tAttributes.eyewear as keyof typeof Eyewears]);
                setVisibleHeadLowerLevel(HeadsLowerLevel["None"]);
                setForbesHatUpperVisible(false);
                setUpperForbesVariable("Other")
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
            setSelectedOutfit("");
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



    const handleButtonClick = async () => {
        try {
            setIsDownloadClicked(!isDownloadClicked); // Set download button clicked state to true

            const response = await fetch('https://b7lj75g247qsgqiqmj63okj2fa0fledi.lambda-url.us-east-1.on.aws/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'type': 'composite',
                    'animated': false,
                    'format': 'json',
                    'components': [
                        `y00ts/backgrounds/${visibleBg}.png`,
                        `y00ts/fur/${visibleFur}.png`,
                        `y00ts/clothing/${visibleClothes}.png`,
                        `y00ts/headlower/${visibleHeadLowerLevel}.png`,
                        `y00ts/overlay/${ActiveOutfit}.PNG`,
                        `y00ts/eyewear/${visibleEyewear}.png`,
                        `y00ts/headupper/${visibleHead}.png`,
                        `y00ts/overlay/${UpperForbesVariable}.PNG`,
                    ]
                })
            });

            // `y00ts/overlay/ForbesHat.PNG`,

            try {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('working?');
                console.log(data);

                // Retrieve the URL directly from the response
                const imageUrl = data.url || "";

                // Now you can use the imageUrl to display the image or further process it
                console.log('Image URL:', imageUrl);
                console.log(ActiveOutfit);
                console.log(visibleFace);
                console.log("visibleClothes:", visibleClothes);
                console.log("visibleEyewear:", visibleEyewear);
                console.log("visibleFur:", visibleFur);
                console.log("visibleBg:", visibleBg);
                console.log("visibleHead:", visibleHead);
                console.log("visibleHeadLowerLevel:", visibleHeadLowerLevel);
                console.log("selectedOutfit:", selectedOutfit);
                console.log("ActiveOutfit:", ActiveOutfit);
                console.log("ForbesUpperHat:", UpperForbesVariable);

                // Download the image
                const downloadLink = document.createElement('a');
                downloadLink.href = imageUrl;
                downloadLink.download = 'image.png';
                downloadLink.click();

            } catch (error) {
                console.error('Error:', error);
            } finally {
                setIsDownloadClicked(false); // Set download button clicked state back to false
            }
        }
        finally {
            setIsDownloadClicked(false); // Set download button clicked state back to false
        }
    };



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
                                    fontFamily: 'T3',
                                    fontWeight: 'bold',
                                    fontSize: "16px",
                                    backgroundColor: 'rgba(225, 225, 225, 0.27)',
                                    border: "2px solid rgba(0, 0, 0)",
                                    marginRight: "5px" // Adding margin to create a gap between input and button
                                }}
                                onChange={(e) => setSearchLink(e.target.value)} />
                            <button
                                className="text-white h-11 w-60 rounded-lg"
                                style={{
                                    fontFamily: 'D3',
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                    color: 'white',
                                    backgroundColor: '#22c55d',
                                    marginLeft: "5px" // Adding margin to create a gap between input and button
                                }}
                                onClick={() => {
                                    handleSearchSubmit();
                                    setForbesHatUpperVisible(false);
                                }}

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
                            top: baseImageStyle.top, // Copying top position from base image
                            border: "2px solid rgba(0, 0, 0)",
                            borderRadius: "20px",
                        }} />
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
                    {selectedOutfit && (
                        <img
                            src={selectedOutfit}
                            alt="Overlay"
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
                    {ForbesHatUpperVisible && (
                        <img
                            src={"/y00tRebuilder/overlay/parnerships/forbesweb3/ForbesHatUpper.png"}
                            alt="Forbes Hat"
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
                    >
                        {/* Download Button */}
                        <div className="w-full">
                            <button
                                className="flex justify-center items-center rounded-lg w-full h-12 relative overflow-hidden bg-black-100 text-white font-bold text-16px"
                                style={{
                                    position: 'relative', // Added position relative to contain the hover circle
                                }}
                                onClick={handleButtonClick}
                            >
                                <div className="flex gap-1.5" style={{ zIndex: 2 }}>
                                    {/* Download Icon */}
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/68d0396bacfe4888fe13fd9395f930b65ceb447ba22b5358451a5ccb4eddcfcc?"
                                        alt="Download icon"
                                        className={`aspect-square w-23px ${isDownloadClicked ? 'scaled' : 'noscaled'}`} // Add scaled class when download is clicked
                                        loading="lazy"
                                    />
                                    <div
                                        className={`grow my-auto ${isDownloadClicked ? 'hide' : 'nohide'}`} // Add hidden class when download is clicked
                                        style={{ zIndex: 2, fontFamily: 'D4', fontStyle: 'bold' }}
                                    >
                                        DOWNLOAD
                                    </div>
                                </div>
                                {/* Red Circle Expanding on Hover */}
                                <div className="hover-circle" />
                            </button>
                        </div>
                    </div>

                    {/* Container for Styles */}
                    <div className="container"></div>
                    {/* CSS Styles */}
                    <style jsx>{`
        .container {
          position: relative;
        }
        
        .hover-circle {
          position: absolute;
          background-color: #00a1e5;
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
          opacity: 0; /* Initially hidden */
          transform: translate(100%, 0%) scale(1);
          transition: opacity 0.2s ease-in, transform 0.2s ease-in; /* Smooth transition */
        }

        .nohide {
          opacity: 1; /* Initially hidden */
          transition: opacity 0.2s ease-in, transform 0.2s ease-in; /* Smooth transition */
        }

        .scaled {
          transform: scale(1.3);
          transform: translate(180%, 0%) scale(1.6);
          transition: transform 0.3s ease; /* Smooth transition */
        }

         .noscaled {
          transform: scale(1);
          transition: transform 0.5s ease; /* Smooth transition */
        }

      `}</style>
                </section>

                <div>
                    {/*<div className="sm:py-8"></div>*/}

                    <div className="flex flex-col items-start justify-top h-full relative">

                        {/* Head Outfits */}
                        <section className="w-full">
                            <h1
                                className={`flex text-lg font-bold pb-2 pt-5 text-black `}
                                style={{
                                    fontFamily: 'T3',
                                    fontStyle: "bold",
                                    fontSize: "18px",
                                }}>Heads</h1>
                            <section
                                className="left pb-2 grid grid-cols-4 gap-x-1 gap-y-1"
                            >
                                {/* Render outfits from 'outfits' constant */}
                                {outfits9.map((outfit, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            toggleOverlay(outfit.overlayImage, 'outfit2', y00tAttributes);
                                            setActiveOutfit(outfit.name);
                                            console.log(ActiveOutfit);
                                        }}
                                        style={{
                                            border: "2px solid transparent",
                                            width: "80px", // Add fixed width to maintain consistent size
                                            height: "80px", // Add fixed height to maintain consistent size
                                            borderRadius: "16px",
                                            ...(selectedOutfit === outfit.overlayImage && { // Check against outfit name
                                                border: "2px solid black",

                                            }),
                                            position: "relative", // Add position relative
                                        }}
                                    >
                                        <img
                                            src={outfit.image}
                                            alt={outfit.name}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                maxWidth: "80px",
                                                maxHeight: "80px",
                                                border: "1.5px solid rgba(255, 255, 255, 1)",
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
                                                border: "1.5px solid rgba(255, 255, 255, 1)",
                                                boxShadow: "inset 0 3px 0 rgba(0, 0, 0, 0.25)",
                                                borderRadius: "16px",
                                                zIndex: "1", // Add higher z-index to box shadow
                                            }} />
                                    </div>
                                ))}
                            </section>
                        </section>


                        {/* Clothing Outfits */}
                        <section className="w-full">
                            <h1
                                className={`flex text-lg font-bold pb-2 pt-5 text-black `}
                                style={{
                                    fontFamily: 'T3',
                                    fontStyle: "bold",
                                    fontSize: "18px",
                                }}>Clothing</h1>
                            <section
                                className="left pb-2 grid grid-cols-4 gap-x-1 gap-y-1"
                            >
                                {/* Render outfits from 'outfits' constant */}
                                {outfits8.map((outfit, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            toggleOverlay(outfit.overlayImage, 'outfit', y00tAttributes);
                                            setActiveOutfit(outfit.name);

                                        }}
                                        style={{
                                            border: "2px solid transparent",
                                            width: "80px", // Add fixed width to maintain consistent size
                                            height: "80px", // Add fixed height to maintain consistent size
                                            borderRadius: "16px",
                                            ...(selectedOutfit === outfit.overlayImage && { // Check against outfit name
                                                border: "2px solid black",

                                            }),
                                            position: "relative", // Add position relative
                                        }}
                                    >
                                        <img
                                            src={outfit.image}
                                            alt={outfit.name}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                maxWidth: "80px",
                                                maxHeight: "80px",
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
                                                border: "1.5px solid rgba(255, 255, 255, 1)",
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

export default Y00tsBoothForbes;


