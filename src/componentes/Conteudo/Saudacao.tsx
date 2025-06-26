type SaudacaoProps = {
  nome?: string;
  classe: string;
};

export default function Saudacao({
  nome = "Visitante",
  classe,
}: SaudacaoProps) {
  return (
    <p className={`my-2 rounded text-center ${classe} `}>
      Seja bem-vindo(a) <b>{nome}</b>!
    </p>
  );
}
