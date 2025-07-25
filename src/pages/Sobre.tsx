import { useEffect } from "react";

export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre nós";
  }, []);
  return (
    <section>
      <h2>Sobre nossa empresa </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora non
        modi, doloribus sed distinctio vero iste numquam ab explicabo earum,
        odio unde quasi, voluptatum dignissimos.
      </p>
    </section>
  );
}
