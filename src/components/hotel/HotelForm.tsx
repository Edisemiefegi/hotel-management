/* eslint-disable @typescript-eslint/no-explicit-any */
import Tab from "../base/Tab";
import RoomsTab from "./RoomsTab";
import AddonTab from "./AddonTab";
import DetailTab from "./DetailTab";
import type { Hotel } from "@/types";
import { useState } from "react";
import { ROOMS } from "@/constants/hotels";

interface Props {
  data?: Hotel;
  isEdit?: boolean;
  onChange?: (form: Hotel) => void;
}
const emptyForm: Hotel = {
  name: "",
  location: "",
  whatsapp: "",
  description: "",
  amenities: [],
  rooms: [],
  addons: [],
  images: [],
  rating: 0,
  reviews: [],
  status: "Operational",
  id: "",
};

function HotelForm({ data, isEdit = false, onChange }: Props) {
  const [form, setForm] = useState<Hotel>(isEdit && data ? data : emptyForm);

  const updateField = (key: keyof Hotel, value: any) => {
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
          rooms={ROOMS}
        // updateRooms={(rooms) => updateField("rooms", rooms)}
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
