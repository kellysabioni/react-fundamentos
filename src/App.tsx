import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Footer from "./Footer";

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
