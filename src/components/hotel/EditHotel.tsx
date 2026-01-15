import { Button } from "../ui/button";
import HotelForm from "./HotelForm";

function EditHotel() {
  const hotelData = {
    name: "Eko Hotel",
    location: "Lagos",
    whatsapp: "08012345678",
    description: "Luxury hotel in Lagos",
    amenities: "Pool,Gym,WiFi",
    rooms: [
      {
        id: "rm_001",
        name: "Park View Suite",
        guests: 3,
        bed: "1 King + Sofa",
        size: "55 m²",
        pricePerNight: 680000,
        currency: "NGN",
        status: "Available",
        amenities: ["Park View", "Free WiFi", "Air Conditioning"],
      },
      {
        id: "rm_002",
        name: "Deluxe City Room",
        guests: 2,
        bed: "1 Queen",
        size: "40 m²",
        pricePerNight: 420000,
        currency: "NGN",
        status: "Available",
        amenities: ["City View", "Workspace", "Smart TV"],
      },
    ],
    addons: [],
  };

  return (
    <div className="w-full relative  space-y-4">
      <HotelForm isEdit data={hotelData} />

      <div className="justify-end flex space-x-3">
        <Button variant={"outline"}>Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}

export default EditHotel;
