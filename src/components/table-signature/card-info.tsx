import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import React, { ForwardRefExoticComponent } from "react";

interface CardInfoProps {
  cardTitle: string;
  value: string;
  lastMonth: string;
  chuck: string;
  icon: any;
}

export default function CardInfo({
  cardTitle,
  value,
  lastMonth,
  icon,
  chuck
}: CardInfoProps) {
  return (
    <Card x-chunk={chuck}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{cardTitle}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{lastMonth}</p>
      </CardContent>
    </Card>
  );
}
