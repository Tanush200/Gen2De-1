import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-6 z-50">
      <div className="mx-4 rounded-3xl border border-gray-200 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between p-3">
          <div className="text-2xl font-bold text-blue-600 mt-2">
            Dr . Pabitra Pal
          </div>

          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <button className="bg-gray-200 p-3 rounded-xl">
              <a href="#" className="hover:text-blue-600 transition">
                About Me
              </a>
            </button>
            <button className="bg-gray-200 p-3 rounded-xl">
              <a href="#" className="hover:text-blue-600 transition">
                Publications
              </a>
            </button>
            <button className="bg-gray-200 px-3 rounded-xl">
              <a href="#" className="hover:text-blue-600 transition">
                Talks
              </a>
            </button>
            <button className="bg-gray-200 p-3 rounded-xl">
              <a href="#" className="hover:text-blue-600 transition">
                Contact
              </a>
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 border-t border-gray-200">
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Services
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
