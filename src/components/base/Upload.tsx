import { cn } from "@/lib/utils";
import { CloudUpload } from "lucide-react";
import React, { useRef } from "react";

interface Props {
  onChange: (file: File[]) => void;
  accept?: string;
  multiple?: boolean;
  label?: string;
  helperText?: string;
  className?: string;
}

function Upload({
  onChange,
  accept = "image/*",
  multiple = false,
  label = "Click to upload or drag and drop",
  helperText = "SVG, PNG, JPG or GIF (max. 2MB)",
  className = "",
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = Array.from(e.target.files || []);
    onChange(file);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        className,
        "w-full cursor-pointer border-dotted h-full border-2 rounded-md flex flex-col items-center p-4 justify-center"
      )}
    >
      <CloudUpload />
      <input
        type="file"
        ref={inputRef}
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        hidden
      />
      <p className="text-sm">{label}</p>
      <p className="text-xs text-gray-500">{helperText}</p>{" "}
    </div>
  );
}

export default Upload;
