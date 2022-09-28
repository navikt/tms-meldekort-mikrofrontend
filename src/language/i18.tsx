import dayjs from "dayjs";
import "dayjs/locale/nb";

dayjs.locale("nb");

export const numberToWord = (tall: number | undefined) => {
  const ord = ["ett", "to", "tre", "fire", "fem", "seks", "sju", "åtte", "ni", "ti", "elleve", "tolv"];
  return tall && tall > 12 ? tall : tall && ord[tall - 1];
};

export const formatDateMonth = (date: string | number | Date | dayjs.Dayjs | null | undefined) =>
  dayjs(date).format("D. MMMM YYYY");

export const formatDayAndMonth = (date: string | number | Date | dayjs.Dayjs | null | undefined) =>
  dayjs(date).locale("nb").format("DD.MM.YYYY");

export const formatDateAndTime = (date: string | number | Date | dayjs.Dayjs | null | undefined) =>
  dayjs(date).locale("nb").format("DD.MM.YYYY - HH:mm");
