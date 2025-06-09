import Navbar from "./components/navbar";
export default function Home() {
 return (
        <Navbar
          email1="info@dogedivenezia.it"
          email2=""
          immagine="https://caorlemare.it/wp-content/uploads/2021/04/Leone-di-San-Marco-Venezia-1024x666.jpg"
          pagine={["Home Page", "Escursioni Giornaliere", "Servizi Professionali", "Chi Siamo", "La Flotta", "News"]}
          telefono1="+39 041 530 23 63"
          telefono2="+39 041 315 63 02"
        />
    
  
  );
}