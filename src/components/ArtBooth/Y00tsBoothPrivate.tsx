import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight, FaPlus, FaMinus } from 'react-icons/fa';

const ImageDisplay: React.FC = () => {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [buddyPosition, setBuddyPosition] = useState({ x: 0, y: 0 });
  const [buddySize, setBuddySize] = useState({ width: 180, height: 180 });
  const [dragging, setDragging] = useState(false);
  const [buddyImageSrc, setBuddyImageSrc] = useState('/y00trebuilder/1.png');
  const [selectedBuddyImage, setSelectedBuddyImage] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const buddyRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const buddyImages = [
    '/y00trebuilder/1.png',
    '/y00trebuilder/2.png',
    '/y00trebuilder/3.png',
    '/y00trebuilder/4.png',
    '/y00trebuilder/5.png',
    '/y00trebuilder/6.png',
  ];

  const handleBuddyImageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = parseInt(event.target.value);
    setSelectedBuddyImage(selectedIndex);
    setBuddyImageSrc(buddyImages[selectedIndex]);
  };

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

    catImage.src = '/y00trebuilder/bg.png';
    userUploadedImage.src = userImage;
    buddyImage.src = buddyImageSrc;

    await Promise.all([
      new Promise((resolve) => (catImage.onload = resolve)),
      new Promise((resolve) => (userUploadedImage.onload = resolve)),
      new Promise((resolve) => (buddyImage.onload = resolve)),
    ]);

    const scaleFactor = 5;
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    canvas.width = containerWidth * scaleFactor;
    canvas.height = containerHeight * scaleFactor;

    context.drawImage(catImage, 0, 0, canvas.width, canvas.height);
    context.drawImage(userUploadedImage, 0, 0, canvas.width, canvas.height);

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

    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'combined_image.png';
    link.click();
  };

  return (
    <div>
      <h2 style={{ fontFamily: 'Courier Black, monospace' }}>Upload Your Image</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      <div
        ref={containerRef}
        style={{ position: 'relative', width: '400px', height: '400px', overflow: 'hidden' }}
      >
        <Image src="/y00trebuilder/bg.png" alt="Cat" layout="fill" objectFit="cover" priority />
        {userImage && <Image src={userImage} alt="Uploaded" layout="fill" objectFit="contain" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />}
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
      </div>

      <div style={{ marginTop: '10px' }}>
        <select onChange={handleBuddyImageChange} value={selectedBuddyImage}>
          {buddyImages.map((image, index) => (
            <option key={index} value={index}>
              Buddy Image {index + 1}
            </option>
          ))}
        </select>

        <button onClick={() => handleMove('up')} style={buttonStyle}><FaArrowUp /></button>
        <button onClick={() => handleMove('down')} style={buttonStyle}><FaArrowDown /></button>
        <button onClick={() => handleMove('left')} style={buttonStyle}><FaArrowLeft /></button>
        <button onClick={() => handleMove('right')} style={buttonStyle}><FaArrowRight /></button>
        <button onClick={() => handleSizeChange(true)} style={buttonStyle}><FaPlus /></button>
        <button onClick={() => handleSizeChange(false)} style={buttonStyle}><FaMinus /></button>

        <button onClick={handleDownload} style={downloadButtonStyle}>
          Download Image
        </button>
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

const buttonStyle = { margin: '5px', padding: '10px' };
const downloadButtonStyle = {
  width: '100px',
  height: '35px',
  borderRadius: '15px',
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

export default ImageDisplay;
