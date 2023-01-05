import { MeldekortData } from "../types/MeldekortType";

export const meldekortState = (meldekort: MeldekortData) => {
  const isMeldekortBruker = meldekort.meldekortbruker;
  const isPendingForInnsending = isMeldekortBruker && meldekort.nyeMeldekort?.nesteInnsendingAvMeldekort;
  const isReadyForInnsending =
    isMeldekortBruker && meldekort.nyeMeldekort?.antallNyeMeldekort && meldekort.nyeMeldekort.antallNyeMeldekort > 0;

  return [isPendingForInnsending, isReadyForInnsending];
};
