import Tab from "../base/Tab";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { hotelSchema, type HotelFormType } from "@/schemas/hotel.schema";
import { Form } from "../ui/form";
import { forwardRef, useEffect, useImperativeHandle } from "react";
import { useAdmin } from "@/hooks/useAdmin";
import DetailTab from "./Tabs/DetailTab";
import RoomsTab from "./Tabs/RoomsTab";
import AddonTab from "./Tabs/AddonTab";

interface Props {
  mode: "add" | "edit";
  initialData?: HotelFormType;
  onSuccess?: () => void;
}

export interface HotelFormRef {
  submit: () => Promise<void>;
}

const HotelForm = forwardRef<HotelFormRef, Props>(
  ({ mode, initialData, onSuccess }, ref) => {
    const { addHotel, addRoom, handleAddon, updateHotel } = useAdmin();

    const form = useForm<HotelFormType>({
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
              amenities: [],
            },
    });

    useEffect(() => {
  if (mode === "edit" && initialData) {
    console.log(initialData, 'in hotel form');
    
    form.reset(initialData);
  }
}, [mode, initialData, form]);

    const handleSubmit = async (data: HotelFormType) => {
      try {
        if (mode === "add") {
          const createdHotel = await addHotel(data);
          const hotelId = createdHotel.$id;
          for (const room of data.rooms ?? []) {
            await addRoom(room, hotelId);
          }
          for (const addon of data.addons ?? []) {
            await handleAddon(addon, hotelId);
          }
        } else {
          // updateHotel()
          // TODO: Implement updateHotel in useAdmin hook
          console.log("Edit mode - updateHotel not implemented yet", data);
        }
        onSuccess?.();
      } catch (error) {
        console.error("Failed to submit hotel:", error);
      }
    };

    useImperativeHandle(
      ref,
      () => ({
        submit: async () => {
          await form.handleSubmit(handleSubmit as any)();
        },
      }),
      [form],
    );

    const tabs = [
      {
        value: "details",
        label: "Details",
        content: <DetailTab />,
      },
      {
        value: "rooms",
        label: "Rooms",
        content: <RoomsTab />,
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
          <form onSubmit={form.handleSubmit(handleSubmit as any)}>
            <Tab tabs={tabs} />
          </form>
        </Form>
      </FormProvider>
    );
  },
);

HotelForm.displayName = "HotelForm";

export default HotelForm;
