import { PlusCircle } from "lucide-react";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export default function HeaderTable() {
  return (
    <CardHeader className="grid grid-cols-2">
      <div className="flex flex-col gap-2">
        <CardTitle>Assinaturas</CardTitle>
        <CardDescription>
          Confira a lista de assinaturas mensais de sua empresa.
        </CardDescription>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Adicionar Cliente
          </span>
        </Button>
      </div>
    </CardHeader>
  );
}
