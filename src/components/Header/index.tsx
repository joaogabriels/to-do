import { Conteiner } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";

export function Header() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setQuote(res.data.slip.advice);
      })
      .catch((err) => {
        console.log("API são boas mas as vezes quebram :(");
      });
  });

  return (
    <Conteiner>
      <h1>Meus Planos: </h1>
      <div>
        <cite>{quote}</cite>
      </div>
      <hr></hr>
    </Conteiner>
  );
}
