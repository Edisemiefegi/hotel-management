import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Options = {
  item: string;
  value: string;
};

interface Props {
placeholder: string, options: Options[]
}

function SelectComponent({placeholder, options}: Props) {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-fit">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((item, index) => (
            <SelectItem key={index} value={item.value}>{item.item}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectComponent;
