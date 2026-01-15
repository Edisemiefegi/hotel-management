import Tab from "../base/Tab";
import RoomsTab from "./RoomsTab";
import AddonTab from "./AddonTab";
import DetailTab from "./DetailTab";
import type { HotelFormData } from "@/types";
import { useState } from "react";

interface Props {
  data?: HotelFormData;
  isEdit?: boolean;
  onChange?: (form: HotelFormData) => void;
}
const emptyForm: HotelFormData = {
  name: "",
  location: "",
  whatsapp: "",
  description: "",
  amenities: "",
  rooms: [],
  addons: [],
  images: []
};

function HotelForm({ data, isEdit = false, onChange }: Props) {
  const [form, setForm] = useState<HotelFormData>(
    isEdit && data ? data : emptyForm
  );

  const updateField = (key: keyof HotelFormData, value: any) => {
    setForm((prev) => {
      const updated = { ...prev, [key]: value };
      onChange?.(updated); 
      return updated;
    });
  };
  const tabs = [
    {
      value: "details",
      label: "Details",
      content: <DetailTab form={form} updateField={updateField} />,
    },
    {
      value: "rooms",
      label: "Rooms",
      content: (
        <RoomsTab
          rooms={form.rooms}
          updateRooms={(rooms) => updateField("rooms", rooms)}
        />
      ),
    },
    {
      value: "add-ons",
      label: "Add-ons",
      content: <AddonTab />,
    },
  ];

  return (
    <div>
      <Tab tabs={tabs} />
    </div>
  );
}

export default HotelForm;
