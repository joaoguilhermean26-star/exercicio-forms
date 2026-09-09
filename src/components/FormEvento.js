import { useState } from "react";

const FormEvento = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipoParticipante, setTipoParticipante] = useState("estudante");
  const [turno, setTurno] = useState("manha");
  const [oficinas, setOficinas] = useState([]);
  const [aceiteRegulamento, setAceiteRegulamento] = useState(false);

  const handleOficina = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      setOficinas([...oficinas, value]);
    } else {
      setOficinas(oficinas.filter((o) => o !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Enviando inscricao no evento...");
    console.log(nome);
    console.log(email);
    console.log(tipoParticipante);
    console.log(turno);
    console.log(oficinas);
    console.log(aceiteRegulamento);

  
    setNome("");
    setEmail("");
    setTipoParticipante("estudante");
    setTurno("manha");
    setOficinas([]);
    setAceiteRegulamento(false);
  };

  return (
    <div className="form-container">
      <h2>Inscricao no evento</h2>

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

        <p>Tipo de participante</p>

        <label>
          <input
            type="radio"
            name="tipoParticipante"
            value="estudante"
            onChange={(e) => setTipoParticipante(e.target.value)}
            checked={tipoParticipante === "estudante"}
          />
          <span>Estudante</span>
        </label>

        <label>
          <input
            type="radio"
            name="tipoParticipante"
            value="professor"
            onChange={(e) => setTipoParticipante(e.target.value)}
            checked={tipoParticipante === "professor"}
          />
          <span>Professor</span>
        </label>

        <label>
          <span>Turno preferido</span>
          <select
            name="turno"
            onChange={(e) => setTurno(e.target.value)}
            value={turno}
          >
            <option value="manha">Manha</option>
            <option value="tarde">Tarde</option>
            <option value="noite">Noite</option>
          </select>
        </label>

        <p>Oficinas de interesse</p>

        <label>
          <input
            type="checkbox"
            name="oficinas"
            value="frontend"
            onChange={handleOficina}
            checked={oficinas.includes("frontend")}
          />
          <span>Front-end</span>
        </label>

        <label>
          <input
            type="checkbox"
            name="oficinas"
            value="backend"
            onChange={handleOficina}
            checked={oficinas.includes("backend")}
          />
          <span>Back-end</span>
        </label>

        <label>
          <input
            type="checkbox"
            name="oficinas"
            value="dados"
            onChange={handleOficina}
            checked={oficinas.includes("dados")}
          />
          <span>Dados</span>
        </label>

        <label>
          <input
            type="checkbox"
            name="oficinas"
            value="ia"
            onChange={handleOficina}
            checked={oficinas.includes("ia")}
          />
          <span>Inteligencia Artificial</span>
        </label>

        <label>
          <input
            type="checkbox"
            name="aceiteRegulamento"
            onChange={(e) => setAceiteRegulamento(e.target.checked)}
            checked={aceiteRegulamento}
          />
          <span>Aceito o regulamento do evento</span>
        </label>

        <input type="submit" value="Enviar" disabled={!aceiteRegulamento} />
      </form>
    </div>
  );
};

export default FormEvento;
