//import styles from "Pagina404.module.css";
import { Link } from "react-router-dom";
import imagem from "../../Assets/Pagina404.png";
import { useEffect } from "react";

export default function Pagina404() {
  useEffect(() => {
    document.title = "Ops! Essa página não existe!";
  });
  return (
    <div>
      <h1>
        <img src={imagem} alt="Ops! Página não encontrada" />
      </h1>

      <p>
        <Link to="/"> Página Inicial </Link>
      </p>
    </div>
  );
}
