import styles from "./Label.module.css";
import { BodyShort } from "@navikt/ds-react";
import { IntlShape, useIntl } from "react-intl";

interface Props {
  textId: string;
}

const Label = ({ textId }: Props) => {
  const { formatMessage }: IntlShape = useIntl();

  return (
    <div className={styles.tag}>
      <BodyShort size="small" className={styles.tekst}>
        {formatMessage({ id: textId })}
      </BodyShort>
    </div>
  );
};

export default Label;
