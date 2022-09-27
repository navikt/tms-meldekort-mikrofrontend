import React from "react";
import { IntlProvider } from "react-intl";
import nbMessages from "../language/nb.json";
import enMessages from "../language/en.json";

const loadMessages = (sprak: string) =>
  ({
    nb: nbMessages,
    en: enMessages,
  }[sprak]);

interface Props {
  defaultSprak: string;
  children: React.ReactNode;
}

const LanguageProvider = ({ defaultSprak, children }: Props) => (
  <IntlProvider locale={defaultSprak} messages={loadMessages(defaultSprak)}>
    {children}
  </IntlProvider>
);

export default LanguageProvider;
