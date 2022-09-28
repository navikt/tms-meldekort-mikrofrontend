import useSwr from "swr";
import { useIntl } from "react-intl";
import { fetcher } from "../../api/api";
import Oppgave from "../varsler/oppgave/Oppgave";
import { etterregistreringUrl, meldekortApiUrl } from "../../api/urls";
import { numberToWord } from "../../language/i18";
import { MeldekortData } from "../../types/MeldekortType";

const Etterregistrering = () => {
  const { data: meldekort, error } = useSwr<MeldekortData>(meldekortApiUrl, fetcher);
  const { formatMessage } = useIntl();

  if (!error && !meldekort) {
    return null;
  }

  const tekst = formatMessage(
    { id: "meldekort.etterregistreringer" },
    { etterregistreringer: numberToWord(meldekort?.etterregistrerteMeldekort) }
  );

  if (meldekort?.etterregistrerteMeldekort && meldekort.etterregistrerteMeldekort > 0) {
    return <Oppgave tekst={tekst} href={etterregistreringUrl} />;
  }

  return null;
};

export default Etterregistrering;
