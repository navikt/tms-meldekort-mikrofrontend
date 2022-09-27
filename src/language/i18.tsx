import dayjs from "dayjs";
import "dayjs/locale/nb";
import localeData from "dayjs/plugin/localeData";

dayjs.locale("nb");

export const setLocaleDate = () => {
  dayjs.extend(localeData);
  dayjs.locale("nb");
};

export const formatToReadableDate = (date: string | number | Date | dayjs.Dayjs | null | undefined) => {
  return dayjs(date).format("D. MMMM YYYY, kl. HH.mm");
};

export const numberToWord = (tall: number) => {
  const ord = ["ett", "to", "tre", "fire", "fem", "seks", "sju", "åtte", "ni", "ti", "elleve", "tolv"];
  return tall > 12 ? tall : ord[tall - 1];
};

export const formatDate = (date: string | number | Date) => new Date(date).toLocaleDateString("nb-NO");

export const oneMasculine = () => "én";

export const oneFeminine = () => "éi";

export const oneNeuter = () => "ett";

export const formatDateMonth = (date: string | number | Date | dayjs.Dayjs | null | undefined) =>
  dayjs(date).format("D. MMMM YYYY");

export const formatDayAndMonth = (date: string | number | Date | dayjs.Dayjs | null | undefined) =>
  dayjs(date).locale("nb").format("DD.MM.YYYY");

export const formatDateAndTime = (date: string | number | Date | dayjs.Dayjs | null | undefined) =>
  dayjs(date).locale("nb").format("DD.MM.YYYY - HH:mm");
