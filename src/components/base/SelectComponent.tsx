import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Options = {
  label: string;
  value: string;
};

interface Props {
  placeholder: string;
  options: Options[];
  value?: string;
  onChange?: (value: string) => void;
}

function SelectComponent({ placeholder, options, value, onChange }: Props) {
  return (
   
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-fit">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
   
  );
}

export default SelectComponent;
