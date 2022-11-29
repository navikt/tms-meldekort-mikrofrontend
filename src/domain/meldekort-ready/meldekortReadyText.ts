import { MeldekortData } from "../../types/MeldekortType";
import { formatDayAndMonth, numberToWord } from "../../language/i18";
import { IntlShape, useIntl } from "react-intl";

export const readyForInnsendingText = (meldekort: MeldekortData) => {
  const { formatMessage }: IntlShape = useIntl();

  return meldekort.nyeMeldekort?.nesteMeldekort
    ? formatMessage(
        {
          id: meldekort.nyeMeldekort?.antallNyeMeldekort === 1 ? "meldekort.ett" : "meldekort.flere",
        },
        {
          count: numberToWord(meldekort.nyeMeldekort?.antallNyeMeldekort),
          next: meldekort.nyeMeldekort.nesteMeldekort.uke,
        }
      )
    : "";
};

export const datoLabel = (meldekort: MeldekortData) => {
  const { formatMessage }: IntlShape = useIntl();

  return formatMessage(
    {
      id: "meldekort.dato",
    },
    {
      from: formatDayAndMonth(meldekort.nyeMeldekort?.nesteMeldekort?.fra),
      until: formatDayAndMonth(meldekort.nyeMeldekort?.nesteMeldekort?.til),
    }
  );
};