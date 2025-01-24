import Image from "next/image";

interface ProductCardProps {
    imageSrc: string;
    altText: string;
    title: string;
}

export function Products() {
    return (
        <div className="mt-10 font-familjen">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 px-4 md:px-12 lg:px-24">
                <div className="text-center md:text-left">
                    <h1 className="font-bold text-4xl md:text-6xl">Hydration Essentials</h1>
                    <p className="text-lg md:text-xl mt-4">Discover Our Range of Premium Water Bottles</p>
                </div>
                <button className="bg-gradient-to-r from-[#00d1ff] to-[#1a83ff] text-white px-6 py-3 mt-4 md:mt-0 rounded-full text-lg font-semibold hover:from-[#1a83ff] hover:to-[#00d1ff] transition-all duration-300">
                    View More
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-12 px-4 md:px-16 lg:px-24">
                <ProductCard
                    imageSrc="/assets/products/p1.png"
                    altText="Rainbow 600"
                    title="Rainbow 600"
                />
                <ProductCard
                    imageSrc="/assets/products/p2.png"
                    altText="Rio 650"
                    title="Rio 650"
                />
                <ProductCard
                    imageSrc="/assets/products/p3.png"
                    altText="Big Bull 1300"
                    title="Big Bull 1300"
                />
            </div>

            {/* Second Row of Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-12 px-4 md:px-16 lg:px-24">
                <ProductCard
                    imageSrc="/assets/products/p4.png"
                    altText="Rome 600"
                    title="Rome 600"
                />
                <ProductCard
                    imageSrc="/assets/products/p1.png"
                    altText="Rainbow 600"
                    title="Rainbow 600"
                />
                <ProductCard
                    imageSrc="/assets/products/p2.png"
                    altText="Rio 650"
                    title="Rio 650"
                />
            </div>

            <div className="mt-16 bg-white h-32"></div>
        </div>
    );
}

function ProductCard({ imageSrc, altText, title }: ProductCardProps) {
    return (
        <div className="flex flex-col items-center md:items-start">
            <div className="relative">
                <Image
                    src={imageSrc}
                    alt={altText}
                    width={400} // Larger image size
                    height={400} // Larger image size
                    className="rounded-lg"
                />
            </div>

            <div className="flex flex-col items-center md:items-start w-full mt-4">
                <h2 className="font-semibold text-xl md:text-2xl">{title}</h2>
                <button className="bg-gradient-to-r from-[#00d1ff] to-[#1a83ff] text-white px-4 md:px-6 py-2 mt-2 rounded-full text-sm font-semibold hover:from-[#1a83ff] hover:to-[#00d1ff] transition-all duration-300">
                    Learn More
                </button>
            </div>
        </div>
    );
}