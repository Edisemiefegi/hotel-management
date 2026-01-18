import InputComponet from "../base/InputComponet";
import Upload from "../base/Upload";
import SelectComponent from "../base/SelectComponent";
import { useFormContext } from "react-hook-form";
import { useEffect, useMemo, type Key } from "react";
import { Button } from "../ui/button";
import AmenitiesField from "./AmenitiesField";

function DetailTab() {
  const { register, watch, setValue, formState } = useFormContext();
  const options = [
    {
      value: "Operational",
      label: "Operational",
    },
    {
      value: "Renovation",
      label: "Renovation",
    },
    {
      value: "Closed",
      label: "Closed",
    },
  ];


  const formFields = [
    {
      type: "input",
      name: "name",
      label: "Hotel Name",
      placeholder: "E.g Sunrise Hotel",
    },
    {
      type: "input",
      name: "location",
      label: "Location",
      placeholder: "E.g Ikeja, Lagos",
    },
    {
      type: "input",
      name: "whatsapp",
      label: "Phone Number",
      placeholder: "E.g 08171212121",
    },
    {
      type: "textarea",
      name: "description",
      label: "Description",
      placeholder: "Enter hotel description",
    },
    {
      type: "select",
      name: "status",
      label: "Status",
      placeholder: "Select hotel status",
    },
     
    {
      type: "upload",
      name: "images",
      label: "Featured Images",
    },
  ];

  const images = watch("images") ?? [];

  const getImageUrl = (image: File | string) => {
    if (typeof image === "string") return image;
    return URL.createObjectURL(image);
  };

  const previews = useMemo(
    () =>
      images.map((img: File | string) => ({
        img,
        url: getImageUrl(img),
      })),
    [images]
  );

  useEffect(() => {
    return () => {
      previews.forEach(({ img, url }: any) => {
        if (img instanceof File) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [previews]);

  const handleRemove = (imageToRemove: File | string) => {
    setValue(
      "images",
      images.filter((img: string | File) => img !== imageToRemove),
      { shouldValidate: true }
    );
  };

  return (
    <div className="space-y-3">
      {formFields.map((field, index) => {
        const error = formState.errors[field.name];
        return (
          <div key={index}>
            {/* input */}
        
              {field.type == "input" && (
              <InputComponet
                placeholder={field.placeholder}
                label={field.label}
                {...register(field.name)}
              />
            )}

            {/* textarea */}
            {field.type == "textarea" && (
              <span>
                <p className="text-sm  font-medium">{field.label}</p>
                <textarea
                  placeholder={field.placeholder}
                  className="w-full h-20 p-2 border rounded-md"
                  {...register(field.name)}
                />
              </span>
            )}

            {/* select */}
            {field.type == "select" && (
              <SelectComponent
                value={watch(field.name)}
                onChange={(value) =>
                  setValue(field.name, value, { shouldValidate: true })
                }
                label={field.label}
                placeholder={field.placeholder}
                options={options}
              />
            )}

            {/* image */}
            {field.type == "upload" && (
              <div className="w-full space-y-3">
                <label className="text-sm text-gray-700">{field.label}</label>
                <Upload
                  multiple
                  onChange={(files) =>
                    setValue(field.name, [...images, ...files], {
                      shouldValidate: true,
                    })
                  }
                />

                <div className="grid  grid-cols-4 sm:grid-cols-6  gap-3 w-full">
                  {previews.map(
                    ({ img, url }: any, i: Key | null | undefined) => (
                      <div key={i} className="relative">
                        <img
                          src={url}
                          className="h-15 w-15 object-cover rounded-md"
                        />
                        <Button
                          size={"icon-sm"}
                          onClick={() => handleRemove(img)}
                          className="absolute top-0 right-0 bg-red-500  text-white rounded-full "
                        >
                          ×
                        </Button>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* error */}
            {error && (
              <p className="text-red-500 text-sm">{error.message as string}</p>
            )}
          </div>
        );
      })}
<AmenitiesField />

    
    </div>
  );
}

export default DetailTab;
