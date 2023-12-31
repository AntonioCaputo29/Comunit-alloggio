import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CustomNavbar from "./components/Navbar";
import Contenuto from "./components/Contenuto";
import Informazioni from "./components/Informazioni";
import Presentazione from "./components/Presentazione";
import Footer from "./components/Footer";
import Notizie from "./components/Notizie";


function App() {
  return (
    <div>
      <CustomNavbar />
      <Presentazione />
      <Contenuto />
      <Informazioni />
      <Notizie />
      <Footer />
    </div>
  );
}

export default App;
