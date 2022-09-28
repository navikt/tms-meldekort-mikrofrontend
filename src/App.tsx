import Meldekort from "./components/meldekort/Meldekort";
import Etterregistrering from "./components/etterregistrering/Etterregistrering";
import "@navikt/ds-css";
import "./App.css";

function App() {
  return (
    <>
      <li className="varsel" key="meldekort-varsel">
        <Meldekort />
      </li>
      <li className="varsel" key="meldekort-etterregistrering-varsel">
        <Etterregistrering />
      </li>
    </>
  );
}

export default App;
