import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Conteudo from "./componentes/Conteudo/Conteudo";
import Footer from "./componentes/Footer/Footer";

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
