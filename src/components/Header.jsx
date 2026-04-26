import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeEditor from "./ThemeEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [iShow, setIsShow] = useState(false);

  return (
    <header className="sticky top-2.5 bg-primary/50 font-Mogra backdrop-blur-md shadow-lg m-2.5 z-50 rounded-3xl md:rounded-4xl">
      <div className="flex justify-between items-center p-4 md:p-5">
    
        <div className="text-black flex items-center">
          <p className="text-xl">
            Wijha
            <span className="font-Nothing text-2xl inline leading-none">
              ti!
            </span>
          </p>
        </div>

        
        <div className="flex items-center gap-4">
          
          
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-black font-medium">
              <li><a href="#Tell" className="hover:text-blue-600 transition">Tell US</a></li>
              <li><a href="/#About" className="hover:text-blue-600 transition">About</a></li>
              <li><a href="/#Category" className="hover:text-blue-600 transition">Category</a></li>
              <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
            </ul>
          </nav>

          {/* Theme Editor Toggle */}
          <div className="relative">
            <button
  onClick={() => setIsShow(!iShow)}
  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition flex items-center justify-center text-gray-700"
  title="Toggle Theme Editor"
>
  <FontAwesomeIcon icon="fa-solid fa-palette" className="text-lg" />
</button>
            
            {iShow && (
              <div className="absolute right-0 mt-2 z-[60]">
                <ThemeEditor />
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu*/}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-5 text-black border-t border-gray-300 pt-4">
          <li><a href="/#About" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#Tell" onClick={() => setIsOpen(false)}>Tell US</a></li>
          <li><a href="/#Category" onClick={() => setIsOpen(false)}>Category</a></li>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        </ul>
      )}
    </header>
  );
}

export default Header;