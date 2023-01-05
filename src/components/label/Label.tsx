import styles from "./Label.module.css";
import { BodyShort } from "@navikt/ds-react";
import { IntlShape, useIntl } from "react-intl";

interface Props {
  textId: string;
  count?: number;
}

const Label = ({ textId, count }: Props) => {
  const { formatMessage }: IntlShape = useIntl();

  return (
    <div className={styles.tag}>
      <BodyShort size="small" className={styles.tekst}>
        {formatMessage({ id: textId }, { count: count })}
      </BodyShort>
    </div>
  );
};

export default Label;
