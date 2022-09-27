import Meldekort from "./components/meldekort/Meldekort";
import Etterregistrering from "./components/etterregistrering/Etterregistrering";
import "@navikt/ds-css";
import "./App.css";

function App() {
  return (
    <ul className="varsler">
      <Meldekort />
      <Etterregistrering />
    </ul>
  );
}

export default App;
