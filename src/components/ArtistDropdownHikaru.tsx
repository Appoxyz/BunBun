import React, { useState } from 'react';

interface ArtistDropdownProps {
    onSelect: (artist: string) => void;
}

const ArtistDropdown: React.FC<ArtistDropdownProps> = ({ onSelect }) => {
    const [selectedArtist, setSelectedArtist] = useState("Hikaru");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleArtistSelect = (artist: string) => {
        setSelectedArtist(artist);
        setIsDropdownOpen(false);
        onSelect(artist); // Call the onSelect callback with the selected artist
    };

    return (
        <div className="relative flex mx-auto justify-center mb-2 top-[75px] sm:top-[-85px]">
            <div className="w-full bg-greywhite bg-opacity-50 sm:px-00 sm:py-2 px-2 py-2 rounded-xl border-2 border-greywhite">
                <button
                    className="w-full h-15 flex justify-between items-center px-4 py-2 bg-greywhite bg-opacity-50 rounded-md border text-xs"
                    onClick={handleDropdownToggle}
                >
                    <span>{selectedArtist}</span>
                    <svg
                        className={`w-5 h-5 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {isDropdownOpen && (
                    <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white">
                        <div className="py-1">
                            <button
                                className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
                                onClick={() => handleArtistSelect("Strike")}
                            >
                                Strike
                            </button>
                            <button
                                className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
                                onClick={() => handleArtistSelect("AGZ")}
                            >
                                AGZ
                            </button>
                            <button
                                className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
                                onClick={() => handleArtistSelect("Cry")}
                            >
                                Cry
                            </button>
                            <button
                                className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
                                onClick={() => handleArtistSelect("Hikaru")}
                            >
                                Hikaru
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ArtistDropdown;