import useSwr from "swr";
import { Heading } from "@navikt/ds-react";
import { IntlShape, useIntl } from "react-intl";
import { MeldekortData } from "./types/MeldekortType";
import { meldekortApiUrl } from "./api/urls";
import { meldekortState } from "./domain/meldekortState";
import { fetcher } from "./api/api";
import MeldekortEtterregistrering from "./domain/meldekort-etterregistrering/MeldekortEtterregistrering";
import MeldekortPending from "./domain/meldekort-pending/MeldekortPending";
import MeldekortReady from "./domain/meldekort-ready/MeldekortReady";
import styles from "./App.module.css";
import "@navikt/ds-css";

function App() {
  const { data: meldekort, error } = useSwr<MeldekortData>(meldekortApiUrl, fetcher);
  const { formatMessage }: IntlShape = useIntl();

  if (!meldekort) {
    return null;
  }

  if (error) {
    throw Error("Klarte ikke å hente meldekortdata");
  }

  if (!meldekort.meldekortbruker) {
    return null;
  }

  const [isPendingForInnsending, isReadyForInnsending] = meldekortState(meldekort);

  return (
    <section className={styles.meldekort}>
      <Heading size="medium" level="2" spacing>
        {formatMessage({ id: "meldekort.tittel" })}
      </Heading>
      <div className={styles.container}>
        <MeldekortEtterregistrering meldekort={meldekort} />
        {isPendingForInnsending ? <MeldekortPending meldekort={meldekort} /> : null}
        {isReadyForInnsending ? <MeldekortReady meldekort={meldekort} /> : null}
      </div>
    </section>
  );
}

export default App;
