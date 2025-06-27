import Artigo from "../Artigo/Artigo";
import cursos from "../../../data/cursos";
import styles from "./ListaCursos.module.css";

type ListaCursosProps = {
  categoria: null | string;
};
export default function ListaCursos({ categoria }: ListaCursosProps) {
  const cursosPorCategoria = categoria
    ? cursos.filter((curso) => curso.categoria === categoria)
    : cursos;
    
  return (
    <div className={styles.artigos}>
      {cursosPorCategoria.map((curso) => (
        <Artigo dados={curso} key={curso.id} />
      ))}
    </div>
  );
}
