import Artigo from "./Artigo/Artigo";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import styles from "./Conteudo.module.css";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import Saudacao from "./Saudacao";

export default function Conteudo() {
  return (
    <main className={styles.conteudo}>
      {/* Para combinar classes, use template string */}
      <section
        className={`${styles.principal} ${styles.arredondada} ${styles.sombra}`}
      >
        <Saudacao/>

        <p>Este é um exemplo de aplicação React.</p>

        <Artigo />

        <Artigo />

        <Artigo />
      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
