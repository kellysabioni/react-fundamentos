import DicaDoDia from "./DicaDoDia/DicaDoDia";
import styles from "./Conteudo.module.css";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import Saudacao from "./Saudacao";
import ListaCursos from "./ListaCursos/ListaCursos";
import cursos from "../../data/cursos";
import { useState } from "react";

export default function Conteudo() {
  /* Definindo o state para categoria ativa/selecionada podendo ser null (valor padrão/inicial) ou string (quando uma categoria for selecionada) */
  const [categoriaAtiva, setCategoriaAtiva] = useState<null | string>(null);

  const categorias = [...new Set(cursos.map((curso) => curso.categoria))];

  return (
    <main className={styles.conteudo}>
      <section
        className={`${styles.principal} ${styles.arredondada} ${styles.sombra}`}
      >
        <h2 className="font-bold text-lg ">Fundamentos do React!</h2>
        <Saudacao nome="Kelly" classe="bg-blue-100" />

        <p>Este é um exemplo de aplicação React.</p>

        {categorias.map((categoria) => {
          return (
            <button onClick={() => setCategoriaAtiva(categoria)} className="rounded py-1 px-2 mr-2 m-3 bg-blue-200 hover:bg-blue-500 ">
              {categoria}
            </button>
          );
        })}

        {categoriaAtiva && (
          <p>
            Categoria selecionada: <b>{categoriaAtiva}</b>
          </p>
        )}

        <ListaCursos />
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
