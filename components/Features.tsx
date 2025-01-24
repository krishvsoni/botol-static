'use client';
import Image from "next/image";
import leftImage from "../public/assets/left-1.png";
import rightImage from "../public/assets/right-2.png";

export function Features() {
    return (
        <div className="relative flex flex-col md:flex-row mt-20 z-10 w-full h-screen"> 
            <div className="w-full md:w-1/2 relative h-1/2 md:h-full"> 
                <Image src={leftImage} alt="Left Image" layout="fill" objectFit="fill" className="block" />
            </div>
            <div className="w-full md:w-1/2 relative h-1/2 md:h-full"> 
                <Image src={rightImage} alt="Right Image" layout="fill" objectFit="fill" className="block" />
            </div>
        </div>
    );
}
