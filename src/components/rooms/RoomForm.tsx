import FormField from "../form/FormField";

function RoomForm() {
  const roomFields = [
    { name: "type", label: "Room Type", placeholder: "e.g Deluxe Suite" },
    {
      name: "pricePerNight",
      label: "Price Per Night",
      type: "number",
      placeholder: "0",
    },
    { name: "roomNo", label: "Room Number", placeholder: "enter room no.." },
    { name: "bed", label: "Beds", placeholder: "e.g 1 king" },
    {
      name: "capacity",
      label: "Capacity",
      type: "select",
      placeholder: "select guest capacity",
      options: [
        { label: "1 Guest", value: "1" },
        { label: "2 Guests", value: "2" },
        { label: "3 Guests", value: "3" },
        { label: "4 Guests", value: "4" },
        { label: "5+ Guests", value: "5+" },
      ],
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      placeholder: "select room status",

      options: [
        { label: "Available", value: "Available" },
        { label: "Booked", value: "Booked" },
        { label: "Maintenance", value: "Maintenance" },
      ],
    },
    {
      name: "image",
      label: "Room Image",
      type: "file",
    },
  ];

  return (
    <div className=" grid  grid-cols-2 gap-4 ">
      {roomFields.map((field) => (
        <FormField
          placeholder={field.placeholder}
          key={field.name}
          name={`rooms.${field.name}`}
          label={field.label}
          type={field.type as any}
          options={field.options}
        />
      ))}
    </div>
  );
}

export default RoomForm;
