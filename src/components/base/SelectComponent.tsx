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
  label?: string
}

function SelectComponent({ placeholder, options, value, onChange, label }: Props) {
  return (
   
    <div>
         {label &&      <label htmlFor="" className="mb-1 text-sm " >{label}</label>}

        <Select value={value} onValueChange={onChange} >
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
    </div>
   
  );
}

export default SelectComponent;
