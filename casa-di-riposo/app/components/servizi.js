import React from 'react';

export default function Servizi({ titolo, servizi }) {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-black">{titolo}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {servizi.map((servizio, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="text-4xl text-gray-700">{servizio.icona}</div>
            <h3 className="font-semibold text-lg text-gray-800">{servizio.titolo}</h3>
            <a
              href={servizio.link}
              className="text-gray-700 underline underline-offset-4 hover:text-black transition"
            >
              {servizio.testoLink}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}