import type { ReactNode } from "react";
import styles from "./Artigo.module.css";

type ArtigoProps = {
  titulo: string;
  numero: number;
  children: ReactNode;
};

export default function Artigo({ titulo, numero, children }: ArtigoProps) {
  return (
    <article className={styles.artigo}>
      <h3>
        Artigo {numero}: {titulo}
      </h3>
      {children}
    </article>
  );
}
