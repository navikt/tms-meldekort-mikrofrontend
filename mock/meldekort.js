export default [
  {
    url: "/api/meldekortinfo",
    method: "get",
    response: () => {
      return {
        etterregistrerteMeldekort: 1,
        meldekortbruker: true,
        nyeMeldekort: {
          antallNyeMeldekort: 0,
          nesteInnsendingAvMeldekort: "2019-08-24",
          nesteMeldekort: null,
        },
        resterendeFeriedager: 2,
      };
    },
  },
];
