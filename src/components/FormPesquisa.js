import { useState } from "react";

const FormPesquisa = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [satisfacao, setSatisfacao] = useState("neutro");
  const [comentario, setComentario] = useState("");
  const [aceiteTermos, setAceiteTermos] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Enviando pesquisa de satisfacao...");
    console.log(nome);
    console.log(email);
    console.log(satisfacao);
    console.log(comentario);
    console.log(aceiteTermos);

  
    setNome("");
    setEmail("");
    setSatisfacao("neutro");
    setComentario("");
    setAceiteTermos(false);
  };

  return (
    <div className="form-container">
      <h2>Pesquisa de satisfacao</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input
            type="text"
            name="nome"
            placeholder="Digite o seu nome"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
        </label>

        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <p>Nivel de satisfacao</p>

        <label>
          <input
            type="radio"
            name="satisfacao"
            value="insatisfeito"
            onChange={(e) => setSatisfacao(e.target.value)}
            checked={satisfacao === "insatisfeito"}
          />
          <span>Insatisfeito</span>
        </label>

        <label>
          <input
            type="radio"
            name="satisfacao"
            value="neutro"
            onChange={(e) => setSatisfacao(e.target.value)}
            checked={satisfacao === "neutro"}
          />
          <span>Neutro</span>
        </label>

        <label>
          <input
            type="radio"
            name="satisfacao"
            value="satisfeito"
            onChange={(e) => setSatisfacao(e.target.value)}
            checked={satisfacao === "satisfeito"}
          />
          <span>Satisfeito</span>
        </label>

        <label>
          <span>Comentario</span>
          <textarea
            name="comentario"
            placeholder="Deixe seu comentario"
            onChange={(e) => setComentario(e.target.value)}
            value={comentario}
          ></textarea>
        </label>

        <label>
          <input
            type="checkbox"
            name="aceiteTermos"
            onChange={(e) => setAceiteTermos(e.target.checked)}
            checked={aceiteTermos}
          />
          <span>Aceito os termos de privacidade da pesquisa</span>
        </label>

        <input type="submit" value="Enviar" disabled={!aceiteTermos} />
      </form>
    </div>
  );
};

export default FormPesquisa;
