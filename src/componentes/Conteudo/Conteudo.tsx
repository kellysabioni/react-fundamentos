import DicaDoDia from "./DicaDoDia/DicaDoDia";
import styles from "./Conteudo.module.css";
import AvisoImportante from "./AvisoImportante/AvisoImportante";
import Saudacao from "./Saudacao";
import ListaCursos from "./ListaCursos/ListaCursos";

export default function Conteudo() {
  return (
    <main className={styles.conteudo}>
      <section
        className={`${styles.principal} ${styles.arredondada} ${styles.sombra}`}
      >
        <h2 className="font-bold text-lg ">Fundamentos do React!</h2>
        <Saudacao nome="Kelly" classe="bg-blue-100" />

        <p>Este é um exemplo de aplicação React.</p>

        <ListaCursos/>

      </section>

      <DicaDoDia />

      <AvisoImportante />
    </main>
  );
}
