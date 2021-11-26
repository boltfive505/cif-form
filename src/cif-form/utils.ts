import moment from "moment";

export const formatDate = (value?: string | number | Date): string => {
  if (!value) return "";
  return moment(value).format("MM/DD/YYYY");
};

export const formatTime = (value?: string | number | Date): string => {
  if (!value) return "";
  return moment(value).format("hh:mm a");
};

export const numberToOrdinal = (i: number): string => {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
};
