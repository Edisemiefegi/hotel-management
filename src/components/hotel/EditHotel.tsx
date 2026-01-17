import { Button } from "../ui/button";
import HotelForm from "./HotelForm";
interface Props {
  hotel?: any;
}
function EditHotel({ hotel }: Props) {
  
  return (
    <div className="w-full relative  space-y-4">
      <HotelForm isEdit data={hotel} />

      <div className="justify-end flex space-x-3">
        <Button variant={"outline"}>Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}

export default EditHotel;
