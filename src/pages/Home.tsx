import { useEffect } from "react";
import Conteudo from "../componentes/Conteudo/Conteudo";

export default function Home() {
  useEffect(() => {
    console.log("Componente Montado/Renderizado");
  }, []);

  return <Conteudo />;
}
