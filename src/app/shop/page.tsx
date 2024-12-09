import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import BlowHero from "@/components/ShopBlowHero";

export default function ShopHero() {
  const data = [
    {
      name: "Syltherine",
      price: "$1299",
      image: "/bedroom.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Jane Smith",
      price: "$1300",
      image: "/Hero.png",
      description: "Comforter",
    },
    {
      name: "Sam",
      price: "$1499",
      image: "/dining.png",
      description: "Wooden chair",
    },
    {
      name: "Wilson",
      price: "$1000",
      image: "/images (6).png",
      description: "Sofa set",
    },
    {
      name: "Jake",
      price: "$899",
      image: "/image 8.png",
      description: "Chair",
    },
    {
      name: "Harry",
      price: "$750",
      image: "/sofaaa.png",
      description: "Stylish chairs",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image src="/shophero.png" fill alt="Shop Hero" className="object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h3 className="font-bold text-2xl md:text-3xl text-gray-800">Shop</h3>
          <div className="flex items-center text-gray-600">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Shop</h3>
          </div>
        </div>
      </div>

      {/* BlowHero Component */}
      <BlowHero />

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
        {data.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={288}
              height={288}
              className="rounded-lg object-cover"
            />
            <div className="mt-4">
              <h5 className="font-bold text-lg text-gray-800">{product.name}</h5>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <h5 className="font-bold text-lg text-[#B88E2F] mt-4">
                {product.price}
              </h5>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center gap-4 mb-8">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className="w-[2.5rem] h-[2.5rem] bg-[#F9F1E7] hover:bg-[#B88E2F] text-gray-800 hover:text-white font-bold rounded-md"
          >
            {page}
          </button>
        ))}
        <button className="w-[4rem] h-[2.5rem] bg-[#F9F1E7] hover:bg-[#B88E2F] text-gray-800 hover:text-white font-bold rounded-md">
          Next
        </button>
      </div>

      {/* Features Section */}
      <div className="bg-[#F9F1E7] py-8 px-4">
        <div className="flex flex-wrap justify-around gap-8">
          {[
            { image: "/Group.png", title: "High Quality", description: "Crafted from top materials" },
            { image: "/warr.png", title: "Warranty Protection", description: "Over 2 years" },
            { image: "/vector.png", title: "Free Shipping", description: "Order over $150" },
            { image: "/customer.png", title: "24/7 Support", description: "Dedicated support" },
          ].map((feature, index) => (
            <div key={index} className="text-center max-w-[150px]">
              <Image src={feature.image} width={40} height={40} alt={feature.title} />
              <h4 className="font-bold mt-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
