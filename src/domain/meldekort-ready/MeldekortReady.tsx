import { meldekortUrl } from "../../api/urls";
import { MeldekortData } from "../../types/MeldekortType";
import { LinkPanel } from "@navikt/ds-react";
import { createDatoLabel, createReadyForInnsendingText, createRisikererTrekkLabel } from "./meldekortReadyText";
import Label from "../../components/label/Label";
import LinkCard from "../../components/card/LinkCard";
import styles from "../../components/card/LinkCard.module.css";

interface Props {
  meldekort: MeldekortData;
}

const MeldekortReady = ({ meldekort }: Props) => {
  const overskrift = createReadyForInnsendingText(meldekort);
  const dato = createDatoLabel(meldekort);
  const risikererTrekk = meldekort.nyeMeldekort?.nesteMeldekort?.risikererTrekk;
  const risikererTrekkTekst = createRisikererTrekkLabel(meldekort);

  return (
    <LinkCard href={meldekortUrl}>
      <>
        <LinkPanel.Title className={styles.tekst}>{overskrift}</LinkPanel.Title>
        <LinkPanel.Description className={styles.dato}>
          {risikererTrekk ? risikererTrekkTekst : dato}
        </LinkPanel.Description>
        <Label textId="meldekort.label.ready" />
      </>
    </LinkCard>
  );
};

export default MeldekortReady;
