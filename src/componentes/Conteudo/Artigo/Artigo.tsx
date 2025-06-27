import styles from "./Artigo.module.css";
import type { Curso } from "../../../types/Curso";
import { useState } from "react";

type ArtigoProps = {
  dados: Curso;
};

export default function Artigo({ dados }: ArtigoProps) {
  const [selecionado, setSelecionado] = useState(false);

  const selecionaArtigo = () => {
    setSelecionado((selecionado) => !selecionado);
  };

  const { titulo, preco, categoria } = dados;
  return (
    <article
      onClick={selecionaArtigo}
      className={styles.artigo}
      style={{
        backgroundColor: selecionado ? "#e0f7fa" : "#f9f9f9",
      }}
    >
      <h3> {titulo} </h3>
      <p>
        <b>Categoria:</b> {categoria}
      </p>
      <p>
        <b>Preço:</b> {preco}
      </p>
    </article>
  );
}
