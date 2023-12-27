import dayjs from "dayjs";
import { ListItem } from "../hoc-functions";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const aggregateByMonth = (list: ListItem[]) => {
  const result: Record<string, number> = {};

  list.forEach((item) => {
    const month = dayjs(item.date).format("MMM");
    result[month] = (result[month] || 0) + item.amount;
  });

  return MONTHS.map((month) => ({
    month,
    amount: result[month] || 0,
  }));
};

export const aggregateByYear = (list: ListItem[]) => {
  const result: Record<string, number> = {};
  list.forEach((item) => {
    const year = dayjs(item.date).year();
    result[year] = (result[year] || 0) + item.amount;
  });

  return Object.entries(result).map(([year, amount]) => ({
    year: parseInt(year),
    amount,
  }));
};

export const sortByDate = (
  list: ListItem[],
  direction: "asc" | "desc" = "desc"
) => {
  return [...list].sort((a, b) => {
    const difference = dayjs(a.date).unix() - dayjs(b.date).unix();
    return direction === "asc" ? difference : -difference;
  });
};
