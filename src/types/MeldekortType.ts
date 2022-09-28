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
  etterregistrerteMeldekort: number;
  meldekortbruker: boolean;
  nyeMeldekort: NyeMeldekort | null;
  resterendeFeriedager: number;
}
