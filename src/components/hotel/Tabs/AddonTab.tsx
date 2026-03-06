import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";
import AddonsForm from "@/components/addons/AddonsForm";
import AddonInfo from "@/components/addons/AddonInfo";

function AddonsTab() {
  const { watch, setValue } = useFormContext();

  const addons = watch("addons");

  const handleAddons = async () => {
    setValue("addons", [...addons, addons]);
  };

  return (
    <div className="space-y-3">
      <p className="font-medium">Add New Add-on</p>
      <AddonsForm />

      <Button type="button" onClick={handleAddons}>
        Add Add-on
      </Button>

      {/*  Added addons */}
      {addons && (
        <div className="space-y-2">
          {addons?.map((addon: any, index: string) => (
            <AddonInfo
              key={index}
              price={addon.price}
              addonName={addon.addonName}
              description={addon.description}
              icon={addon.icon}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AddonsTab;
