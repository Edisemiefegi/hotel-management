import { CloudUpload } from "lucide-react";
import InputComponet from "../base/InputComponet";

function DetailTab() {
  return (
    <div className="space-y-3">
      <InputComponet label="Hotel Name" />
      <div className="flex gap-4">
        <InputComponet label="Location" />
        <InputComponet label="WhatsApp Number" />
      </div>
      <InputComponet label="Description" />
      <div>
        <label htmlFor="" className="text-sm text-gray-700">
          Featured Image
        </label>
        <div className="w-full border-dotted  h-40 border-2 rounded-md flex flex-col items-center justify-center">
          <CloudUpload />
          <p>Click to upload or drag and drop </p>
          <p className="text-xs text-gray">SVG, PNG, JPG OR GIF(max.2MB)</p>
        </div>
      </div>

      <InputComponet label="Amenities(comma separated)" />
    </div>
  );
}

export default DetailTab;
