import Image from "next/image";

export function Footer() {
    return (
        <div className="bg-[rgba(32,31,31,1)] text-white">
            <div className="w-full">
                <Image
                    src="/assets/final.png"
                    alt="Footer Image"
                    width={1200}
                    height={300}
                    className="w-full h-auto object-cover"
                />
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-8 md:mb-0">
                        <div className="mb-4">
                            <Image
                                src="/assets/whiteLogo.png"
                                alt="BOTOL Logo"
                                width={150}
                                height={50}
                            />
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-400">
                                <Image src="/assets/icons/facebook-icon.svg" alt="Facebook" width={33} height={33} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-400">
                                <Image src="/assets/icons/twitter-icon.svg" alt="Twitter" width={33} height={33} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-400">
                                <Image src="/assets/icons/instagram-icon.svg" alt="Instagram" width={33} height={33} />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col text-lg space-y-4">
                        <ul className="flex flex-wrap space-x-2 md:space-x-10 md:justify-end">

                           <li className="w-1/4 md:w-auto ">Shop</li>
                            <li className="w-1/2 md:w-auto">Contact Us</li>
                            <li className="w-1/4 md:w-auto">About</li>
                            <li className="w-1/2 md:w-auto">Journal</li>
                            <li className="w-1/6 md:w-auto">Custom</li>

                        </ul>

                        <ul className="flex flex-wrap space-x-2 mt-4 md:space-x-10 md:justify-start">

                            <li className="w-1/4 md:w-auto">FAQ&apos;s</li>
                            <li className="w-1/2 md:w-auto">Returns</li>
                            <li className="w-1/4 md:w-auto">Ordering</li>
                            <li className="w-1/2 md:w-auto">Shipping</li>
                            <li className="w-1/2 md:w-auto">Personalization Policies</li>
                            
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-[rgba(50,50,50,1)] py-4">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-gray-400 opacity-75">Copyright © {new Date().getFullYear()} BOTOL. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}
