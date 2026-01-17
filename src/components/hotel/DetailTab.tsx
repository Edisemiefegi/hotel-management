import InputComponet from "../base/InputComponet";
import type { Hotel} from "../../types";
import Upload from "../base/Upload";
import { useEffect } from "react";
import { Button } from "../ui/button";
import SelectComponent from "../base/SelectComponent";

interface Props {
  form: Hotel;
  updateField: (key: keyof Hotel, value: any) => void;
}

function DetailTab({ form, updateField }: Props) {
const options = [
  {
  value: "operational",
  label: "Operational"
},
{
  value: "renovation",
  label: "Renovation"
},
{
  value: "closed",
  label: "Closed"
}
]

  const previews = form.images.map((file: any) => ({
    file,
    url: URL.createObjectURL(file),
  }));

  useEffect(() => {
    return () => {
      previews.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, [form.images]);

  const handleFiles = (newFiles: File[]) => {
    updateField("images", [...form.images, ...newFiles]);
  };

  const handleRemove = (fileToRemove: any) => {
    updateField(
      "images",
      form.images.filter((f) => f !== fileToRemove)
    );
  };

  return (
    <div className="space-y-3">
      <InputComponet
        placeholder="enter hotel name"
        label="Hotel Name"
        value={form.name}
        onChange={(e) => updateField("name", e.target.value)}
      />

      <div className="grid grid-cols-2 gap-4 ">
        <InputComponet
          placeholder="enter hotel location"
          label="Location"
          value={form.location}
          onChange={(e) => updateField("location", e.target.value)}
        />
        <InputComponet
          placeholder="enter hotel phone number"
          label="WhatsApp Number"
          value={form.whatsapp}
          onChange={(e) => updateField("whatsapp", e.target.value)}
        />
      </div>

      <span>
        <p className="text-sm font-medium">Description</p>
        <textarea
          placeholder="hotel description"
          className="w-full h-20 p-2 border rounded-md"
          value={form.description}
          onChange={(e) => updateField("description", e.target.value)}
        />
      </span>
      <span>
        <SelectComponent label="status" placeholder="status" options={options}/>
      </span>

      <div className="w-full space-y-3">
        <label className="text-sm text-gray-700">Featured Image</label>
        <Upload multiple onChange={handleFiles} />
        <div className="grid  grid-cols-4 sm:grid-cols-6  gap-3 w-full">
          {previews.map(({ file, url }, i) => (
            <div key={i} className="relative">
              <img src={url} className="h-15 w-15 object-cover rounded-md" />
              <Button
                size={"icon-sm"}
                onClick={() => handleRemove(file)}
                className="absolute top-0 right-0 bg-red-500  text-white rounded-full "
              >
                ×
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* <InputComponet
        placeholder="eg. pool, WiFi, etc"
        label="Amenities (comma separated)"
        value={form.amenities}
        onChange={(e) => updateField("amenities", e.target.value)}
      /> */}
    </div>
  );
}

export default DetailTab;
