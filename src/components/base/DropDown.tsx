import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { MenuItem } from "@/types";
import { Ellipsis } from "lucide-react";
import { Link } from "react-router-dom";


interface Props {
  menu: MenuItem[];
  text?: string;
}

function DropDown({ menu, text }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex  outline-none cursor-pointer flex-col">
          <Ellipsis />
          {text && <span className="text-[0.7rem]">{text}</span>}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {menu.map(({ label, icon: Icon, path }) => (
          <DropdownMenuItem key={label} asChild>
            <Link to={path!} className="flex  items-center gap-2">
              {Icon && <Icon size={16} strokeWidth={1.5} />}
              <span>{label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDown;
