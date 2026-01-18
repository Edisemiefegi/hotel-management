import { cn } from "@/lib/utils";
import { CloudUpload } from "lucide-react";
import React, { useRef } from "react";
import FormErrorHint from "./form/FormErrorHint";

export interface UploadType {
  onChange: (file: File[]) => void;
  accept?: string;
  multiple?: boolean;
  label?: string;
  helperText?: string;
  className?: string;
  disabled?: boolean;
  error?: string;
  hint?: string;
}

function Upload({
  onChange,
  accept = "image/*",
  multiple = false,
  label = "Click to upload or drag and drop",
  helperText = "SVG, PNG, JPG or GIF (max. 2MB)",
  className = "",
  disabled = false,
  error,
  hint,
}: UploadType) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = Array.from(e.target.files || []);
    onChange(file);
  };

  return (
    <div className="w-full space-y-1">
      <div
        onClick={handleClick}
        className={cn(
          className,
          disabled && "cursor-not-allowed opacity-50",
          "w-full cursor-pointer border-dotted h-full border-2 rounded-md flex flex-col items-center p-4 justify-center"
        )}
      >
        <CloudUpload />
        <input
          disabled={disabled}
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
      <FormErrorHint error={error} hint={hint} />
    </div>
  );
}

export default Upload;
