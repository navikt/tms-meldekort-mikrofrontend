import Meldekort from "./components/meldekort/Meldekort";
import Etterregistrering from "./components/etterregistrering/Etterregistrering";
import "@navikt/ds-css";
import "./App.css";

function App() {
  return (
    <div className="meldekort">
      <ul className="varsler">
        <Meldekort />
        <Etterregistrering />
      </ul>
    </div>
  );
}

export default App;
