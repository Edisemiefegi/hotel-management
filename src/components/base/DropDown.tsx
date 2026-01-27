import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { MenuItem } from "@/types";
import { Ellipsis } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface Props {
  menu: MenuItem[] ;
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
      <DropdownMenuContent className="mr-2">
        {menu.map(({ label, icon: Icon, path, onClick }) => (
          <DropdownMenuItem key={label} asChild>
            {path ? (
              <Link
                to={path!}
                className="flex  items-center cursor-pointer  gap-2"
              >
                {Icon && <Icon size={16} strokeWidth={1.5} />}
                <span>{label}</span>
              </Link>
            ) : (
              <Button
                onClick={onClick}
                variant={"ghost"}
                className="w-full justify-start"
              >
                {Icon && <Icon size={16} strokeWidth={1.5} />}
                {label}
              </Button>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDown;
