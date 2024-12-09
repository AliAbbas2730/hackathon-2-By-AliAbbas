import Image from "next/image";


export default function SubHero() {
  return (
    <section className="py-12 px-6 bg-gray-50">
      {/* Text Section */}
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
          Browse The Range
        </h3>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Dining */}
        <div className="text-center">
          <Image
            src={"/dining.png"}
            width={282}
            height={282}
            alt="Dining"
            className="w-full h-auto rounded-lg shadow-sm hover:shadow-md transition"
          />
          <h6 className="text-lg font-semibold mt-4 text-gray-800">Dining</h6>
        </div>

        {/* Living */}
        <div className="text-center">
          <Image
            src={"/living.png"}
            width={282}
            height={282}
            alt="Living"
            className="w-full h-auto rounded-lg shadow-sm hover:shadow-md transition"
          />
          <h6 className="text-lg font-semibold mt-4 text-gray-800">Living</h6>
        </div>

        {/* Bedroom */}
        <div className="text-center">
          <Image
            src={"/bedroom.png"}
            width={282}
            height={282}
            alt="Bedroom"
            className="w-full h-auto rounded-lg shadow-sm hover:shadow-md transition"
          />
          <h6 className="text-lg font-semibold mt-4 text-gray-800">Bedroom</h6>
        </div>
      </div>
    </section>
  );
}
