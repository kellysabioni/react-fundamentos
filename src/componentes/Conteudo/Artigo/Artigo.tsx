import type { ReactNode } from "react";
import styles from "./Artigo.module.css";

type ArtigoProps = {
  titulo: string;
  numero: number;
  children: ReactNode;
  data?: Date;
};

export default function Artigo({
  titulo,
  numero,
  children,
  data,
}: ArtigoProps) {
  return (
    <article className={styles.artigo}>
      <h3>
        Artigo {numero}: {titulo}
      </h3>

      {data && (
        <p>
          Data: <time>{data?.toLocaleDateString()}</time>
        </p>
      )}
      {children}
    </article>
  );
}
