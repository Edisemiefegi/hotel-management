import Card from "./Card";
import type { ReactNode } from "react";

type info = {
  title: string;
  number: string;
  percentage: string;
  icon: ReactNode;
};

interface Props {
  info: info;
}

function InfoCard({ info }: Props) {
  return (
    <Card className="flex justify-between">
      <div>
        <p className="text-sm font-medium text-gray">{info.title}</p>
        <p className="text-lg font-bold">{info.number}</p>
        <p className="text-xs text-gray">{info.percentage}</p>
      </div>
      {info.icon}
    </Card>
  );
}

export default InfoCard;
