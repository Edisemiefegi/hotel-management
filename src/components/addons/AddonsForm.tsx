import FormField from "../form/FormField";

function AddonsForm() {
  const addonFields = [
    {
      name: "price",
      label: "Price (NGN)",
      type: "number",
      placeholder: "0",
    },
    { name: "addonName", label: "Name", placeholder: "Airport Transfer" ,       
},
    { name: "description", label: "Description", placeholder: "Private car pickup/dropoff",       
 },
    {
      name: "icon",
      label: "Icon",
      type: "select",
      placeholder: "select icon..",
      options: [
        { label: "Spa", value: "spa" },
        {value: 'gym', label: 'Gym access '}
      ],
    },
  ];

  return (
    <div className=" grid  grid-cols-2 gap-4">
      {addonFields.map((field) => (
        <FormField
          placeholder={field.placeholder}
          key={field.name}
          name={`addons.${field.name}`}
          label={field.label}
          type={field.type as any}
          options={field.options}
        />
      ))}
    </div>
  );
}

export default AddonsForm;
