import { meldekortUrl } from "../../api/urls";
import { MeldekortData } from "../../types/MeldekortType";
import { BodyShort, LinkPanel } from "@navikt/ds-react";
import { createDatoLabel, createReadyForInnsendingText, createRisikererTrekkDescription } from "./meldekortReadyText";
import Label from "../../components/label/Label";
import LinkCard from "../../components/card/LinkCard";
import styles from "../../components/card/LinkCard.module.css";

interface Props {
  meldekort: MeldekortData;
}

const MeldekortReady = ({ meldekort }: Props) => {
  const title = createReadyForInnsendingText(meldekort);
  const dato = createDatoLabel(meldekort);
  const risikererTrekk = meldekort.nyeMeldekort?.nesteMeldekort?.risikererTrekk;
  const risikererTrekkDescription = createRisikererTrekkDescription(meldekort);

  return (
    <LinkCard href={meldekortUrl}>
      <>
        <BodyShort>{title}</BodyShort>
        <LinkPanel.Description className={styles.dato}>
          {risikererTrekk ? risikererTrekkDescription : dato}
        </LinkPanel.Description>
        <Label textId="meldekort.label.ready" />
      </>
    </LinkCard>
  );
};

export default MeldekortReady;
