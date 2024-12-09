import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa"; // Updated to correct icon
import { TbPhoneFilled } from "react-icons/tb";
import { TbClockHour4Filled } from "react-icons/tb";

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image src="/shophero.png" fill alt="Shop Hero Image" className="object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h3 className="font-bold text-2xl text-gray-800">Contact</h3>
          <div className="flex items-center text-gray-600">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Contact</h3>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="text-center px-4 py-8">
        <h2 className="font-extrabold text-2xl text-gray-800">Get In Touch With Us</h2>
        <p className="text-gray-600 mt-2">
          For more information about our products & services, please feel free to drop us an email.
          <br />
          Our staff is always here to help you. Do not hesitate!
        </p>
      </div>

      {/* Contact Details */}
      <div className="flex flex-wrap justify-center gap-8 px-4 py-6">
        {/* Address */}
        <div className="flex items-start space-x-4 max-w-[250px]">
          <FaMapMarkerAlt className="text-2xl text-[#B88E2F]" />
          <div>
            <h2 className="font-bold text-lg text-gray-800">Address</h2>
            <p className="text-gray-600">
              236 5th SE Avenue,
              <br />
              New York NY10000, United States
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4 max-w-[250px]">
          <TbPhoneFilled className="text-2xl text-[#B88E2F]" />
          <div>
            <h2 className="font-bold text-lg text-gray-800">Phone</h2>
            <p className="text-gray-600">Mobile: +(84) 546-6789</p>
            <p className="text-gray-600">Hotline: +(84) 456-6789</p>
          </div>
        </div>

        {/* Working Time */}
        <div className="flex items-start space-x-4 max-w-[250px]">
          <TbClockHour4Filled className="text-2xl text-[#B88E2F]" />
          <div>
            <h2 className="font-bold text-lg text-gray-800">Working Time</h2>
            <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
            <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="px-4 py-8 flex justify-center">
        <form className="flex flex-col gap-4 w-full max-w-md">
          <label htmlFor="name" className="text-gray-800">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="border-gray-300 border p-2 rounded-md"
            placeholder="Enter your name"
          />
          <label htmlFor="email" className="text-gray-800">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border-gray-300 border p-2 rounded-md"
            placeholder="Enter your email"
          />
          <label htmlFor="subject" className="text-gray-800">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className="border-gray-300 border p-2 rounded-md"
            placeholder="Subject"
          />
          <label htmlFor="message" className="text-gray-800">
            Message
          </label>
          <textarea
            id="message"
            className="border-gray-300 border p-2 rounded-md"
            placeholder="Write your message"
            rows={4}
          ></textarea>
          <button className="bg-[#B88E2F] text-white font-bold py-2 rounded-md hover:bg-[#A17D28] transition">
            Submit
          </button>
        </form>
      </div>

      {/* Footer Features */}
      <div className="bg-[#F9F1E7] py-8 px-4">
        <div className="flex flex-wrap justify-around gap-8">
          <div className="text-center">
            <Image src="/Group.png" width={40} height={40} alt="High Quality" />
            <h4 className="font-bold mt-2">High Quality</h4>
            <p className="text-gray-600">Crafted from top materials</p>
          </div>
          <div className="text-center">
            <Image src="/warr.png" width={40} height={40} alt="Warranty Protection" />
            <h4 className="font-bold mt-2">Warranty Protection</h4>
            <p className="text-gray-600">Over 2 years</p>
          </div>
          <div className="text-center">
            <Image src="/vector.png" width={40} height={40} alt="Free Shipping" />
            <h4 className="font-bold mt-2">Free Shipping</h4>
            <p className="text-gray-600">Order over $150</p>
          </div>
          <div className="text-center">
            <Image src="/customer.png" width={40} height={40} alt="24/7 Support" />
            <h4 className="font-bold mt-2">24/7 Support</h4>
            <p className="text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
