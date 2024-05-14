

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
import TableRowTags from "../table-signature/table-row-tags";
import TableRowDropdown from "../table-signature/table-row-dropdown";
import TableRowDate from "../table-signature/table-row-date";

type personInfoProps = {
  id: string;
  name: string;
  email: number;
  updated_at: string;
  created_at: string;
};

type AllPersonInfo = {
  data: personInfoProps[];
};

export default function TableClient({ data }: AllPersonInfo) {
  

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead className="hidden md:table-cell">Nome</TableHead>
          <TableHead className="hidden md:table-cell">Criação</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: personInfoProps, index: number) => {
          var data = new Date(item.created_at)
          return (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell className="hidden md:table-cell">
                {item.name}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {data.toLocaleDateString("pt-BR")}
              </TableCell>
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
