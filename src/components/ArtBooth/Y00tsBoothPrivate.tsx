import React, { useState, useRef } from 'react';
import Image from 'next/image';

const ImageDisplay: React.FC = () => {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [buddyPosition, setBuddyPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const buddyRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Handle user image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setUserImage(reader.result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  // Start dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);

    // Track initial position when drag starts
    const container = buddyRef.current?.parentElement?.getBoundingClientRect();
    const offsetX = e.clientX - (container?.left ?? 0) - buddyPosition.x;
    const offsetY = e.clientY - (container?.top ?? 0) - buddyPosition.y;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!dragging) return;

      const newX = moveEvent.clientX - (container?.left ?? 0) - offsetX;
      const newY = moveEvent.clientY - (container?.top ?? 0) - offsetY;

      // Ensure buddy image stays within the container bounds
      const updatedX = Math.max(0, Math.min(container?.width ?? 0 - 100, newX));
      const updatedY = Math.max(0, Math.min(container?.height ?? 0 - 100, newY));

      setBuddyPosition({ x: updatedX, y: updatedY });
    };

    const handleMouseUp = () => {
      setDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Function to download the combined image with 10x scale for better quality
  const handleDownload = () => {
    if (!canvasRef.current || !userImage || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Use the native HTML Image constructor
    const catImage = new window.Image(); // Using native window.Image constructor
    const userUploadedImage = new window.Image(); // Using native window.Image constructor
    const buddyImage = new window.Image(); // Buddy image for overlay

    catImage.src = '/y00trebuilder/eyewear/Nouns.png'; // Cat image URL
    userUploadedImage.src = userImage;
    buddyImage.src = '/y00trebuilder/12345.png'; // Buddy image URL

    // Draw images onto the canvas when all images are loaded
    catImage.onload = () => {
      userUploadedImage.onload = () => {
        buddyImage.onload = () => {
          // Set the scaling factor (10x scale)
          const scaleFactor = 10;

          // Set canvas size to fit all images at original size (without scaling for download yet)
          const containerWidth = containerRef.current?.offsetWidth ?? 0; // Use optional chaining and fallback to 0 if null
          const containerHeight = containerRef.current?.offsetHeight ?? 0; // Use optional chaining and fallback to 0 if null

          // Set canvas size to container size
          canvas.width = containerWidth * scaleFactor; // Scale canvas width by the scale factor
          canvas.height = containerHeight * scaleFactor; // Scale canvas height by the scale factor

          // Draw cat image on canvas (fit to 10x scaled container size)
          context.drawImage(catImage, 0, 0, containerWidth * scaleFactor, containerHeight * scaleFactor);

          // Draw uploaded image on top of the cat image (fit to 10x scaled container size)
          context.drawImage(userUploadedImage, 0, 0, containerWidth * scaleFactor, containerHeight * scaleFactor);

          // Draw buddy image at the draggable position, scaled relative to the container size (180x180)
          const buddyWidth = 180;
          const buddyHeight = 180;
          const scaleX = containerWidth / 400; // Assuming the container is 400px wide
          const scaleY = containerHeight / 400; // Assuming the container is 400px high
          const scaledBuddyWidth = buddyWidth * scaleX * scaleFactor;
          const scaledBuddyHeight = buddyHeight * scaleY * scaleFactor;

          context.drawImage(
            buddyImage,
            buddyPosition.x * scaleX * scaleFactor, // Scale buddy position relative to container
            buddyPosition.y * scaleY * scaleFactor, // Scale buddy position relative to container
            scaledBuddyWidth,
            scaledBuddyHeight
          );

          // Download the combined image as PNG, but at a scaled-down resolution
          const dataUrl = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'combined_image.png'; // Image file name
          link.click();
        };
      };
    };
  };

  return (
    <div>
      <h2>Upload Your Image</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      
      <div
        ref={containerRef}
        style={{ position: 'relative', width: '400px', height: '400px', overflow: 'hidden' }}
      >
        {/* Display the cat image using Next.js Image component */}
        <Image
          src="/y00trebuilder/eyewear/Nouns.png" // Fixed path for cat image
          alt="Cat"
          layout="fill" // Make the cat image fill the container
          objectFit="cover" // Ensures the cat image covers the entire container
          priority // Optional: Use priority to load this image sooner
        />

        {/* Overlay the uploaded image on top of the cat image */}
        {userImage && (
          <Image
            src={userImage}
            alt="Uploaded"
            layout="fill" // Make the uploaded image fill the container
            objectFit="contain" // Ensure the uploaded image fits within the container
            style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
          />
        )}

        {/* The Buddy image: 180x180 and draggable */}
        <div
          ref={buddyRef}
          style={{
            position: 'absolute',
            top: `${buddyPosition.y}px`,
            left: `${buddyPosition.x}px`,
            width: '180px',
            height: '180px',
            cursor: 'move',
            zIndex: 2
          }}
          onMouseDown={handleMouseDown} // Start dragging
        >
          <Image
            src="/y00trebuilder/12345.png" // Buddy image URL
            alt="Buddy"
            width={180}
            height={180}
          />
        </div>
      </div>

      <button onClick={handleDownload} style={{ marginTop: '20px' }}>
        Download Combined Image
      </button>

      {/* Canvas element to render the images */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default ImageDisplay;
