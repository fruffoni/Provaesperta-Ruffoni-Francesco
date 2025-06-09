import Navbar from "@/app/components/navbar";

import Footer from "@/app/components/footer";

export default function Home() {
 

  return (
    <div className="bg-white pt-40">
      <Navbar
      
      />

     
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-cyan-700">CENTRO DIURNO "ANCHISE"</h1>
        <p className="mb-6">
          Il centro diurno è un servizio territoriale di tipo semi-residenziale rivolto prevalentemente ad anziani con vario grado di non autosufficienza, con prevalente disturbo cognitivo.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-cyan-600">Gli obiettivi del servizio sono:</h2>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>Sostegno e sollievo ai familiari e alla rete sociale di supporto</li>
          <li>Contrastare fenomeni di isolamento e solitudine</li>
          <li>Potenziale, mantenere e/o compensare abilità e competenze relative alla sfera dell’autonomia, dell’identità e dell’orientamento spazio-temporale, delle relazioni interpersonali e della socializzazione</li>
          <li>Potenziale la rete di servizi per le persone anziane, proponendo interventi personalizzati, con progetti specifici rispondenti ai bisogni dei singoli.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-cyan-600">Le attività del servizio sono:</h2>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>Assistenza tutelare diurna</li>
          <li>Igiene e cura della persona, con stimolazione delle capacità residue</li>
          <li>Somministrazione di colazione, pranzo e merenda con aiuto nell’alimentazione</li>
          <li>Attività ricreative, culturali, occupazionali, per il mantenimento delle capacità espressive e relazionali, compatibilmente con le condizioni psico-fisiche</li>
          <li>Attività terapeutico riabilitativa-fisioterapica</li>
          <li>Supporto psicologico e sociale sia agli utenti che ai familiari</li>
          <li>Assistenza sanitaria</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-cyan-600">Le figure professionali:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Coordinatore responsabile</li>
          <li>Infermiere professionale</li>
          <li>Operatore socio-sanitario</li>
          <li>Assistente sociale</li>
          <li>Educatore professionale</li>
          <li>Fisioterapista</li>
          <li>Psicologo</li>
        </ul>
      </div>
      <Footer/>
    </div>
  );
}