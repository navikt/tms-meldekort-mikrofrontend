import { etterregistreringUrl } from "../../api/urls";
import { MeldekortData } from "../../types/MeldekortType";
import { BodyShort } from "@navikt/ds-react";
import { createMeldekortEtterregistreringText } from "./meldekortEtterregistreringText";
import Label from "../../components/label/Label";
import LinkCard from "../../components/card/LinkCard";
import styles from "../../components/card/LinkCard.module.css";

interface Props {
  meldekort: MeldekortData;
}

const MeldekortEtterregistrering = ({ meldekort }: Props) => {
  const title = createMeldekortEtterregistreringText(meldekort);

  if (meldekort.etterregistrerteMeldekort > 0) {
    return (
      <LinkCard href={etterregistreringUrl}>
        <>
          <BodyShort className={styles.text}>{title}</BodyShort>
          <Label textId="meldekort.label.etterregistrering" count={meldekort.etterregistrerteMeldekort} />
        </>
      </LinkCard>
    );
  }

  return null;
};

export default MeldekortEtterregistrering;
