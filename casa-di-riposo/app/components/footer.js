export default function Footer() {
  const columns = [
    {
      title: 'Contatti',
      links: [
        { label: 'tel. 0421 330807', href: '#' },
        { label: 'PROTOCOLLO: info@cdrmonumento.com', href: '#' },
        { label: 'PRESIDENZA: presidente@cdrmomumento.com', href: '#' },
        { label: 'DIREZIONE: direttore@cdrmonumento.com', href: '#' },
        { label: 'CONTABILITA E RETTE: contabilita@cdrmonumento.com', href: '#' },
        { label: 'PEC: cdrmonumento@halleypec.it', href: '#' },
       
      ],
    },
   
   
  ];

  return (
    <footer className="bg-slate-800 border-t mt-16 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
       
        <div className="mb-12">
          
          
          <form className="mt-4 flex max-w-md">
           
          
          </form>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {columns.map((col, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-base mb-2">{col.title}</h4>
              <ul className="space-y-1">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

  
        <div className="mt-12 border-t pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Halley Informatica. Tutti i diritti riservati. Halley EG 041433.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookie</a>
            <a href="#" className="hover:underline">Termini e condizioni</a>
            <a href="#" className="hover:underline">Sitemap</a>
            <span>Italia | IT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
