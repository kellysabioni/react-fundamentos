import styles from "./Artigo.module.css";

type ArtigoProps = {
  titulo: string;
  texto: string;
  numero: number;
};

export default function Artigo({ titulo, texto, numero }: ArtigoProps) {
  return (
    <article className={styles.artigo}>
      <h3>
        Artigo {numero}: {titulo}
      </h3>
      <p>{texto}</p>
    </article>
  );
}
