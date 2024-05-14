import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";
import TableRowTags from "./table-row-tags";
import TableRowDropdown from "./table-row-dropdown";
import TableRowDate from "./table-row-date";

type personInfoProps = {
  tags: string[];
  value: number;
  status: string;
  pay_day: string;
  debtor: {
    name: string;
  };
};

type AllPersonInfo = {
  data: personInfoProps[];
};

export default function TableSignature({ data }: AllPersonInfo) {

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead className="hidden md:table-cell">Preço</TableHead>
          <TableHead className="hidden md:table-cell">Vencimento</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: personInfoProps, index: number) => {
          return (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.debtor?.name}</TableCell>
              <TableRowTags tags={item.tags} />
              <TableCell className="hidden md:table-cell">
                {Number(item.value).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
              <TableRowDate vencimento={item.pay_day} />
              <TableCell>
                <TableRowDropdown
                  highlight="Ações"
                  dropdownMenuItem={["Informações", "Delete"]}
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
