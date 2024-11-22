import Image from "next/image";

export default function ProductCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="mb-20 mx-12">
                <div className="flex items-center justify-center">
                    <Image
                        src="/product-01.jpeg"
                        alt="Product One"
                        width={300}
                        height={300}
                    />
                </div>
                <p className="text-center pt-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="mb-20 mx-12">
                <div className="flex items-center justify-center">
                    <Image
                        src="/product-02.jpeg"
                        alt="Product Two"
                        width={500}
                        height={500}
                    />
                </div>
                <p className="text-center pt-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="mb-20 mx-12">
                <div className="flex items-center justify-center">
                    <Image
                        src="/product-03.jpeg"
                        alt="Product Three"
                        width={400}
                        height={200}
                    />
                </div>
                <p className="text-center pt-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}
