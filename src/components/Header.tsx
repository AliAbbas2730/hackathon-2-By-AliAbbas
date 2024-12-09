import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Desktop Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div>
          <Image src={"/Logo.png"} width={185} height={41} alt="Funiro Logo" priority />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {[{name: "Home", route : "/"}, {name: "Shop", route: "/shop"}, {name: "Blog", route: "/blog"}, {name: "Contact", route: "/contact"}].map((item, index) => (
            <Link
              key={index}
              href={item.route}
              className="text-gray-800 hover:text-[#B88E2F] transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-6 text-gray-800 text-xl">
          <MdPersonOutline
            className="cursor-pointer hover:text-[#B88E2F] transition"
            title="Account"
          />
          <CiSearch
            className="cursor-pointer hover:text-[#B88E2F] transition"
            title="Search"
          />
          <GoHeart
            className="cursor-pointer hover:text-[#B88E2F] transition"
            title="Wishlist"
          />
          <AiOutlineShoppingCart
            className="cursor-pointer hover:text-[#B88E2F] transition"
            title="Cart"
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden px-4 py-2">
        <div className="flex justify-between items-center">
          <div>
            <Image src={"/Logo.png"} width={150} height={35} alt="Funiro Logo" priority />
          </div>
          <button
            className="text-gray-800 text-2xl"
            aria-label="Open mobile menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
