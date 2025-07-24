export default function Contato() {
  return (
    <section>
        <h2>Fale Conosco</h2>
        <p>Use o formulário</p>
        <form action="" method="post">
            <p>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
            </p>
            <button type="submit">Enviar</button>
        </form>
    </section>
  )
}
