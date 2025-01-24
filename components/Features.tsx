'use client';
import Image from "next/image";
import leftImage from "../public/assets/left-1.svg";
import rightImage from "../public/assets/right-2.svg";

export function Features() {
    return (
        <div className="relative flex flex-col md:flex-row mt-20 z-10 w-full h-auto"> 
            <div className="w-full md:w-1/2 relative h-auto"> 
                <Image src={leftImage} alt="Left Image" layout="responsive" width={500} height={500} className="block" />
            </div>
            <div className="w-full md:w-1/2 relative h-auto"> 
                <Image src={rightImage} alt="Right Image" layout="responsive" width={500} height={500} className="block" />
            </div>
        </div>
    );
}
