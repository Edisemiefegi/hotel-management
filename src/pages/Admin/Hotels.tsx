import Header from "@/components/base/Header";
import HotelCard from "@/components/hotel/HotelCard";
import SearchComponent from "@/components/base/SearchComponent";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Plus, Rows3 } from "lucide-react";
import { usePersistentState } from "@/hooks/usePersistentState";
import HotelTable from "@/components/hotel/HotelTable";
import HeaderPortal from "@/components/portals/HeaderPortal";
import { useSearchParams, useNavigate } from "react-router-dom";
import type { Hotel, MenuItem } from "@/types";
import ManageHotel from "@/components/hotel/MangeHotel";
import Modal from "@/components/base/Modal";
import AddHotel from "@/components/hotel/AddHotel";
import { useAdmin } from "@/hooks/useAdmin";
import { useEffect } from "react";
import { useAdminStore } from "@/store/adminStore";

export default function Hotels() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [modal, setModal] = usePersistentState("modal", false);
  const [isGrid, setIsGrid] = usePersistentState("hotelsView", false);
  const { getHotels } = useAdmin();
  const { hotels } = useAdminStore();

  const isOpen = !!searchParams.get("hotel_id");
  const onClose = () => navigate(-1);

  useEffect(() => {
    const getHotelsList = async () => {
      await getHotels();
    };

    getHotelsList();

    console.log(hotels, 'hotels');
    
  }, []);

  const menu = (hotel: Hotel): MenuItem[] => [
    {
      label: "Edit",
      onClick: () => {
        setSearchParams((prev) => {
          prev.set("hotel_id", hotel?.id);
          prev.set("edit", "true");
          return prev;
        });
      },
    },
    {
      label: "View",
      onClick: () => {
        setSearchParams((prev) => {
          prev.set("hotel_id", hotel?.id);
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

  return (
    <main className="space-y-6">
      <HeaderPortal>
        <Header
          action
          heading="Hotels"
          subheading="Manage your hotel properties"
        >
          <Button onClick={() => setModal(true)}>
            <Plus /> Add Hotel
          </Button>
        </Header>
      </HeaderPortal>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <AddHotel onClose={() => setModal(false)} />
        </Modal>
      )}

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
          {hotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} menu={menu(hotel)}></HotelCard>
          ))}
        </section>
      ) : (
        <HotelTable menu={menu} />
      )}
      <ManageHotel open={isOpen} onClose={onClose} />
    </main>
  );
}
