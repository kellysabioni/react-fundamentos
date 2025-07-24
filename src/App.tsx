import { Route, Routes } from "react-router-dom";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Footer from "./componentes/Footer/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Container from "./componentes/Container/Container";
import Pagina404 from "./componentes/Pagina404/Pagina404";

export default function App() {
  return (
    <>
      {/* Importanto o componente Cabecalho, a sintaxe é o nome do componente dentro da tag 
    < *Nome do componente* />  */}
      <Cabecalho />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/*" element={<Pagina404 />} />

        </Routes>
      </Container>

      <Footer />
    </>
  );
}
