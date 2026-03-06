import { cn } from "@/lib/utils";
import { CloudUpload, X } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import FormErrorHint from "./form/FormErrorHint";
import { Button } from "../ui/button";

export interface UploadType {
  value?: File[];
  onChange: (files: File[]) => void;
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
  value = [],
  onChange,
  accept = "image/*",
  multiple = false,
  label = "Click to upload ",
  helperText = "SVG, PNG, JPG or GIF (max. 2MB)",
  className = "",
  disabled = false,
  error,
  hint,
}: UploadType) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<string[]>([]);

  // Generate preview URLs whenever value changes
  useEffect(() => {
    const urls = value.map((item) => {
      if (item instanceof File) {
        return URL.createObjectURL(item);
      }
      return item; // already a URL string
    });
    setPreviews(urls);

    return () => {
      urls.forEach((url, index) => {
        if (value[index] instanceof File) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [value]);

  const handleClick = () => {
    if (!disabled) inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newFiles = multiple ? [...value, ...files] : files;
    onChange(newFiles);
  };

  const removeFile = (index: number) => {
    const updated = value.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <div className="w-full space-y-3">
      <div
        onClick={handleClick}
        className={cn(
          className,
          disabled && "cursor-not-allowed opacity-50",
          "w-full cursor-pointer border-dotted border-2 rounded-md flex flex-col items-center p-4 justify-center",
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
        <p className="text-xs text-gray-500">{helperText}</p>
      </div>

      {/* Preview Section */}
      {previews.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {previews.map((src, index) => (
            <div key={index} className="relative">
              <img src={src} className="w-full h-24 object-cover rounded-md" />
              <Button
                size={"icon-sm"}
                type="button"
                onClick={() => removeFile(index)}
                className="absolute top-1 right-1 bg-black/60 text-white rounded-full "
              >
                <X size={14} />
              </Button>
            </div>
          ))}
        </div>
      )}

      <FormErrorHint error={error} hint={hint} />
    </div>
  );
}

export default Upload;
