export default function Footer() {
    return (
      <footer className="bg-gray-100">
        {/* Main Footer Section */}
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-300">
          {/* Logo and Address */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Funiro.</h2>
            <p className="text-gray-600 mt-4">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
  
          {/* Navbar Links */}
          <div>
            <h4 className="font-bold text-lg text-gray-800">Navbar</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600 hover:text-gray-800 transition">
                Home
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition">
                Shop
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition">
                About
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition">
                Contact
              </li>
            </ul>
          </div>
  
          {/* Help Links */}
          <div>
            <h4 className="font-bold text-lg text-gray-800">Help</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600 hover:text-gray-800 transition">
                Payment Option
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition">
                Returns
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition">
                Privacy Policies
              </li>
            </ul>
          </div>
  
          {/* Newsletter Section */}
          <div>
            <h4 className="font-bold text-lg text-gray-800">Newsletter</h4>
            <p className="text-gray-600 mt-4">
              Subscribe to our newsletter to get updates on our latest products
              and offers.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-[#B88E2F]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#B88E2F] text-white font-bold rounded-r-md hover:bg-[#A17D28] transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom Section */}
        <div className="bg-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
            <hr className="border-gray-300 mb-4" />
            <p>&copy; 2023 Funiro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  