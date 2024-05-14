import { Badge } from "../ui/badge";
import { TableCell } from "../ui/table";

type TableRowTags = {
  tags: string[];
};

export default function TableRowTags({ tags }: TableRowTags) {
  return (
    <TableCell className="*:mx-1 gap-x-1">
      {tags.map((item, index) => {
        if (index > 3) {
          return;
        }
        if (index > 2) {
          return (
            <Badge variant="outline" key={index}>
              ...
            </Badge>
          );
        }

        return (
          <Badge variant="outline" key={index}>
            {item}
          </Badge>
        );
      })}
    </TableCell>
  );
}
