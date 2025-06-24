import Cabecalho from "./componentes/Cabecalho";
import Conteudo from "./componentes/Conteudo";
import Footer from "./componentes/Footer";

export default function App() {
  return (
    <>
      {/* Importanto o componente Cabecalho, a sintaxe é o nome do componente dentro da tag 
    < *Nome do componente* />  */}
      <Cabecalho />

      <Conteudo />

      <Footer />
    </>
  );
}
