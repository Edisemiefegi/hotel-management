import { Checkbox } from "@/components/ui/checkbox";
import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  price: number;
  icon: LucideIcon;
}

function AddOnCard({ title, description, price, icon: Icon }: Props) {
  return (
    <label className="flex items-start gap-4 p-4 border rounded-xl cursor-pointer hover:border-primary transition">
      <div className="w-7 h-7 text-gray rounded-md bg-secondary flex items-center justify-center text-lg">
        <Icon size={15} />
      </div>
      <div className="flex-1">
        <h3 className="font-light">{title}</h3>
        <p className="text-sm text-gray font-light">{description}</p>
        <p className="mt-2 font-semibold text-primary">+${price}</p>
      </div>
      <Checkbox />{" "}
    </label>
  );
}

export default AddOnCard;
