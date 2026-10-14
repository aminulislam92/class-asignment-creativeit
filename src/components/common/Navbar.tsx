import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="relative flex items-center justify-center 
                          w-10 h-10 rounded-full 
                          bg-gradient-to-br from-purple-500 to-indigo-500"
          >
            <span className="text-white font-bold text-xl">Si</span>
            <span className="absolute -top-1 right-1 text-[10px]">14</span>
          </div>

          <h1 className="text-xl font-semibold text-gray-200">Silicon</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a className="flex items-center gap-1 hover:text-white transition">
            Services
            <ChevronDown size={14} />
          </a>

          <a className="hover:text-white transition">Portfolio</a>

          <a className="hover:text-white transition">About</a>

          <a className="hover:text-white transition">Blog</a>

          <a className="hover:text-white transition">Contact</a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* Theme Switch */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Light</span>

            <button
              className="
              w-16 h-8 rounded-full 
              bg-gradient-to-r from-indigo-500 to-purple-500
              relative
              shadow-lg
              "
            >
              <span
                className="
                absolute left-1 top-1
                w-6 h-6
                bg-white
                rounded-full
                "
              />
            </button>

            <span className="text-gray-400">Dark</span>
          </div>

          {/* CTA Button */}
          <button
            className="
            px-6 py-3
            rounded-md
            bg-indigo-500
            hover:bg-indigo-600
            text-sm
            font-medium
            transition
            "
          >
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
