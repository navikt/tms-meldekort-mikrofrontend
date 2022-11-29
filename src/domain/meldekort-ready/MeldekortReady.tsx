import { meldekortUrl } from "../../api/urls";
import { MeldekortData } from "../../types/MeldekortType";
import { LinkPanel } from "@navikt/ds-react";
import { datoLabel, readyForInnsendingText } from "./meldekortReadyText";
import Label from "../../components/label/Label";
import LinkCard from "../../components/card/LinkCard";
import styles from "../../components/card/LinkCard.module.css";

interface Props {
  meldekort: MeldekortData;
}

const MeldekortReady = ({ meldekort }: Props) => {
  const overskrift = readyForInnsendingText(meldekort);
  const dato = datoLabel(meldekort);

  return (
    <LinkCard href={meldekortUrl}>
      <>
        <LinkPanel.Title className={styles.tekst}>{overskrift}</LinkPanel.Title>
        <LinkPanel.Description className={styles.dato}>{dato}</LinkPanel.Description>
        <Label textId="meldekort.label.ready" />
      </>
    </LinkCard>
  );
};

export default MeldekortReady;
