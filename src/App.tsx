import Cabecalho from "./Cabecalho"

export default function App() {
  return (
    <>
    {/* Importanto o componente Cabecalho, a sintaxe é o nome do componente dentro da tag 
    < *Nome do componente* />  */}
      <Cabecalho/>    

      <main>
        <section>
          <h2>Seja bem-vindo(a) aos Fundamentos do React!</h2>
          <p>Este é um exemplo de aplicação React.</p>

          <article>
            <h3>Artigo 1 de exemplo </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, quasi eligendi! Corrupti nesciunt quo officiis,
              distinctio perferendis earum quam unde. Iusto vero distinctio
              perferendis deleniti?
            </p>

            <h3>Artigo 2 de exemplo </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, quasi eligendi! Corrupti nesciunt quo officiis,
              distinctio perferendis earum quam unde. Iusto vero distinctio
              perferendis deleniti?
            </p>

            <h3>Artigo 3 de exemplo </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, quasi eligendi! Corrupti nesciunt quo officiis,
              distinctio perferendis earum quam unde. Iusto vero distinctio
              perferendis deleniti?
            </p>
          </article>
        </section>
      </main>
      <footer>
        <h2>Pequeno site criado com React </h2>
        <p>
          Desenvolvido por <b>Kelly Sabioni</b> &copy; 2025{" "}
        </p>
      </footer>
    </>
  );
}
