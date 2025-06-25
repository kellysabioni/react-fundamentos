import Artigo from "../Artigo/Artigo";
import styles from "./Conteudo.module.css";

export default function Conteudo() {
  return (
    <main className={styles.conteudo}>
      {/* Para combinar classes, use template string */}
      <section className={`${styles.arredondada} ${styles.sombra}`}>
        <h2>Seja bem-vindo(a) aos Fundamentos do React!</h2>
        <p>Este é um exemplo de aplicação React.</p>

        <Artigo />

        <Artigo />

        <Artigo />
      </section>
    </main>
  );
}
