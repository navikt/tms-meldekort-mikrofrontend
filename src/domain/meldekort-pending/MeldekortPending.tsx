import { meldekortUrl } from "../../api/urls";
import { MeldekortData } from "../../types/MeldekortType";
import { BodyShort, LinkPanel } from "@navikt/ds-react";
import { createPendingForInnsendingText } from "./meldekortPendingText";
import styles from "../../components/card/LinkCard.module.css";

interface Props {
  meldekort: MeldekortData;
}

const MeldekortPending = ({ meldekort }: Props) => {
  const title = createPendingForInnsendingText(meldekort);

  return (
    <LinkPanel id={styles.linkpanel} border={false} href={meldekortUrl}>
      <BodyShort>{title}</BodyShort>
    </LinkPanel>
  );
};

export default MeldekortPending;
