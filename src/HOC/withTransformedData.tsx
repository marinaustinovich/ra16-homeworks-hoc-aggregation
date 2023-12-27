import React, { ComponentType } from "react";
import { aggregateByMonth, aggregateByYear, sortByDate } from "../utils";

type FormatType = "month" | "date" | "year";

export type ListItem = {
  date: string;
  amount: number;
};
type ListProps = {
  list: ListItem[];
};

export const withTransformedData = <P extends ListProps>(
  Component: ComponentType<P>,
  formatType: FormatType
) => {
  return (props: P) => {
    let transformedList;

    switch (formatType) {
      case "month":
        transformedList = aggregateByMonth(props.list);
        break;
      case "year":
        transformedList = aggregateByYear(props.list);
        break;
      case "date":
      default:
        transformedList = sortByDate(props.list);
    }

    return <Component {...(props as P)} list={transformedList as any} />;
  };
};
