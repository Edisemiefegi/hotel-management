import Header from "@/components/base/Header";
import SearchComponent from "@/components/base/SearchComponent";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Plus, Rows3 } from "lucide-react";
import { usePersistentState } from "@/hooks/usePersistentState";
import HeaderPortal from "@/components/portals/HeaderPortal";
import { ROOMS } from "@/constants/hotels";
import type { MenuItem, Room } from "@/types";
import RoomsTable from "@/components/rooms/RoomsTable";
import { useSearchParams, useNavigate } from "react-router-dom";
import ManageRoom from "@/components/rooms/ManageRoom";
import RoomCard from "@/components/rooms/RoomCard";
import SelectComponent from "@/components/base/SelectComponent";

export default function Rooms() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [isGrid, setIsGrid] = usePersistentState("roomsView", false);

  const isOpen = !!searchParams.get("room_id");
  const onClose = () => navigate(-1);

  const menu = (room: Room): MenuItem[] => [
    {
      label: "Edit",
      onClick: () => {
        setSearchParams((prev) => {
          prev.set("room_id", room?.id);
          prev.set("edit", "true");
          return prev;
        });
      },
    },
    {
      label: "View",
      onClick: () => {
        setSearchParams((prev) => {
          prev.set("room_id", room?.id);
          return prev;
        });
      },
    },
    {
      label: "Delete",
      onClick: () => {
        console.log("delete");
      },
    },
  ];

  const sort = {
    hotel: [
      { label: "Hotel1", value: "hotel1" },
      { label: "Hotel2", value: "hotel2" },
    ],
    status: [
      { label: "Available", value: "available" },
      { label: "Booked", value: "booked" },
      { label: "Mantainance", value: "maint" },
    ],
  };

  return (
    <main className="space-y-6">
      <HeaderPortal>
        <Header
          action
          heading="Rooms"
          subheading="Manage room types, pricing, and availability status"
        >
          <Button>
            <Plus /> Add New Room
          </Button>
        </Header>
      </HeaderPortal>

      <div className="flex justify-between ">
        <div className="sm:flex-row flex-col gap-2 flex justify-between w-full">
          <SearchComponent />
          <div className="flex gap-4 ">
            <SelectComponent options={sort.hotel} placeholder="All Hotel" />
            <SelectComponent options={sort.status} placeholder="All Status" />
          </div>
        </div>

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
          {[...ROOMS, ...ROOMS].map((room, index) => (
            <RoomCard key={index} room={room} menu={menu(room)}></RoomCard>
          ))}
        </section>
      ) : (
        <RoomsTable menu={menu} />
      )}

      <ManageRoom open={isOpen} onClose={onClose} />
    </main>
  );
}
