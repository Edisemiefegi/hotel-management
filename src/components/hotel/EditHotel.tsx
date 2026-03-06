import HotelForm from "./HotelForm";
interface Props {
  hotel?: any;
}
function EditHotel({ hotel }: Props) {
  // console.log(hotel, "hotel passed ");

  return (
    <div className="w-full relative  space-y-4">
      <HotelForm mode="edit" initialData={hotel}/>
    </div>
  );
}

export default EditHotel;
