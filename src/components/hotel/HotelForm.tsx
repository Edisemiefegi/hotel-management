/* eslint-disable @typescript-eslint/no-explicit-any */
import Tab from "../base/Tab";
import RoomsTab from "./RoomsTab";
import AddonTab from "./AddonTab";
import DetailTab from "./DetailTab";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ROOMS } from "@/constants/hotels";
import { hotelSchema, type HotelFormType } from "@/schemas/hotel.schema";
import { Button } from "../ui/button";
import { Form } from "../ui/form";

interface Props {
  mode: "add" | "edit";
  initialData?: HotelFormType;
  onSubmit: (data: HotelFormType) => Promise<void> | void;
  onCancel?: () => void;
}

function HotelForm({ mode, initialData, onSubmit, onCancel }: Props) {
  const methods = useForm<HotelFormType>({
    resolver: zodResolver(hotelSchema),
    defaultValues:
      mode === "edit" && initialData
        ? initialData
        : {
            name: "",
            location: "",
            whatsapp: "",
            description: "",
            status: "Operational",
            images: [],
            rooms: [],
            addons: [],
            amenities: []
          },
  });

  const { isSubmitting } = methods.formState;
  const tabs = [
    {
      value: "details",
      label: "Details",
      content: <DetailTab />,
    },
    {
      value: "rooms",
      label: "Rooms",
      content: <RoomsTab rooms={ROOMS} />,
    },
    {
      value: "add-ons",
      label: "Add-ons",
      content: <AddonTab />,
    },
  ];

  return (
    <FormProvider {...methods}>
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Tab tabs={tabs} />
          <div className="flex justify-end gap-4">
            <Button variant={"outline"} onClick={onCancel}>
              Cancel
            </Button>
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? (
                "loading..."
              ) : (
                <div>{mode === "add" ? "Add Hotel" : "Edit Hotel"}</div>
              )}{" "}
            </Button>
          </div>
        </form>
      </Form>
    </FormProvider>
  );
}

export default HotelForm;
