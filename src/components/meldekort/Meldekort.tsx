import useSwr from "swr";
import { fetcher } from "../../api/api";
import { IntlShape, useIntl } from "react-intl";
import { meldekortApiUrl, meldekortUrl } from "../../api/urls";
import { formatDateMonth, formatDayAndMonth, numberToWord } from "../../language/i18";
import Beskjed from "../varsler/beskjed/Beskjed";
import Oppgave from "../varsler/oppgave/Oppgave";

interface NesteMeldekort {
  fra: string;
  kanSendesFra: string;
  risikererTrekk: boolean;
  sisteDatoForTrekk: string;
  til: string;
  uke: string;
}

interface NyeMeldekort {
  antallNyeMeldekort: number;
  nesteInnsendingAvMeldekort: string;
  nesteMeldekort: NesteMeldekort | null;
}

export interface MeldekortData {
  etterregistrerteMeldekort?: number;
  meldekortbruker: boolean;
  nyeMeldekort: NyeMeldekort | null;
  resterendeFeriedager: number;
}

const Meldekort = () => {
  const { data: meldekort } = useSwr<MeldekortData>(meldekortApiUrl, fetcher);
  const { formatMessage }: IntlShape = useIntl();

  console.log(meldekort);

  const isMeldekortBruker = meldekort?.meldekortbruker;
  const isPendingForInnsending = isMeldekortBruker && meldekort?.nyeMeldekort?.nesteInnsendingAvMeldekort;
  const isReadyForInnsending =
    isMeldekortBruker && meldekort?.nyeMeldekort?.antallNyeMeldekort && meldekort.nyeMeldekort.antallNyeMeldekort > 0;

  const fremtidig = meldekort?.nyeMeldekort?.nesteInnsendingAvMeldekort
    ? formatMessage(
        { id: "meldekort.melding.fremtidig" },
        { dato: formatDateMonth(meldekort?.nyeMeldekort?.nesteInnsendingAvMeldekort) }
      )
    : "";

  const melding = meldekort?.nyeMeldekort?.nesteMeldekort
    ? formatMessage(
        {
          id: meldekort?.nyeMeldekort?.antallNyeMeldekort === 1 ? "meldekort.ett" : "meldekort.flere",
        },
        {
          count: numberToWord(meldekort?.nyeMeldekort?.antallNyeMeldekort),
          next: meldekort.nyeMeldekort.nesteMeldekort.uke,
          from: formatDayAndMonth(meldekort?.nyeMeldekort?.nesteMeldekort?.fra),
          until: formatDayAndMonth(meldekort?.nyeMeldekort?.nesteMeldekort?.til),
        }
      )
    : "";

  const trekk = !meldekort?.nyeMeldekort?.nesteMeldekort?.risikererTrekk
    ? formatMessage(
        { id: "meldekort.info.om.trekk" },
        { dato: formatDateMonth(meldekort?.nyeMeldekort?.nesteMeldekort?.sisteDatoForTrekk) }
      )
    : "";

  const advarsel = meldekort?.nyeMeldekort?.nesteMeldekort?.risikererTrekk
    ? formatMessage({ id: "meldekort.trekk" })
    : "";

  const overskrift = isReadyForInnsending ? fremtidig + melding + trekk + advarsel : fremtidig + advarsel;

  const feriedager =
    meldekort?.resterendeFeriedager && meldekort.resterendeFeriedager > 0
      ? formatMessage({ id: "meldekort.feriedager" }, { feriedager: meldekort?.resterendeFeriedager }) +
        formatMessage({
          id:
            meldekort?.nyeMeldekort?.antallNyeMeldekort && meldekort.nyeMeldekort.antallNyeMeldekort > 1
              ? "meldekort.se.oversikt"
              : "meldekort.send",
        })
      : "";
  console.log("pending: " + isPendingForInnsending);
  console.log("ready: " + isReadyForInnsending);

  if (isPendingForInnsending) {
    return (
      <li key={"meldekort-varsel"}>
        <Beskjed tekst={overskrift} dato={feriedager} href={meldekortUrl} id="meldekort-notifikasjon" />
      </li>
    );
  }

  if (isReadyForInnsending) {
    return (
      <li key={"meldekort-varsel"}>
        <Oppgave tekst={overskrift} dato={feriedager} href={meldekortUrl} id="meldekort-notifikasjon" />
      </li>
    );
  }

  return null;
};

export default Meldekort;
