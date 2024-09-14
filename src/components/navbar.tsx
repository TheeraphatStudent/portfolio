import { useState } from "react";



export const Navbar = () => {
    const ToggleButton = () => {

        const [isSpinning, setIsSpinning] = useState(false);
        const [currentImage, setCurrentImage] = useState('images/sun.png');

        const handleClick = () => {
            setIsSpinning(true);
            setTimeout(() => {
                setCurrentImage(currentImage === 'images/sun.png' ? 'images/moon.png' : 'images/sun.png');
                setIsSpinning(false);
            }, 500);
        };

        return (
            <div
                className={`flex items-center justify-center bg-secondary w-[80px] h-[80px] cursor-pointer p-3 rounded shadow-md`}
                onClick={handleClick}
            >
                <div
                    className={`w-full h-full bg-[#F2F7FF] transition-opacity duration-500 ease-in-out ${isSpinning ? 'animate-spin' : ''
                        }`}
                    style={{
                        maskImage: `url(${currentImage})`,
                        WebkitMaskImage: `url(${currentImage})`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                    }}
                />
            </div>
        )
    }

    return (
        <div className="flex justify-start gap-8 w-full h-20 p-8">
            <ToggleButton />

        </div>
    )

}