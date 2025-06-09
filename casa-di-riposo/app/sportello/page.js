import Navbar from "@/app/components/navbar";

import Footer from "@/app/components/footer";

export default function Home() {
 

  return (
    <div className="bg-white pt-40">
      <Navbar
      
      />

     
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-cyan-700">SPORTELLO ASSISTENTI FAMILIARI</h1>
        <p className="mb-6">
         In un contesto storico caratterizzato da un generale miglioramento delle condizioni di vita e da una maggiore disponibilità di risorse medico-sanitarie, si è registrato un aumento costante della fascia di popolazione over 65. L’innalzamento dell’aspettativa di vita però non corrisponde sempre ad un miglioramento anche della sua qualità, infatti sono sempre più frequenti i casi in cui l’insorgenza di malattie dementigene e di condizioni degenerative ostacolino l’autonomia dell’anziano. Emerge pertanto, come le necessità assistenziali verso gli over 65 siano più consistenti rispetto al passato e che quindi vi sia un’evoluzione dell’offerta dei servizi socio-sanitari e di supporto alle famiglie, evitando il più possibile l’istituzionalizzazione dell’anziano.
Nasce così l’esigenza di offrire nuovi servizi alla popolazione, e le politiche sociali presentano buoni margini di implementazione.
Lo sportello, attraverso la figura dell’assistente sociale, consente una visione d’insieme di tutti i percorsi di sostegno alla fragilità, nonché una forte capacità di connessione con gli altri servizi del territorio; infatti lo Sportello è in grado di fornire con competenza, tutte le informazioni necessarie per accedere alla rete dei servizi a favore delle persone non autosufficienti, mirando al superamento della gestione informale del mercato dell’assistenza familiare finora governato per lo più da associazione di matrice religiosa o da altri soggetti. Lo sportello si configura anche come punto di riferimento per la cultura della legalità del lavoro domestico, a tutela sia del lavoratore che della persona non autosufficiente.
Il progetto ha avuto avvio a seguito di un incarico da parte della Conferenza dei Sindaci al Comune di San Donà di Piave quale ente proponente capofila per la continuazione fino al 31.12.2024 con la collaborazione di IPAB.
        </p>

      </div>
      <Footer/>
    </div>
  );
}