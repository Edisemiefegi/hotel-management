import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { HotelFormType } from "@/schemas/hotel.schema";
import { X } from "lucide-react";
import { Button } from "../ui/button";

function AmenitiesField() {
  const { control } = useFormContext<HotelFormType>();
  const [input, setInput] = React.useState("");

  return (
    <Controller
      name="amenities"
      control={control}
      defaultValue={[]}
      render={({ field, fieldState }) => {
        const addAmenity = () => {
          const value = input.trim();
          if (!value) return;

          if (!field.value.includes(value)) {
            field.onChange([...field.value, value]);
          }
          setInput("");
        };

        return (
          <div className="space-y-1">
            <label className="text-sm font-medium">Amenities</label>

            {/* input container */}
            <div className="flex flex-wrap items-center gap-2 rounded-md border px-2 py-2 focus-within:ring-2 focus-within:ring-ring">
              {field.value.map((amenity) => (
                <span
                  key={amenity}
                  className="flex items-center gap-1 rounded-sm bg-muted px-2  text-sm"
                >
                  {amenity}
                  <Button

                    type="button"
                    onClick={() =>
                      field.onChange(
                        field.value.filter((a) => a !== amenity)
                      )
                    }
                    className="!p-0"
                   variant={'ghost'}
                  >
                    <X size={12} />
                  </Button>
                </span>
              ))}

              <input
                className="flex-1 min-w-[120px] bg-transparent outline-none text-sm"
                placeholder="Pool, Wifi, Gym"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === ",") {
                    e.preventDefault();
                    addAmenity();
                  }

                  if (
                    e.key === "Backspace" &&
                    input === "" &&
                    field.value.length
                  ) {
                    field.onChange(field.value.slice(0, -1));
                  }
                }}
              />
            </div>

            {fieldState.error && (
              <p className="text-sm text-red-500">
                {fieldState.error.message}
              </p>
            )}
          </div>
        );
      }}
    />
  );
}

export default AmenitiesField;
