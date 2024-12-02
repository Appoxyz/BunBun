import React, { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import {
  Backgrounds,
  backgroundUrls,
  Furs,
  FurColors,
  Heads,
  HeadColors,
  Clothes,
  ClothesColors,
  Eyewears,
  EyewearColors,
} from "@/components/Banner/y00t_constants";

function Y00tBanners() {
  const [searchLink, setSearchLink] = useState("");
  const [baseImageUrl, setBaseImageUrl] = useState(
    "https://metadata.y00ts.com/y/8367.png"
  );
  const [baseSize, setBaseSize] = useState({
    width: "200px",
    height: "200px",
  });

  const [visibleBg, setVisibleBg] = useState("PhantomGreen");
  const [isLoading, setIsLoading] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [nameColor, setNameColor] = useState("#000000");

  const [selectedFurColor, setSelectedFurColor] = useState("#000000");
  const [selectedHeadColor, setSelectedHeadColor] = useState("#000000");
  const [selectedClothesColor, setSelectedClothesColor] = useState("#000000");
  const [selectedEyewearColor, setSelectedEyewearColor] = useState("#000000");

  const baseImageSizeMap = {
    banner: { width: "822px", height: "274px" },
  };

  const outfitSize = "100%";

  const [baseImageVisible, setBaseImageVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [imageKey, setImageKey] = useState(0);

  const leftSectionRef = useRef(null);

  const getY00tAttributes = async (id: number) => {
    try {
      const response = await fetch(`https://api.y00ts.com/y00ts/${id}`);
      const data = await response.json();
      const attributes = data.y00t.attributes;

      let backgroundValue = "";
      let furValue = "";
      let headValue = "";
      let clothesValue = "";
      let eyewearValue = "";

      for (const attribute of attributes) {
        switch (attribute.trait_type) {
          case "Background":
            backgroundValue = attribute.value;
            break;
          case "Fur":
            furValue = attribute.value;
            break;
          case "Head":
            headValue = attribute.value;
            break;
          case "Clothes":
            clothesValue = attribute.value;
            break;
          case "Eyewear":
            eyewearValue = attribute.value;
            break;
          default:
            break;
        }
      }

      return {
        background: backgroundValue,
        fur: furValue,
        head: headValue,
        clothes: clothesValue,
        eyewear: eyewearValue,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        background: "",
        fur: "",
        head: "",
        clothes: "",
        eyewear: "",
      };
    }
  };

  const handleSearchSubmit = async () => {
    setIsLoading(true);
    const link = parseInt(searchLink);

    if (!isNaN(link)) {
      const adjustedLink = link - 1;
      const { background, fur, head, clothes, eyewear } =
        await getY00tAttributes(link);

      setVisibleBg(Backgrounds[background as keyof typeof Backgrounds]);
      setBaseImageUrl(`https://metadata.y00ts.com/y/${adjustedLink}.png`);

      setSelectedFurColor(FurColors[fur as keyof typeof FurColors]);
      setSelectedHeadColor(HeadColors[head as keyof typeof HeadColors]);
      setSelectedClothesColor(ClothesColors[clothes as keyof typeof ClothesColors]);
      setSelectedEyewearColor(EyewearColors[eyewear as keyof typeof EyewearColors]);

      setImageKey((prevKey) => prevKey + 1);
    } else {
      setBaseImageUrl("https://metadata.y00ts.com/y/8367.png");
      setVisibleBg("");
      setImageKey((prevKey) => prevKey + 1);
    }

    setIsLoading(false);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(e.target.value);
  };

  const handleColorChange = (color: string) => {
    setNameColor(color);
  };

  const handleDownload = () => {
    if (leftSectionRef.current) {
      html2canvas(leftSectionRef.current).then((canvas) => {
        const imageUrl = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = "banner_image.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  };

  useEffect(() => {
    setBaseImageVisible(false);
    setOverlayVisible(false);

    setTimeout(() => {
      setBaseImageVisible(true);
    }, 100);

    setTimeout(() => {
      setOverlayVisible(true);
    }, 300);
  }, [baseImageUrl, visibleBg, imageKey]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Enter y00t ID 8368"
          value={searchLink}
          style={{
            width: "300px",
            height: "50px",
            fontFamily: "inter",
            fontWeight: "bold",
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
            fontFamily: "inter",
            fontWeight: "bold",
            fontSize: "16px",
            color: "#000000",
            border: "2px solid rgba(0, 0, 0, 1)",
            borderRadius: "16px",
            marginLeft: "10px",
          }}
          onClick={handleSearchSubmit}
        >
          Submit
        </button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={enteredName}
          style={{
            width: "400px",
            height: "50px",
            fontFamily: "inter",
            fontWeight: "bold",
            fontSize: "16px",
            color: "#000000",
            border: "2px solid rgba(0, 0, 0, 1)",
            borderRadius: "16px",
            paddingLeft: "10px",
            marginLeft: "10px",
          }}
          onChange={handleNameChange}
        />

        {[
          selectedFurColor,
          selectedHeadColor,
          selectedEyewearColor,
          selectedClothesColor,
        ].map((color, index) => (
          <button
            key={index}
            onClick={() => handleColorChange(color)}
            style={{
              width: "30px",
              height: "50px",
              background: color,
              color: "#000000",
              fontFamily: "Inter",
              fontSize: "15px",
              borderRadius: "16px",
              border: "none",
              marginRight: index !== 3 ? "5px" : "0",
            }}
          ></button>
        ))}
      </div>

      <div>
        <section
          className="left"
          style={{
            position: "relative",
            marginTop: "10px",
            marginBottom: "10px",
            width: baseImageSizeMap.banner.width,
            height: baseImageSizeMap.banner.height,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            borderRadius: "10px",
          }}
          ref={leftSectionRef}
        >
          <img
            key={imageKey}
            src={baseImageUrl}
            alt="Base Image"
            style={{
              width: baseSize.width,
              height: baseSize.height,
              zIndex: 2,
              opacity: baseImageVisible ? 1 : 0,
              transition: "opacity 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53)",
              borderRadius: "10px",
              transform: "scaleX(-1)", // Add this line for horizontal flip
            }}
          />
          {backgroundUrls[visibleBg as keyof typeof backgroundUrls] && (
            <img
              src={backgroundUrls[visibleBg as keyof typeof backgroundUrls]}
              alt={`${visibleBg} Overlay`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: baseImageSizeMap.banner.width,
                height: baseImageSizeMap.banner.height,
                zIndex: 1,
                transform: overlayVisible ? "translateX(0)" : "translateX(0%)",
                transition: "transform 0.5s ease-in",
                borderRadius: "10px",
              }}
            />
          )}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 3,
              textAlign: "center",
            }}
          >
            {enteredName && (
              <span
                style={{
                  fontFamily: "inter",
                  fontWeight: "bold",
                  fontSize: "140px",
                  color: nameColor,
                }}
              >
                {enteredName}
              </span>
            )}
          </div>
        </section>
      </div>

      <button
        style={{
          width: "150px",
          height: "50px",
          fontFamily: "Gloria Hallelujah",
          fontSize: "16px",
          color: "#00CC00",
          border: "2px solid rgba(0, 204, 0, 0.5)",
          borderRadius: "16px",
          marginTop: "10px",
        }}
        onClick={handleDownload}
      >
        Download Banner Image
      </button>
    </div>
  );
}

export default Y00tBanners;
