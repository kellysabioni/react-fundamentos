import { useEffect } from "react";
import Conteudo from "../componentes/Conteudo/Conteudo";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Meu app React";
  }, []);

  return <Conteudo />;
}
