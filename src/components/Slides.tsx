import Image from "next/image";

export default function SlideSection() {
  return (
    <section className="bg-[#FCF8F3] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h4 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
            50+ Beautiful Rooms Inspiration
          </h4>
          <p className="text-gray-600">
            Our designer has already created numerous beautiful prototypes of
            rooms to inspire you.
          </p>
          <button className="bg-[#B88E2F] text-white px-6 py-2 rounded-md hover:bg-[#A17D28] transition">
            Explore More
          </button>
        </div>

        {/* Images Section */}
        <div className="flex gap-4 justify-center md:justify-end">
          <Image
            src={"/inner.png"}
            alt="Inner Peace Design"
            width={250}
            height={250}
            className="rounded-lg shadow-md"
          />
          <Image
            src={"/Sideinner.png"}
            alt="Side Inner Design"
            width={250}
            height={250}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
