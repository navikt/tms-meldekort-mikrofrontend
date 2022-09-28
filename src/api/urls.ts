const isProduction = window.location.href.includes("www.intern.nav.no") || window.location.href.includes("www.nav.no");
const isDevelopment = window.location.href.includes("www.dev.nav.no");

export const getEnvironment = (): "production" | "development" | "local" => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};

type EnvUrl = { local: string; development: string; production: string };

const MELDEKORT_API_URL: EnvUrl = {
  local: "http://localhost:5173/api/meldekortinfo",
  development: "https://www.dev.nav.no/dittnav-api/meldekortinfo",
  production: "https://www.nav.no/dittnav-api/meldekortinfo",
};

const MELDEKORT_URL: EnvUrl = {
  local: "http://localhost:5173/meldekort",
  development: "https://www.dev.nav.no/meldekort",
  production: "https://www.nav.no/meldekort",
};

const ETTERREGISTRERING_MELDEKORT_URL: EnvUrl = {
  local: "http://localhost:5173/meldekort",
  development: "https://www.dev.nav.no/meldekort/etterregistrer-meldekort",
  production: "https://www.nav.no/meldekort/etterregistrer-meldekort",
};

export const meldekortUrl = MELDEKORT_URL[getEnvironment()];
export const meldekortApiUrl = MELDEKORT_API_URL[getEnvironment()];
export const etterregistreringUrl = ETTERREGISTRERING_MELDEKORT_URL[getEnvironment()];
