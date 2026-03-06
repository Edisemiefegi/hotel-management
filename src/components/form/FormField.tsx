import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SelectComponent from "@/components/base/SelectComponent";
import Upload from "@/components/base/Upload";

type Option = {
  label: string;
  value: string;
};

type Props = {
  name: string;
  label: string;
  type?: "text" | "number" | "textarea" | "select" | "file" | "date";
  placeholder?: string;
  options?: Option[];
  multiple?: boolean;
};

function FormField({
  name,
  label,
  type = "text",
  placeholder,
  options = [],
  multiple = false,
}: Props) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">{label}</label>

      {/* TEXT / NUMBER / DATE */}
      {(type === "text" || type === "number" || type === "date") && (
        <Input
          type={type}
          placeholder={placeholder}
          {...register(name, type === "number" ? { valueAsNumber: true } : {})}
        />
      )}

      {/* TEXTAREA */}
      {type === "textarea" && (
        <Textarea
          placeholder={placeholder}
          {...register(name)}
        />
      )}

      {/* SELECT */}
      {type === "select" && (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <SelectComponent
              value={field.value}
              onChange={field.onChange}
              options={options}
              placeholder={placeholder}
            />
          )}
        />
      )}

      {/* FILE */}
      {type === "file" && (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Upload
              multiple={multiple}
               value={field.value || []}
               onChange={field.onChange}
            />
          )}
        />
      )}

      {/* ERROR */}
      {error && (
        <p className="text-red-500 text-xs">{error}</p>
      )}
    </div>
  );
}

export default FormField;
