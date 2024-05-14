import { TableCell } from "../ui/table";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import "dayjs/locale/pt-br"

type TableRowDate = {
  vencimento: string
}

export default function TableRowDate({vencimento}:TableRowDate) {
  
  return (
    <TableCell className="hidden md:table-cell">Dia {vencimento}</TableCell>
  );
}
