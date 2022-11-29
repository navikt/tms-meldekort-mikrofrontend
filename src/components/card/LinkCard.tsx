import { LinkPanel } from "@navikt/ds-react";
import styles from "./LinkCard.module.css";
import { ReactElement } from "react";
import "./Overrides.css";

interface Props {
  href: string;
  ready?: boolean;
  children: ReactElement;
}

const LinkCard = ({ href, ready, children }: Props) => {
  return (
    <div className={`linkcard ${styles.linkcard} ${ready && `ready ${styles.ready}`}`}>
      <LinkPanel className={styles.linkpanel} href={href} border={false}>
        {children}
      </LinkPanel>
    </div>
  );
};

export default LinkCard;
