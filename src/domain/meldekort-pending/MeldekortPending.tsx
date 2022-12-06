import { meldekortUrl } from "../../api/urls";
import { MeldekortData } from "../../types/MeldekortType";
import { LinkPanel } from "@navikt/ds-react";
import { createPendingForInnsendingText } from "./meldekortPendingText";
import LinkCard from "../../components/card/LinkCard";
import styles from "../../components/card/LinkCard.module.css";

interface Props {
  meldekort: MeldekortData;
}

const MeldekortPending = ({ meldekort }: Props) => {
  const overskrift = createPendingForInnsendingText(meldekort);

  return (
    <LinkCard href={meldekortUrl} ready={true}>
      <div className={styles.tekst_wrapper}>
        <LinkPanel.Title className={styles.tekst}>{overskrift}</LinkPanel.Title>
      </div>
    </LinkCard>
  );
};

export default MeldekortPending;
