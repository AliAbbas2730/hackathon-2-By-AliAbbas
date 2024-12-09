import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative w-full h-[63vh]">
        <Image
          src="/Hero.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full"
        />
      </div>

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-start bg-gradient-to-r from-[#FFF3E3]/80 to-transparent px-8 md:px-16">
        <h6 className="text-[#B88E2F] font-semibold text-sm md:text-base uppercase tracking-wider">
          New Arrival
        </h6>
        <h3 className="text-gray-800 font-bold text-3xl md:text-5xl leading-tight mt-2">
          Discover Our <br /> New Collection
        </h3>
        <p className="text-gray-600 mt-4 text-sm md:text-base max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          dolore
        </p>
        <button className="mt-6 px-6 py-2 bg-[#B88E2F] text-white font-semibold rounded-md hover:bg-[#A17D28] transition">
          BUY NOW
        </button>
      </div>
    </section>
  );
}
