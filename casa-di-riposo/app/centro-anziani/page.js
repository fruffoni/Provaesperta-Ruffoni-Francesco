import Navbar from "@/app/components/navbar";

import Footer from "@/app/components/footer";

export default function Home() {
 

  return (
    <div className="bg-white pt-40">
      <Navbar
      
      />

     
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-cyan-700">CENTRO ANZIANI COLORA IL TUO TEMPO</h1>
        <p className="mb-6">
          Il centro anziani è un luogo di incontro rivolto alla popolazione anziana autosufficiente del territorio sandonatese che ha come scopo il contrasto di fenomeni di isolamento e solitudine, portando momenti di stimolo, di benessere e serenità per una maggiore integrazione sociale.
Il servizio viene svolto grazie da una collaborazione con le associazioni di volontariato presenti nel territorio e con l’Amministrazione Comunale che mette a disposizione gli spazi siti in Viale Libertà n. 10.
        </p>

       
      </div>
      <Footer/>
    </div>
  );
}