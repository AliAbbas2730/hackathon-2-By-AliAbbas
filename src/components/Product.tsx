import Image from "next/image";

export default function Products() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: "Syltherine",
      price: "$1299",
      age: 30,
      image: "/bedroom.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Jane Smith",
      price: "$1300",
      age: 25,
      image: "/Hero.png",
      description: "Comforter",
    },
    {
      name: "Sam",
      price: "$1499",
      age: 28,
      image: "/dining.png",
      description: "Wooden chair",
    },
    {
      name: "Wilson",
      price: "$1000",
      age: 28,
      image: "/images (6).png",
      description: "Sofa set",
    },
    {
      name: "Jake",
      price: "$899",
      age: 28,
      image: "/image 8.png",
      description: "Chair",
    },
    {
      name: "Harry",
      price: "$750",
      age: 28,
      image: "/sofaaa.png",
      description: "Stylish chairs",
    },
  ];

  return (
    <section className="py-12 px-4">
      {/* Section Heading */}
      <h2 className="text-center font-bold text-4xl mb-8 text-gray-800">
        Our Products
      </h2>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((card, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-sm hover:shadow-md transition p-4"
          >
            <Image
              src={card.image}
              alt={card.name}
              width={288}
              height={288}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h5 className="font-bold text-lg text-gray-800">{card.name}</h5>
              <p className="text-gray-600 mt-2">{card.description}</p>
              <h5 className="font-bold text-lg text-[#B88E2F] mt-4">
                {card.price}
              </h5>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-2 border-2 border-[#B88E2F] text-[#B88E2F] font-semibold rounded-md hover:bg-[#B88E2F] hover:text-white transition">
          Show More
        </button>
      </div>
    </section>
  );
}
