import { MeldekortData } from "../../types/MeldekortType";
import { IntlShape, useIntl } from "react-intl";
import { numberToWord } from "../../language/i18";

export const createMeldekortEtterregistreringText = (meldekort: MeldekortData | undefined) => {
  const { formatMessage }: IntlShape = useIntl();

  return formatMessage(
    { id: "meldekort.etterregistreringer" },
    { etterregistreringer: numberToWord(meldekort?.etterregistrerteMeldekort) }
  );
};
