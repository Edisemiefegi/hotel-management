import type { Room } from "@/types";
import InputComponet from "../base/InputComponet";
import { useState } from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
interface Props {
  onAdd: (room: Room) => void;
}

const emptyForm: Room = {
  id: "",
  name: "",
  guests: 0,
  bed: "",
  size: "",
  pricePerNight: 0,
  currency: "",
  status: "",
  amenities: [],
};

function AddRoom({ onAdd }: Props) {
  const [form, setForm] = useState<Room>(emptyForm);

  const updateField = (key: keyof Room, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <main>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 grid-cols-1">
        <InputComponet
          label="Room Type"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
        />
        <InputComponet
          label="Price Per Night (NGN)"
          value={form.pricePerNight}
          onChange={(e) => updateField("pricePerNight", e.target.value)}
        />
        <InputComponet
          label="Room Number"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
        />
        <InputComponet
          label="Floor"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
        />
        <InputComponet
          label="Beds"
          value={form.bed}
          onChange={(e) => updateField("bed", e.target.value)}
        />
        <InputComponet
          label="Size"
          value={form.size}
          onChange={(e) => updateField("size", e.target.value)}
        />
      </div>

      <Button
        className="w-full mt-3"
        onClick={() => {
          onAdd(form);
          setForm(emptyForm);
        }}
      >
        <Plus /> Add Room
      </Button>
    </main>
  );
}

export default AddRoom;
