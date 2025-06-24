import type { CSSProperties } from "react";

const estilosRodape: CSSProperties = {
  backgroundColor: "#222",
  color: "white",
  textAlign: "center",
  padding: "1rem",
};

export default function Footer() {
  return (
    <>
      <footer style={estilosRodape} >
        <h2>Pequeno site criado com React </h2>
        <p style={{ color: "red", fontWeight: "bold" }}>
          Desenvolvido por <b>Kelly Sabioni</b> &copy; 2025{" "}
        </p>
      </footer>
      <hr />
      <p className="outro-texto">Qualquer coisa...</p>
    </>
  );
}
