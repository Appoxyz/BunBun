import { useState } from 'react';

export default function Home() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const colors = ['#01AE6A', '#2F8EFF', '#FF6B6B', '#FFCA7B'];


    // Define the indices and their corresponding colors
    const permanentIndices = [60, 25, 96, 17, 88];
    const permanentColors = ['#01AE6A', '#2F8EFF', '#FF6B6B', '#FFCA7B', '#2F8EFF'];

    const calculateTotalItems = () => {
        const itemsPerRowMobile = 5; // Adjust as needed for mobile
        const itemsPerRowDesktopLarge = 16; // Adjust as needed for desktop
        const itemsPerRowDesktopMedium = 13; // Adjust as needed for desktop
        const totalItemsMobile = itemsPerRowMobile * 9;
        const totalItemsDesktopLarge = itemsPerRowDesktopLarge * 8;
        const totalItemsDesktopMedium = itemsPerRowDesktopMedium * 8;
        // Check if window is defined (for environments like server-side rendering)
        if (typeof window !== 'undefined') {
            return window.innerWidth <= 1440 ? (window.innerWidth >= 768 ? totalItemsDesktopMedium : totalItemsMobile) : totalItemsDesktopLarge;
        } else {
            // Default to mobile layout if window is not available
            return totalItemsMobile;
        }
    };

    const totalItems = calculateTotalItems();

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    const getDefaultColor = (index: number) => {
        // Check if the index is one of the permanent ones
        const permanentIndex = permanentIndices.indexOf(index);
        if (permanentIndex !== -1) {
            return permanentColors[permanentIndex]; // Return the corresponding permanent color
        }
        // If not permanent, return transparent or random color
        return hoveredIndex === index ? getRandomColor() : 'transparent';
    };

    return (
        <main className={`flex min-h-screen w-full flex-col items-center justify-start pt-20`}>
            <div className="container flex w-full relative" style={{ zIndex: 2 }}>
                {/* Centered Text */}
                {/* Rows of Squares */}
                <div className="grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(74px, 1fr))',
                    gridTemplateRows: '74px',
                    rowGap: '5px',
                    columnGap: '5px',
                    width: '100%',
                }}>
                    {Array.from({ length: totalItems }).map((_, index: number) => (
                        <div
                            key={index}
                            className="square"
                            style={{
                                width: '74px',
                                height: '74px',
                                borderRadius: '9px',
                                backgroundColor: getDefaultColor(index),
                                border: "1.5px solid rgba(0, 0, 0, 0.15)",
                            }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        ></div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        .container {
          position: relative; /* Ensure relative positioning */
        }
        .grid {
          width: 100%; /* Span full width */
        }
        .square {
        }
      `}</style>
        </main>
    );
}