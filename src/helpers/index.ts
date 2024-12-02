import mergeImages from "merge-images";
import { useCallback, useState } from "react";
// import html2canvas from "html2canvas";

// interface TextObject {
//   content: string;
//   color: string;
// }

const toDataURL = (
  url: string,
  baseImageSize: number,
  callback: (result: string | ArrayBuffer | null) => void
) => {
  const offScreenCanvas = document.createElement("canvas");
  offScreenCanvas.width = baseImageSize;
  offScreenCanvas.height = baseImageSize;
  var ctx = offScreenCanvas.getContext("2d");
  if (ctx) {
    const selectedImage = new window.Image();
    selectedImage.src = url;
    selectedImage.width = baseImageSize;
    selectedImage.height = baseImageSize;
    selectedImage.crossOrigin = "anonymous";

    selectedImage.onload = () => {
      if (ctx) {
        ctx.drawImage(selectedImage, 0, 0, baseImageSize, baseImageSize);
        callback(offScreenCanvas.toDataURL("image/png", 1));
      }
    };
  }
  // var xhr = new XMLHttpRequest();
  // xhr.onload = function () {
  //   var reader = new FileReader();
  //   reader.onloadend = function () {
  //     callback(reader.result);
  //   };
  //   reader.readAsDataURL(xhr.response);
  // };
  // xhr.open("GET", url);
  // xhr.responseType = "blob";
  // xhr.send();
};

interface ImageGenerationParams {
  nftImage: string;
  background: string;
  baseImageSize: number;
  dimensions: {
    width: number;
    height: number;
  };
  // overlay: string;
  handleResults: (
    generatedImage: string
    // withoutOverlay: string,
    // withOverlay: string
  ) => void;
  // customText: TextObject;
  handleImageError: (error: Error) => void;
}

export const useGenerateImage = () => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const generateImage = useCallback((params: ImageGenerationParams) => {
    setIsGenerating(true);

    const {
      nftImage,
      background,
      baseImageSize,
      dimensions,
      // overlay,
      handleResults,
      handleImageError,
    } = params;

    const { width, height } = dimensions;

    const mergeImageChain = (
      dataUrl: string | ArrayBuffer | null
      // textCanvas?: HTMLCanvasElement
    ) => {
      mergeImages(
        [
          {
            src: background,
            x: 0,
            y: 0,
          },
          {
            src: dataUrl as string,
            x: width / 2 - baseImageSize / 2,
            y: height - baseImageSize,
          },
          // ...(textCanvas
          //   ? [
          //       {
          //         src: textCanvas.toDataURL(),
          //         x: 0,
          //         y:
          //           overlay === "none"
          //             ? 900
          //             : overlay.includes("mayc")
          //             ? 1050
          //             : 1020,
          //       },
          //     ]
          //   : []),
          // ...(overlay !== "none"
          //   ? [
          //       {
          //         src: overlay,
          //         x: 0,
          //         y: textCanvas ? -40 : 0,
          //       },
          //     ]
          //   : []),
        ],
        { width, height }
      )
        .then((generatedImage) => {
          handleResults(generatedImage);
          // mergeImages([
          //   {
          //     src: generatedImage,
          //     x: 155,
          //     y: 166,
          //   },
          //   {
          //     src: Mockup,
          //     x: 0,
          //     y: 0,
          //   },
          // ]).then((withoutOverlay) => {
          //   mergeImages([
          //     {
          //       src: withoutOverlay,
          //       x: 0,
          //       y: 0,
          //     },
          //     {
          //       src: Overlay,
          //       x: 0,
          //       y: 0,
          //     },
          //   ]).then((withOverlay) => {
          //     handleResults(generatedImage, withoutOverlay, withOverlay);
          //   });
          // });

          setIsGenerating(false);
        })
        .catch((e) => {
          handleImageError(e);
          setIsGenerating(false);
        });
    };

    toDataURL(
      nftImage,
      baseImageSize,
      function (dataUrl: string | ArrayBuffer | null) {
        // if (customText.content.length === 0 || overlay === "none") {
        mergeImageChain(dataUrl);
        // } else {
        //   var customElement = document.createElement("div");
        //   customElement.innerHTML = customText.content;

        //   Object.assign(customElement.style, {
        //     fontSize: "64px",
        //     // fontSize: overlay === "none" ? "112px" : "64px",
        //     width: "1151px",
        //     textAlign: "center",
        //     color: customText.color,
        //   });

        //   document.body.appendChild(customElement);

        //   html2canvas(customElement, { backgroundColor: null, scale: 1 }).then(
        //     (textCanvas) => {
        //       mergeImageChain(dataUrl, textCanvas);
        //     }
        //   );

        //   document.body.removeChild(customElement);
        // }
      }
    );
  }, []);

  return { isGenerating, generateImage };
};
