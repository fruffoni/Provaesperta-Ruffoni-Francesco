import Navbar from "./components/navbar";

import Footer from "./components/footer";

export default function Home() {
  const buttons = [
    { label: "Amministrazione trasparente", link: "/amministrazione-trasparente" },
    { label: "Albo pretorio online", link: "/albo-pretorio" },
    { label: "Contatti", link: "/contatti" },
    { label: "pagoPa", link: "https://www.pagopa.gov.it" }
  ];

  return (
    <div className="bg-white pt-40">
      <Navbar
      
      />

      <section className="max-w-5xl mx-auto px-6 py-16 text-center md:text-left">
        <h2 className="text-3xl font-bold text-cyan-700 mb-6 uppercase tracking-wide">PRESENTAZIONE</h2>
        <p className="text-gray-700 text-lg leading-8 max-w-4xl mx-auto md:mx-0">
          Qualche breve cenno alla Storia dell’IPAB “MONUMENTO AI CADUTI IN GUERRA”. Dopo l’annessione del Veneto all’Italia,
          l’Amministrazione comunale di San Donà ebbe un diverso assetto, rispetto a quello avuto sino ad ora: organo principe divenne il
          Consiglio comunale, il Sindaco era di nomina regia, ma scelto tra i consiglieri ed affiancato da una Giunta di Assessori eletti dal
          Consiglio comunale tra i propri membri. A livello nazionale nel 1882 si ammettono all’elettorato politico tutti i cittadini
          maggiorenni che superino l’esame del corso scolastico obbligatorio oppure paghino un censo di 19,80 lire. Subito dopo nel 1915
          diviene elettore amministrativo di un comune chi è cittadino italiano, ha compiuto 21 anni, ha la residenza nel comune ovvero paga
          nel comune un censo, e contro il quale non siano insorte cause di esclusione per incapacità o indegnità.
        </p>
        <a href="/presentazione" className="italic text-sm mt-4 text-cyan-700 hover:underline block">
          Continua a leggere ...
        </a>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {buttons.map(({ label, link }, index) => (
          <a
            key={index}
            href={link}
            className="block text-center bg-cyan-300 hover:bg-blue-400 transition rounded-xl py-6 text-lg font-semibold text-black"
            target={link.startsWith('http') ? "_blank" : undefined}
            rel={link.startsWith('http') ? "noopener noreferrer" : undefined}
          >
            {label}
          </a>
        ))}
      </section>
      <section className="max-w-5xl mx-auto px-6 py-16 text-center md:text-left">
        <h5 className="text-3xl italic text-gray-600 mb-4">NEWS ed EVENTI</h5>
        <p className="text-justify text-black leading-relaxed">
        
        </p>
        <a href="/presentazione" className="italic text-sm mt-4 text-cyan-700 hover:underline block">
          Scopri le ultime novità ed eventi...
        </a>
      </section>
      <Footer/>
    </div>
  );
}