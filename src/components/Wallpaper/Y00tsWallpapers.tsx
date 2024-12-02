import React, { useEffect, useState } from "react";
import { Backgrounds, backgroundImages } from "@/components/Wallpaper/y00t_wallpaper_constants";
import mergeImages from 'merge-images';

function Y00tWallpapers() {
  const [selectedOutfit, setSelectedOutfit] = useState("");
  const [searchLink, setSearchLink] = useState("");
  const [baseImageUrl, setBaseImageUrl] = useState(
    "https://metadata.y00ts.com/y/8367.png"
  );
  const [baseSize, setBaseSize] = useState({
    width: "400px",
    height: "400px",
  });

  const [visibleBg, setVisibleBg] = useState("Red");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDimension, setSelectedDimension] = useState("home");
  const [isDownloadClicked, setIsDownloadClicked] = useState(false);

  const baseImageSizeMap = {
    home: { width: "400px", height: "400px" },
    phone: { width: "252px", height: "545px" },
    desktop: { width: "859px", height: "483px" },
    banner: { width: "822px", height: "274px" },
  };

  const baseSizeMap = {
    home: { width: "400px", height: "400px" },
    phone: { width: "250px", height: "250px" },
    desktop: { width: "300px", height: "300px" },
    banner: { width: "200px", height: "200px" },
  };

  const [baseImageVisible, setBaseImageVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setBaseImageVisible(false);
    setOverlayVisible(false);

    // Delay the visibility to create a fade-in effect
    setTimeout(() => {
      setBaseImageVisible(true);
    }, 100);

    // Delay the visibility of the overlay to create a slide-in effect
    setTimeout(() => {
      setOverlayVisible(true);
    }, 300);
  }, [baseImageUrl, visibleBg, imageKey]);

  const toggleOverlay = (overlayUrl: string) => {
    setSelectedOutfit((prevSelectedOutfit) =>
      prevSelectedOutfit === overlayUrl ? "" : overlayUrl
    );
  };

  const gety00tAttributes = async (id: number) => {
    try {
      const response = await fetch(
        `https://api.y00ts.com/y00ts/${id}`
      );
      const data = await response.json();
      const attributes = data.y00t.attributes;

      let backgroundValue = "";

      for (const attribute of attributes) {
        switch (attribute.trait_type) {
          case "Background":
            backgroundValue = attribute.value;
            break;
          default:
            break;
        }
      }

      return {
        background: backgroundValue,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { background: "" };
    }
  };

  const handleSearchSubmit = async () => {
    setIsLoading(true);
    const link = parseInt(searchLink);

    if (!isNaN(link)) {
      const adjustedLink = link - 1;
      const { background } = await gety00tAttributes(link);

      setVisibleBg(Backgrounds[background as keyof typeof Backgrounds]);
      setBaseImageUrl(
        `https://metadata.y00ts.com/y/${adjustedLink}.png`
      );
      setImageKey((prevKey) => prevKey + 1);
    } else {
      setBaseImageUrl("ttps://metadata.y00ts.com/y/8367.png");
      setVisibleBg("Red");
      setImageKey((prevKey) => prevKey + 1);
    }

    setIsLoading(false);
  };

  const handleDimensionChange = async (dimension: string) => {
    setSelectedDimension(dimension);

    const link = parseInt(searchLink);

    if (!isNaN(link)) {
      const { background } = await gety00tAttributes(link);
      setVisibleBg(Backgrounds[background as keyof typeof Backgrounds]);
      setImageKey((prevKey) => prevKey + 1);
    }
  };

  const handleButtonPress = async (dimension: string) => {
    setSelectedDimension(dimension);

    setBaseSize(baseSizeMap[dimension as keyof typeof baseSizeMap]);
    setImageKey((prevKey) => prevKey + 1);
  };

  const handleDownloadClick = async () => {
    try {
      setIsDownloadClicked(true); // Set download button clicked state to true

      let mergedImage = await mergeImages([
        backgroundImages[visibleBg as keyof typeof backgroundImages],
        baseImageUrl,
      ], {
        crossOrigin: "anonymous", // Make sure crossOrigin property is set correctly
        width: parseInt(baseImageSizeMap[selectedDimension as keyof typeof baseImageSizeMap].width) * 10,
        height: parseInt(baseImageSizeMap[selectedDimension as keyof typeof baseImageSizeMap].height) * 10,
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

      // Open the image in a new tab
      window.open(window.URL.createObjectURL(blob), '_blank');
    } catch (ex) {
      console.log(ex);
      setIsDownloadClicked(false); // Set download button clicked state back to false
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px", // Add margin to separate input and buttons
        }}
      >
        <input
          type="text"
          placeholder="Enter y00t ID"
          value={searchLink}
          style={{
            width: "300px",
            height: "50px",
            fontFamily: "Inter",
            fontSize: "16px",
            color: "#000000",
            border: "2px solid rgba(0, 0, 0, 1)",
            borderRadius: "16px",
            paddingLeft: "10px",
          }}
          onChange={(e) => setSearchLink(e.target.value)}
        />
        <button
          style={{
            width: "100px",
            height: "50px",
            fontFamily: "Inter",
            fontSize: "16px",
            color: "#000000",
            border: "2px solid rgba(0, 0, 0, 1)",
            borderRadius: "16px",
            marginLeft: "10px", // Add margin to separate input and buttons
          }}
          onClick={handleSearchSubmit}
        >
          Submit
        </button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "5px", // Adjust the gap between buttons
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => handleButtonPress("home")}
          style={{
            width: "100px",
            height: "50px",
            background: "#000000",
            color: "#FFFFFF",
            fontFamily: "Inter",
            fontSize: "15px",
            borderRadius: "16px",
            border: "none",
          }}
        >
          Home
        </button>
        <button
          onClick={() => handleButtonPress("phone")}
          style={{
            width: "100px",
            height: "50px",
            background: "#000000",
            color: "#FFFFFF",
            fontFamily: "Inter",
            fontSize: "15px",
            borderRadius: "16px",
            border: "none",
          }}
        >
          Phone
        </button>
        <button
          onClick={() => handleButtonPress("desktop")}
          style={{
            width: "100px",
            height: "50px",
            background: "#000000",
            color: "#FFFFFF",
            fontFamily: "Inter",
            fontSize: "15px",
            borderRadius: "16px",
            border: "none",
          }}
        >
          Desktop
        </button>
        <button
          onClick={() => handleButtonPress("banner")}
          style={{
            width: "100px",
            height: "50px",
            background: "#000000",
            color: "#FFFFFF",
            fontFamily: "Inter",
            fontSize: "15px",
            borderRadius: "16px",
            border: "none",
          }}
        >
          Banner
        </button>
      </div>


      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <section
          className="left"
          style={{
            position: "relative",
            marginTop: "10px",
            marginBottom: "10px",
            width: baseImageSizeMap[selectedDimension as keyof typeof baseImageSizeMap].width,
            height: baseImageSizeMap[selectedDimension as keyof typeof baseImageSizeMap].height,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end", // Change to "flex-end"
            borderRadius: "10px", // Adjust the value to control the amount of curvature
          }}
        >
          <img
            key={imageKey} // Add key to trigger animation
            src={baseImageUrl}
            alt="Base Image"
            style={{
              width: baseSize.width,
              height: baseSize.height,
              zIndex: 2,
              top: 50,
              right: 0,
              opacity: baseImageVisible ? 1 : 0,
              transition: "opacity 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53)",
              borderRadius: "10px", // Adjust the value to control the amount of curvature
            }}
          />
          {backgroundImages[visibleBg as keyof typeof backgroundImages] && (
            <img
              src={backgroundImages[visibleBg as keyof typeof backgroundImages]}
              alt={`${visibleBg} Overlay`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: baseImageSizeMap[selectedDimension as keyof typeof baseImageSizeMap].width,
                height: baseImageSizeMap[selectedDimension as keyof typeof baseImageSizeMap].height,
                zIndex: 1,
                transform: overlayVisible ? "translateX(0)" : "translateX(0%)",
                transition: "transform 0.5s ease-in",
                borderRadius: "10px", // Adjust the value to control the amount of curvature
              }}
            />
          )}
        </section>
        {/* Download Button */}
        <div
          className="w-full flex my-5"
        >
          <div className="w-full">
            <button
              className="flex justify-center items-center rounded-lg w-full h-12 relative overflow-hidden bg-black-100 text-white font-bold text-16px"
              style={{
                position: 'relative',
              }}
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
                  className={`grow my-auto ${isDownloadClicked ? 'hide' : 'nohide'}`}
                  style={{ zIndex: 2, fontFamily: 'D4', fontStyle: 'bold' }}
                >
                  DOWNLOAD
                </div>
              </div>
              <div className="hover-circle" />
            </button>
          </div>
        </div>

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
      </div>
    </div>
  );
};
export default Y00tWallpapers;
