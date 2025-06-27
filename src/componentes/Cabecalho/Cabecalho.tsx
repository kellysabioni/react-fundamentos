import { useState } from "react";
import logo from "../../assets/logo-react.png";
import Menu from "../Cabecalho/Menu/Menu";
import estilos from "./Cabecalho.module.css";

export default function Cabecalho() {
  /* Aqui definimos a chamada de uma função especial do React: useState. Esta e outras funções iniciadas com o prefixo 'use' são conhecidas como React Hooks.
  
  No caso do useState, usando desestruturação, criamos uma constante que representa o valor do state (titulo) e uma função responsável por atualizar o state (setTitulo)
  */
 const [titulo, setTitulo] = useState("Olá, React!");
 /* Nós que definimos o nome do parâmento (utilizamos nomes "com sentido" ) */
  
  return (
    <header className={estilos.topoSite}>
      <h1 onClick={() => alert("Olá!")} className={estilos.titulo}>
        <img className={estilos.logo} src={logo} alt="" /> {titulo} 
      </h1>
      <hr />

      <Menu />
    </header>
  );
}
