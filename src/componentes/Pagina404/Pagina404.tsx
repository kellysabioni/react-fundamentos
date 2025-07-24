import { Link } from "react-router-dom";
import imagem from "../../Assets/Pagina404.png";

export default function Pagina404() {
  return (
    <div>
      <h1>
        <img src={imagem} alt="Ops! Página não encontrada" />
      </h1>

      <p  >
        <Link to="/"> Página Inicial </Link>
      </p>
    </div>
  );
}
