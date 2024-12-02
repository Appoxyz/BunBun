import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const NavBar: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    const updateMedia = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        const updateMedia = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        updateMedia();

        // Add event listener to handle resize
        window.addEventListener('resize', updateMedia);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    const navStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 25px 10px 25px', // Adjusted padding
        color: 'white',
    };

    const logoStyle: React.CSSProperties = {
        fontFamily: 'D5',
        color: 'black', // Corrected the property name
        fontSize: '24px',
    };

    const linksStyle: React.CSSProperties = {
        display: 'flex',
        gap: '15px',
        fontFamily: 'D2',
        color: 'black',
    };

    const linkStyle: React.CSSProperties = {
        textDecoration: 'none',
        color: 'black',
    };

    const iconsStyle: React.CSSProperties = {
        display: 'flex',
        gap: '15px',
    };

    const iconImageStyle: React.CSSProperties = {
        width: isMobile ? '20px' : '30px',
        height: isMobile ? '20px' : '30px',
    };

    return (
        <nav style={navStyle}>
            <div style={logoStyle}>y7Studios</div>
            <div style={linksStyle}>
                <a href="/" style={linkStyle}>Home</a>
                <a href="/donations" style={linkStyle}>Donations</a>
            </div>
            <div className='flex items-center w-3/12 justify-end'>
                <a href="https://x.com" className='w-8 mx-2'>
                    <Image src="/logo/magicEden.svg" width={500} height={500} style={iconImageStyle} alt="Magic Eden" />
                </a>
                <a href="https://x.com" className='w-6 mx-2'>
                    <Image src="/logo/x.svg" width={500} height={500} style={iconImageStyle} alt="X" />
                </a>
                <a href="https://discord.com" className='w-8 mx-2'>
                    <Image src="/logo/discord.svg" width={500} height={500} style={iconImageStyle} alt="Discord" />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
