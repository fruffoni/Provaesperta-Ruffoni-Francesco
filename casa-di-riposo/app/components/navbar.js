"use client";
import { useState, useEffect, useRef } from "react";

export default function Navbar({
  pagine = [
    { nome: "Home Page", link: "/" },
    {
      nome: "SERVIZI",
      sottoPagine: [
        { nome: "Centro diurno anchise'", link: "/centro-diurno" },
        { nome: "Centro anziani 'colora il tuo tempo'", link: "/centro-anziani" },
        { nome: "Servizio assistenza domiciliare S.A.D", link: "/assistenza" },
        { nome: "Sportello assistenti familiari", link: "/sportello" },
        { nome: "Punto prelievi 'passerella' servizio infermieristico", link: "/escursioni/torcello" },
      ]
    },
    {
      nome: "PERCHE L'IPAB",
      sottoPagine: [
        { nome: "vision e mission", link: "/vision" },
        { nome: "statuto", link: "/escursioni/burano" },
      ]
    },
    {
      nome: "I.P.A.B. informa",
      sottoPagine: [
        { nome: "Accesso agli atti", link: "/" },
        { nome: "amministrazione trasparente", link: "/" }
      ]

    },
    
    { nome: "Sostienici", link: "/chi-siamo" },
    {
      nome: "Accessi riservati",
      sottoPagine: [
        { nome: "extranet", link: "/servizi/noleggio" },
        { nome: "Privacy", link: "/servizi/disabili" }
      ]

    },
    
    { nome: "extranet", link: "/flotta" },
    { nome: "Privacy", link: "/news" }
  ],
  immagine = "/images/logo.png"
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const navRef = useRef(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex((prev) => (prev === index ? null : index));
  };

  // Chiude dropdown e menu mobile al click fuori
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdownIndex(null);
        setIsOpen(false);
      }
    };

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setOpenDropdownIndex(null);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
        <div className="flex justify-center py-3 border-b border-gray-200">
          <img src={immagine} alt="Logo del sito" className="h-20 object-contain" />
        </div>

        <div className="w-full flex justify-center px-6 py-4">
          <div className="w-full max-w-screen-xl flex items-center justify-between">

            {/* Menu desktop */}
            <ul className="hidden md:flex space-x-8 text-gray-800 font-semibold relative">
              {pagine.map((pagina, index) => (
                <li key={index} className="relative">
                  {pagina.sottoPagine ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center gap-1 hover:text-cyan-600 transition-colors"
                        aria-haspopup="true"
                        aria-expanded={openDropdownIndex === index}
                      >
                        {pagina.nome} <span className="text-sm">▾</span>
                      </button>
                      {openDropdownIndex === index && (
                        <ul className="absolute bg-white shadow-lg mt-2 rounded-md p-4 space-y-2 z-50 min-w-[200px]">
                          {pagina.sottoPagine.map((sub, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href={sub.link}
                                className="block px-6 py-2 hover:bg-cyan-100 rounded transition"
                                onClick={() => setOpenDropdownIndex(null)}
                              >
                                {sub.nome}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={pagina.link}
                      className={`transition-colors ${
                        index === 0
                          ? "text-cyan-600 font-bold"
                          : "hover:text-cyan-600"
                      }`}
                    >
                      {pagina.nome}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Bottone menu mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-md bg-cyan-600 text-white hover:bg-cyan-700 transition"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden bg-white w-full shadow-lg absolute top-full left-0 border-t border-gray-200 z-50">
            <ul className="flex flex-col text-gray-800 font-semibold space-y-3 py-6 px-6">
              {pagine.map((pagina, index) => (
                <li key={index}>
                  {pagina.sottoPagine ? (
                    <>
                      <span className="font-semibold block mb-2">{pagina.nome}</span>
                      <ul className="pl-4 space-y-1">
                        {pagina.sottoPagine.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={sub.link}
                              onClick={() => setIsOpen(false)}
                              className="block py-1 text-base hover:text-cyan-600 transition"
                            >
                              {sub.nome}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a
                      href={pagina.link}
                      onClick={() => setIsOpen(false)}
                      className={`block ${
                        index === 0
                          ? "text-cyan-700 font-bold"
                          : "hover:text-cyan-700"
                      } transition`}
                    >
                      {pagina.nome}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Spazio sotto navbar fissa */}
      <div className="pt-[104px]" />
    </>
  );
}