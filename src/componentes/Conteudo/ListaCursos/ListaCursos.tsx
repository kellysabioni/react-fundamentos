import Artigo from "../Artigo/Artigo";
import cursos from "../../../data/cursos";
import styles from "./ListaCursos.module.css";

export default function ListaCursos() {
  return (
    <div className={styles.artigos}>
      {cursos.map((curso) => (
        <Artigo dados={curso} key={curso.id} />
      ))}
    </div>
  );
}
