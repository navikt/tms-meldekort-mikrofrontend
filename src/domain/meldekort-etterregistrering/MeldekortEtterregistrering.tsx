import { etterregistreringUrl } from "../../api/urls";
import { MeldekortData } from "../../types/MeldekortType";
import { LinkPanel } from "@navikt/ds-react";
import { createMeldekortEtterregistreringText } from "./meldekortEtterregistreringText";
import Label from "../../components/label/Label";
import LinkCard from "../../components/card/LinkCard";
import styles from "../../components/card/LinkCard.module.css";

interface Props {
  meldekort: MeldekortData;
}

const MeldekortEtterregistrering = ({ meldekort }: Props) => {
  if (meldekort.etterregistrerteMeldekort > 0) {
    return (
      <LinkCard href={etterregistreringUrl}>
        <>
          <LinkPanel.Title className={styles.tekst}>{createMeldekortEtterregistreringText(meldekort)}</LinkPanel.Title>
          <Label textId="meldekort.label.etterregistrering" />
        </>
      </LinkCard>
    );
  }

  return null;
};

export default MeldekortEtterregistrering;
