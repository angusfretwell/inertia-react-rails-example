import { formatRelative, parseISO } from "date-fns/esm";

export default function (timestamp) {
  return formatRelative(parseISO(timestamp), new Date());
}
