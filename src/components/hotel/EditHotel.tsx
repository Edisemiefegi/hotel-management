import Tab from "../base/Tab";
import RoomsTab from "./RoomsTab";
import AddonTab from "./AddonTab";
import DetailTab from "./DetailTab";
import { Button } from "../ui/button";

function EditHotel() {
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
    <div className="w-full relative  space-y-4">
 
        <Tab tabs={tabs} />


      <div className="justify-end flex space-x-3">
        <Button variant={"outline"}>Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}

export default EditHotel;
