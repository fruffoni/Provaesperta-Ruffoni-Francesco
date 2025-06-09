import Navbar from "@/app/components/navbar";

import Footer from "@/app/components/footer";

export default function Home() {
 

  return (
    <div className="bg-white pt-40">
      <Navbar
      
      />

     
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-cyan-700">SERVIZIO DI ASSISTENZA DOMICILIARE S.A.D.</h1>
        <p className="mb-6">
       Il servizio di Assistenza Domiciliare è un servizio sociale territoriale rivolto ai singoli o a nuclei familiari in difficoltà che, per specifiche esigenze di ordine socio-assistenziali permanenti o temporanee, hanno necessità di aiuto a domicilio, sostegno e collaborazione per attività relative alla cura della persona, al governo della casa, alla vita di relazione e al superamento di difficoltà organizzative familiari.
Obiettivi:
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-cyan-600">Gli obiettivi del servizio sono:</h2>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>Mantenimento, inserimento e reinserimento delle persone in stato di bisogno nell’ambiente familiare e sociale di appartenenza</li>
          <li>Promozione e recupero delle capacità di autonomia delle persone attraverso le risorse personali, familiari, amicali e di vicinato presenti nel territorio</li>
          <li>Contrasto dei processi di emarginazione sociale, isolamento e solitudine</li>
         
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-cyan-600">Attraverso il SAD, inoltre, si intende:</h2>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>Favorire la creazione di legami significativi e relazioni sociali e supportare la rete sociale esistente attraverso la programmazione di un insieme di servizi e prestazioni a tutela della persona fragile</li>
          <li>Promuovere una comunità sempre più responsabile verso le persone e le situazioni familiari più fragili</li>
          <li>Sviluppare servizi e interventi avviati in tema di promozione della domiciliarità e del lavoro di comunità</li>
         
        </ul>

       
        <ul className="list-disc list-inside space-y-2">
          <li>L’IPAB collabora con il servizio sociale dell’Amministrazione Comunale nell’erogazione di questo servizio per il mantenere il più a lungo possibile l’anziano nel suo “mondo” di appartenenza, evitandone l’istituzionalizzazione prima del tempo necessario.
</li>
        
        </ul>
      </div>
      <Footer/>
    </div>
  );
}