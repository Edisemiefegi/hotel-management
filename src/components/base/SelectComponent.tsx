import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormErrorHint from "./form/FormErrorHint";

type Options = {
  label: string;
  value: string;
};

export interface SelectType {
  placeholder?: string;
  options: Options[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  label?: string;
  error?: string;
  hint?: string;
}

function SelectComponent({
  placeholder,
  options,
  value,
  onChange,
  disabled,
  // label,
  error,
  hint,
}: SelectType) {
  return (
    <div className="w-full space-y-1">
      {/* {label && (
        <label htmlFor="" className="mb-1 text-sm ">
          {label}
        </label>
      )} */}

      <Select value={value} onValueChange={onChange} disabled={disabled}>
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

      <FormErrorHint error={error} hint={hint} />
    </div>
  );
}

export default SelectComponent;
