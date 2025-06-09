"use client";
import { useState } from "react";

export default function Navbar({
  pagine = [],
 
  immagine,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="bg-white text-white text-sm py-2 px-4 flex justify-between w-full">
      
       
      </div>

      <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
        <div>
          <img src={immagine} alt="Il Doge di Venezia" className="h-12" />
        </div>

        <ul className="hidden md:flex space-x-6 text-black font-medium">
          {pagine.map((pagina, index) => (
            <li key={index}>
              <a
                href="#"
                className={`${index === 0 ? "text-purple-700 font-bold" : "hover:text-purple-700"}`}
              >
                {pagina}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded bg-purple-700 text-white"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white w-full shadow-md absolute top-16 left-0">
          <ul className="flex flex-col text-black font-medium space-y-2 py-4 px-6">
            {pagine.map((pagina, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`block ${index === 0 ? "text-purple-700 font-bold" : "hover:text-purple-700"}`}
                >
                  {pagina}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}