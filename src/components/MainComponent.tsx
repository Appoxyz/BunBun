import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight, FaPlus, FaMinus } from 'react-icons/fa';

const ImageDisplay: React.FC = () => {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [buddyPosition, setBuddyPosition] = useState({ x: 0, y: 0 });
  const [buddySize, setBuddySize] = useState({ width: 90, height: 90 });
  const [dragging, setDragging] = useState(false);
  const [buddyImageSrc, setBuddyImageSrc] = useState('/images/1.png');
  const [selectedBuddyImage, setSelectedBuddyImage] = useState(0);
  const [userText, setUserText] = useState<string>('');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const buddyRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);



  // State to manage the width of the div
  const [isMobile, setIsMobile] = useState(false);

  // Update width on screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this threshold as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const buddyImages = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png',
    '/images/5.png',
    '/images/7.png',
  ];

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

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);

    const container = buddyRef.current?.parentElement?.getBoundingClientRect();
    const offsetX = e.clientX - (container?.left ?? 0) - buddyPosition.x;
    const offsetY = e.clientY - (container?.top ?? 0) - buddyPosition.y;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!dragging) return;

      const newX = moveEvent.clientX - (container?.left ?? 0) - offsetX;
      const newY = moveEvent.clientY - (container?.top ?? 0) - offsetY;

      const updatedX = Math.max(0, Math.min(container?.width ?? 0 - buddySize.width, newX));
      const updatedY = Math.max(0, Math.min(container?.height ?? 0 - buddySize.height, newY));

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

  const handleSizeChange = (increment: boolean) => {
    setBuddySize((prevSize) => {
      const newSize = {
        width: Math.max(50, prevSize.width + (increment ? 10 : -10)),
        height: Math.max(50, prevSize.height + (increment ? 10 : -10)),
      };
      return newSize;
    });
  };

  const handleMove = (direction: string) => {
    setBuddyPosition((prevPosition) => {
      const step = 10;
      const newPosition = { ...prevPosition };
      if (direction === 'up') newPosition.y = Math.max(0, prevPosition.y - step);
      if (direction === 'down') newPosition.y = Math.min((containerRef.current?.offsetHeight ?? 0) - buddySize.height, prevPosition.y + step);
      if (direction === 'left') newPosition.x = Math.max(0, prevPosition.x - step);
      if (direction === 'right') newPosition.x = Math.min((containerRef.current?.offsetWidth ?? 0) - buddySize.width, prevPosition.x + step);
      return newPosition;
    });
  };

  const handleDownload = async () => {
    if (!canvasRef.current || !userImage || !containerRef.current) {
      console.error('Canvas or container reference missing');
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    const catImage = new window.Image();
    const userUploadedImage = new window.Image();
    const buddyImage = new window.Image();

    catImage.src = '/images/bg.png';
    userUploadedImage.src = userImage;
    buddyImage.src = buddyImageSrc;

    await Promise.all([
      new Promise((resolve) => (catImage.onload = resolve)),
      new Promise((resolve) => (userUploadedImage.onload = resolve)),
      new Promise((resolve) => (buddyImage.onload = resolve)),
    ]);

    const scaleFactor = 5; // Scale factor for the entire canvas
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    // Set canvas dimensions based on the scale factor
    canvas.width = containerWidth * scaleFactor;
    canvas.height = containerHeight * scaleFactor;

    // Draw background and user image
    context.drawImage(catImage, 0, 0, canvas.width, canvas.height);
    context.drawImage(userUploadedImage, 0, 0, canvas.width, canvas.height);

    // Calculate scaled buddy image dimensions
    const buddyAspectRatio = buddyImage.width / buddyImage.height;
    const scaledBuddyWidth = buddySize.width * scaleFactor;
    const scaledBuddyHeight = scaledBuddyWidth / buddyAspectRatio;

    context.drawImage(
      buddyImage,
      buddyPosition.x * scaleFactor,
      buddyPosition.y * scaleFactor,
      scaledBuddyWidth,
      scaledBuddyHeight
    );

    // Apply scaling for user text
    if (userText) {
      const baseFontSize = 30; // Base font size for on-screen display
      const scaledFontSize = baseFontSize * scaleFactor;  // Scale font size for download

      // Set font size for text with scaling
      context.font = `bold ${scaledFontSize}px "Courier Black", monospace`;
      context.fillStyle = 'white';
      context.strokeStyle = 'black';  // Black border for text
      context.lineWidth = 5 * scaleFactor;  // Scale the border thickness

      // Calculate the text width and position to center it
      const textWidth = context.measureText(userText.toUpperCase()).width;
      const xPos = (canvas.width - textWidth) / 2;  // Center the text horizontally

      // Apply stroke and fill with uppercase user text
      context.strokeText(userText.toUpperCase(), xPos, 40 * scaleFactor);  // Stroke with scaled position
      context.fillText(userText.toUpperCase(), xPos, 40 * scaleFactor);    // Fill with white color
    }

    // Create a data URL for the image to trigger a download
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'combined_image.png';
    link.click();
  };

  return (
    <div className="container">
      {/* Content Section */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div style={{ paddingTop: isMobile ? '5px' : '100px' }}>
          <h1 style={{ textAlign: 'center', fontSize: '36px', color: '#333' }}>Meme Generator</h1>
        </div>


        {/* Step 1 - File Upload */}
        <div className="upload-container" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <h3 className="step-text">Step 1</h3>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{
              fontFamily: 'inherit',
              fontSize: '16px',
              padding: '10px',
              borderRadius: '8px',
              width: '80%',  // Set the width to 20%
            }}
          />
        </div>

        {/* Step 2 - File Upload */}
        <div className="upload-container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h3 className="step-text">Step 2</h3>
          <div style={{ display: 'flex', gap: '5px', marginBottom: '20px' }}>
            {buddyImages.map((image, index) => (
              <button
                key={index}
                onClick={() => { setBuddyImageSrc(image); setSelectedBuddyImage(index); }}
                style={{
                  backgroundColor: 'transparent',
                  border: `2px solid ${selectedBuddyImage === index ? 'black' : '#ccc'}`,
                  padding: '3px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s',
                }}
              >
                <Image src={image} alt={`Buddy ${index + 1}`} width={25} height={25} />
              </button>
            ))}
          </div>
        </div>

        {/* Step 3 - File Upload */}
        <div className="upload-container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h3 className="step-text">Step 3</h3>
          <input
            type="text"
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            placeholder="Enter text to display"
            className="custom-placeholder"
            style={{
              padding: '10px',
              fontSize: '16px',
              backgroundColor: 'transparent',
              border: '1.3px solid black',
              borderRadius: '5px',
              width: '265px',
              textTransform: 'uppercase',
              color: "black",
            }}
          />

        </div>

        {/* Step 4 - File Upload */}
        <div className="upload-container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h3 className="step-text">Step 4</h3>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '10px 0' }}>
            <button onClick={() => handleMove('up')} style={buttonStyle}><FaArrowUp /></button>
            <button onClick={() => handleMove('down')} style={buttonStyle}><FaArrowDown /></button>
            <button onClick={() => handleMove('left')} style={buttonStyle}><FaArrowLeft /></button>
            <button onClick={() => handleMove('right')} style={buttonStyle}><FaArrowRight /></button>
            <button onClick={() => handleSizeChange(true)} style={buttonStyle}><FaPlus /></button>
            <button onClick={() => handleSizeChange(false)} style={buttonStyle}><FaMinus /></button>
          </div>
        </div>

        <div
          style={{
            fontSize: '18px', // Font size for the "Preview" label
            fontWeight: 'bold',
            color: 'black', // Text color
            marginLeft: '10px', // Add some space from the left
            marginBottom: '10px', // Optional: space below the text
          }}
        >
          Preview
        </div>


        <div
          ref={containerRef}
          style={{
            position: 'relative',
            width: '400px',
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid black',
            borderRadius: "5px"
          }}
        >
          {userImage && (
            <img
              src={userImage}
              alt="User Image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                position: 'absolute',
                top: 0,
                left: 0,
                borderRadius: "5px"
              }}
            />
          )}

          <div
            ref={buddyRef}
            style={{
              position: 'absolute',
              top: `${buddyPosition.y}px`,
              left: `${buddyPosition.x}px`,
              width: `${buddySize.width}px`,
              height: `${buddySize.height}px`,
              cursor: 'move',
              zIndex: 2,
            }}
            onMouseDown={handleMouseDown}
          >
            <Image src={buddyImageSrc} alt="Buddy" width={buddySize.width} height={buddySize.height} />
          </div>

          {/* Display the user text */}
          {userText && (
            <div
              style={{
                position: 'absolute',
                top: '20px', // Position text at the top of the container
                left: '50%', // Horizontally center the text
                transform: 'translateX(-50%)', // Offset the text by 50% of its own width to center it
                fontSize: '30px', // Use base size for on-screen display
                fontWeight: 'bold',
                color: 'white',
                zIndex: 3,
                textShadow: '2px 2px 4px black, -2px -2px 4px black, 2px -2px 4px black, -2px 2px 4px black',
                fontFamily: '"Courier Black", monospace',
              }}
            >
              {userText.toUpperCase()} {/* Display the text in uppercase */}
            </div>
          )}

        </div>

        {/* Controls Section */}
        <div style={{ textAlign: 'center', paddingTop: '20px' }}>
          {/* Download Button */}
          <button onClick={handleDownload} style={downloadButtonStyle}>
            Download
          </button>
        </div>


        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '10px',
  borderRadius: '8px',
  backgroundColor: '#1c1c1c',
  color: 'white',
  fontSize: '14px',
  cursor: 'pointer',
};

const downloadButtonStyle = {
  width: '200px',
  height: '40px',
  borderRadius: '8px',
  backgroundColor: '#1c1c1c',
  color: 'white',
  cursor: 'pointer',
  fontSize: '16px',
};

export default ImageDisplay;
