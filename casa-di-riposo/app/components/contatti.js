export default function Contatti({
  titolo,
  descrizione,
  titolo1,
  titolo2,
  
  contatti = [],
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-lg">
      <div>
        <h2 className="text-2xl font-semibold text-purple-700 mb-2">
          {titolo}
        </h2>
        <p className="mb-6 text-black">{descrizione}</p>

        <div className="mb-8">
          <h3 className="text-lg text-cyan-600 font-semibold mb-4">
            {titolo1}
          </h3>
          <div>
            <h3 className="text-lg text-cyan-600 font-semibold mb-4">
              {" "}
              {titolo2}
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 mb-4">
            {contatti.map((contatto, index) => (
              <button
                key={index}
                className="bg-white p-4 shadow-md rounded-xl flex flex-col items-center text-center w-full md:w-[calc(50%-0.5rem)] hover:bg-purple-50 transition-all duration-200"
              >
                <img src="/icons/contact-icon.png" alt="Icona contatto" className="w-12 h-12 mb-2" />
                <span className="text-xl text-cyan-600 font-medium">{contatto}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden flex items-center justify-center bg-gray-100">
        <h2 className="text-xl font-bold text-black text-center">PRESENTAZIONE <br></br>

Qualche breve cenno alla Storia dell’IPAB “MONUMENTO AI CADUTI IN GUERRA. Dopo l’annessione del Veneto all’Italia, l’Amministrazione comunale di San Donà ebbe un diverso assetto, rispetto a quello avuto sino ad ora: 
organo principe divenne il Consiglio comunale, il Sindaco era di nomina regia, ma scelto tra i consiglieri ed affiancato da una Giunta di Assessori eletti dal Consiglio comunale tra i propri membri. A livello nazionale 
nel 1882 si ammettono all’elettorato politico tutti i cittadini maggiorenni che superino l’esame del corso scolastico obbligatorio oppure paghino un censo di 19,80 lire. Subito dopo nel 1915 diviene elettore amministrativo 
di un comune chi è cittadino italiano, ha compiuto 21 anni, ha la residenza nel comune ovvero paga nel comune un censo, e contro il quale non siano insorte cause di esclusione per incapacità o indegnità.</h2>
 
      </div>
    </div>
  );
}
