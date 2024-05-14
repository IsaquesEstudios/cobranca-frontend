import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type TableRowDropdown = {
  highlight: string;
  dropdownMenuItem: string[];
};

export default function TableRowDropdown({
  highlight,
  dropdownMenuItem,
}: TableRowDropdown) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-haspopup="true" size="icon" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{highlight}</DropdownMenuLabel>
        {dropdownMenuItem?.map((item, index) => {
          return <DropdownMenuItem className="pointer" key={index}>{item}</DropdownMenuItem>;
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
