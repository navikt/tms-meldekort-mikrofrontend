import { LinkPanel } from "@navikt/ds-react";
import { Task } from "@navikt/ds-icons";
import OppgaveCSS from "./Oppgave.module.css";

interface Props {
  tekst: string;
  dato?: string;
  href: string;
  id?: string;
}

const Oppgave = ({ tekst, dato, href }: Props) => {
  return (
    <LinkPanel className={OppgaveCSS.wrapper} href={href} border={false}>
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "var(--navds-spacing-6)",
          alignItems: "center",
        }}
      >
        <div className={OppgaveCSS.ikon_wrapper}>
          <Task fontSize="1.375rem" />
        </div>
        <div className={OppgaveCSS.tekst_wrapper}>
          <LinkPanel.Title className={OppgaveCSS.tekst}>{tekst}</LinkPanel.Title>
          <LinkPanel.Description className={OppgaveCSS.dato}>{dato}</LinkPanel.Description>
        </div>
      </div>
    </LinkPanel>
  );
};

export default Oppgave;
