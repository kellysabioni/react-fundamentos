import styles from "./Artigo.module.css";
import type { Curso } from "../../../types/Curso";

type ArtigoProps = {
  dados: Curso;
};

export default function Artigo({ dados }: ArtigoProps) {
  const { titulo, preco, categoria } = dados;
  return (
    <article className={styles.artigo}>
      <h3> {titulo} </h3>
      <p><b>Categoria:</b> {categoria}</p>
      <p><b>Preço:</b> {preco}</p>
    </article>
  );
}
