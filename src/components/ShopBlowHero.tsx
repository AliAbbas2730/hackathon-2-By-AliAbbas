import Image from "next/image";

export default function BlowHero() {
  return (
    <div className="w-full bg-[#F9F1E7] py-4 px-6 flex flex-wrap justify-between items-center border-b border-gray-300">
      {/* First Row: Filter and Results */}
      <div className="flex items-center space-x-4 text-gray-800">
        <Image src={"/filter.png"} width={30} height={30} alt="Filter Icon" />
        <p className="font-medium">Filter</p>
        <span className="text-gray-400">|</span>
        <p className="text-gray-600">Showing 1–16 of 32 results</p>
      </div>

      {/* Second Row: Show and Sort Options */}
      <div className="flex items-center space-x-4">
        <p className="font-medium text-gray-800">Show</p>
        <input
          className="w-12 h-10 border border-gray-300 rounded-md text-center text-gray-800"
          type="text"
          placeholder="16"
        />
        <p className="font-medium text-gray-800">Sort by</p>
        <input
          className="w-32 h-10 border border-gray-300 rounded-md text-center text-gray-800"
          type="text"
          placeholder="Default"
        />
      </div>
    </div>
  );
}
