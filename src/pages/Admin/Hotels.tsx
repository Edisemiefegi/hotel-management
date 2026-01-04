import Header from "@/components/base/Header";
import HotelCard from "@/components/hotel/HotelCard";
import SearchComponent from "@/components/base/SearchComponent";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Plus, Rows3 } from "lucide-react";
import { usePersistentState } from "@/hooks/usePersistentState";
import HotelTable from "@/components/hotel/HotelTable";
import HeaderPortal from "@/components/portals/HeaderPortal";
import { HOTELS } from "@/constants/hotels";
import { useState } from "react";
import SidePanel from "@/components/layout/SidePanel";
import EditHotel from "@/components/hotel/EditHotel";
import ViewHotel from "@/components/hotel/ViewHotel";
import type { Hotel } from "@/types";

export default function Hotels() {
  const [isGrid, setIsGrid] = usePersistentState("hotelsView", false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState("");
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  const menu = (hotel: any) => [
    {
      label: "Edit",
      onClick: () => {
        setSelectedHotel(hotel);
        setIsEdit("edit");
        setIsOpen(true);
      },
    },
    {
      label: "View",
      onClick: () => {
        setSelectedHotel(hotel);
        setIsEdit("view");
        setIsOpen(true);
      },
    },
    {
      label: "Delete",
      onClick: () => {
        console.log("delete");
      },
    },
  ];

  return (
    <main className="space-y-6">
      <HeaderPortal>
        <Header
          action
          heading="Hotels"
          subheading="Manage your hotel properties"
        >
          <Button>
            <Plus /> Add Hotel
          </Button>
        </Header>
      </HeaderPortal>

      <div className="flex justify-between ">
        <SearchComponent />

        <Button
          className="hover:text-primary"
          variant={"ghost"}
          onClick={() => setIsGrid((prev) => !prev)}
        >
          {isGrid ? <Rows3 /> : <LayoutGrid />}
        </Button>
      </div>

      {!isGrid ? (
        <section className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {[...HOTELS, ...HOTELS].map((hotel, index) => (
            <HotelCard key={index} hotel={hotel}></HotelCard>
          ))}
        </section>
      ) : (
        <HotelTable menu={menu} />
      )}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 backdrop-blur-xs h-full bg-black/10 z-20"
            onClick={() => setIsOpen(false)}
          />
          <SidePanel
            close={setIsOpen}
            title={isEdit === "edit" ? "Edit Hotel" : " Hotel Details"}
            description={isEdit === "edit" ? selectedHotel?.name : " "}
          >
            <SidePanel.Content>
              {isEdit == "edit" ? (
                <EditHotel />
              ) : (
                <ViewHotel hotel={selectedHotel} />
              )}
            </SidePanel.Content>
          </SidePanel>
        </>
      )}
    </main>
  );
}
