import DicaDoDia from "./DicaDoDia/DicaDoDia";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import Saudacao from "./Saudacao";
import ListaCursos from "./ListaCursos/ListaCursos";
import cursos from "../../data/cursos";
import { useEffect, useState } from "react";

export default function Conteudo() {
  /* Definindo o state para categoria ativa/selecionada podendo ser null (valor padrão/inicial) ou string (quando uma categoria for selecionada) */
  const [categoriaAtiva, setCategoriaAtiva] = useState<null | string>(null);

  const categorias = [...new Set(cursos.map((curso) => curso.categoria))];

  /* Trocando o title da página conforme a categoria selecioanda */
  useEffect(() => {
    document.title = categoriaAtiva
      ? `${categoriaAtiva} | Meu app React`
      : "Home | Meu app React";
  }, [categoriaAtiva]);

  return (
    <>
      <section>
        <h2 className="font-bold text-lg ">Fundamentos do React!</h2>
        <Saudacao nome="Kelly" classe="bg-blue-100" />

        <p>Este é um exemplo de aplicação React.</p>

        {categorias.map((categoria, index) => {
          return (
            <button
              key={index}
              onClick={() => setCategoriaAtiva(categoria)}
              className="rounded py-1 px-2 mr-2 m-3 bg-blue-200 hover:bg-blue-500 "
            >
              {categoria}
            </button>
          );
        })}

        {categoriaAtiva && (
          <>
            <button
              onClick={() => setCategoriaAtiva(null)}
              className="rounded py-1 px-2 mr-2 m-3 bg-blue-200 hover:bg-blue-500 "
            >
              Limpar
            </button>

            <p>
              Categoria selecionada: <b>{categoriaAtiva}</b>
            </p>
          </>
        )}

        <ListaCursos categoria={categoriaAtiva} />
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </>
  );
}
