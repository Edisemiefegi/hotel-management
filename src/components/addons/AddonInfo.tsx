import Card from "../base/Card";
import { hotelAmenities } from "../hotel/AmenitySelector";
import { Checkbox } from "../ui/checkbox";

interface Props {
  icon: string;
  addonName: string;
  price: number;
  description: string;
}
function AddonInfo({ icon, addonName, price, description }: Props) {
  const iconComponent = hotelAmenities.find((a) => a.value === icon);
  const Icon = iconComponent?.icon;

  return (
    <Card className="border-secondary flex  justify-between">
      <div className="space-x-2 inline-flex">
        <span className="p-2 rounded-lg bg-secondary w-fit h-fit text-gray-600">
          {Icon && <Icon size={15} />}
        </span>

        <div>
          <p className="font-medium text-sm"> {addonName} </p>
          <p className="text-xs text-gray">{description}</p>
          <p className="font-semibold text-primary">{price}</p>
        </div>
      </div>
      <Checkbox />
    </Card>
  );
}

export default AddonInfo;
