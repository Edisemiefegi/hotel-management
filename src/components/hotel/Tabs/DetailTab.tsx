import { useFormContext } from "react-hook-form";
import FormField from "@/components/form/FormField";
import AmenitySelector from "../AmenitySelector";
import { Controller } from "react-hook-form";
import type { FieldConfig } from "@/types/hotel";



function DetailTab() {
  const { control } = useFormContext();


  const statusOptions = [
    { value: "Operational", label: "Operational" },
    { value: "Renovation", label: "Renovation" },
    { value: "Closed", label: "Closed" },
  ];

  const fields: FieldConfig[] = [
    {
      name: "name",
      label: "Hotel Name",
      placeholder: "E.g Sunrise Hotel",
    },
    {
      name: "location",
      label: "Location",
      placeholder: "E.g Ikeja, Lagos",
    },
    {
      name: "whatsapp",
      label: "Phone Number",
      placeholder: "E.g 08171212121",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Enter hotel description",
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      options: statusOptions,
      placeholder: "Select status",
    },
    {
      name: "images",
      label: "Featured Images",
      type: "file",
      multiple: true,
    },
  ];


  return (
    <div className="space-y-3">
      {fields.map((field) => (
        <FormField
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          options={field.options}
          multiple={field.multiple}
        />
      ))}

      {/* Amenities  */}
      <Controller
        name="amenities"
        control={control}
        render={({ field }) => (
          <AmenitySelector value={field.value} onChange={field.onChange} />
        )}
      />
    </div>
  );
}

export default DetailTab;
