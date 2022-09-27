import { LinkPanel } from "@navikt/ds-react";
import { SpeechBubble } from "@navikt/ds-icons";
import BeskjedCSS from "./Beskjed.module.css";

interface Props {
  tekst: string;
  dato: string;
  href: string;
  id: string;
}

const Beskjed = ({ tekst, dato, href }: Props) => {
  return (
    <LinkPanel className={BeskjedCSS.wrapper} href={href} border={false}>
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "var(--navds-spacing-6)",
          alignItems: "center",
        }}
      >
        <div className={BeskjedCSS.ikon_wrapper}>
          <SpeechBubble fontSize="1.375rem" />
        </div>
        <div className={BeskjedCSS.tekst_wrapper}>
          <LinkPanel.Title className={BeskjedCSS.tekst}>{tekst}</LinkPanel.Title>
          <LinkPanel.Description className={BeskjedCSS.dato}>{dato}</LinkPanel.Description>
        </div>
      </div>
    </LinkPanel>
  );
};

export default Beskjed;
