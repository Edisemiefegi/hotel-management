/* eslint-disable @typescript-eslint/no-explicit-any */
import Tab from "../base/Tab";
import RoomsTab from "./RoomsTab";
import AddonTab from "./AddonTab";
import DetailTab from "./DetailTab";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ROOMS } from "@/constants/hotels";
import { hotelSchema, type HotelFormType } from "@/schemas/hotel.schema";
import { Form } from "../ui/form";
import { forwardRef, useImperativeHandle } from "react";
import { useAdmin } from "@/hooks/useAdmin";

interface Props {
  mode: "add" | "edit";
  initialData?: HotelFormType;
  onSuccess?: () => void;
}

export interface HotelFormRef {
  submit: () => Promise<void>;
}

const HotelForm = forwardRef<HotelFormRef, Props>(({ mode, initialData, onSuccess }, ref) => {
  const { addHotel } = useAdmin();
  const form = useForm<HotelFormType>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(hotelSchema) as any,
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


  const handleSubmit = async (data: HotelFormType) => {
    try {
      if (mode === "add") {
        await addHotel(data);
      } else {
        // TODO: Implement updateHotel in useAdmin hook
        console.log("Edit mode - updateHotel not implemented yet", data);
      }
      onSuccess?.();
    } catch (error) {
      console.error("Failed to submit hotel:", error);
    }
  };

  useImperativeHandle(ref, () => ({
    submit: async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await form.handleSubmit(handleSubmit as any)();
    },

  }), [form]);

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
    <FormProvider {...form}>
      <Form {...form}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <form onSubmit={form.handleSubmit(handleSubmit as any)}>
          <Tab tabs={tabs} />
        </form>
      </Form>
    </FormProvider>
  );
});

HotelForm.displayName = "HotelForm";

export default HotelForm;
