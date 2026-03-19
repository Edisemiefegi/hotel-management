import Header from "@/components/base/Header";
import HotelCard from "@/components/hotel/HotelCard";
import SearchComponent from "@/components/base/SearchComponent";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Plus, Rows3 } from "lucide-react";
import { usePersistentState } from "@/hooks/usePersistentState";
import HotelTable from "@/components/hotel/HotelTable";
import HeaderPortal from "@/components/portals/HeaderPortal";
import { useSearchParams, useNavigate } from "react-router-dom";
import type { MenuItem } from "@/types";
import type { Hotel } from "@/types/hotel";
import ManageHotel from "@/components/hotel/MangeHotel";
import AddHotel from "@/components/hotel/AddHotel";
import { useAdmin } from "@/hooks/useAdmin";
import { useEffect, useState } from "react";
import Dialog from "@/components/base/Dialog";

export default function Hotels() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [modal, setModal] = usePersistentState("modal", false);
  const [isGrid, setIsGrid] = usePersistentState("hotelsView", false);
  const { fetchAllData, deleteHotel } = useAdmin();
  const [search, setSearch] = useState("");

  const [hotelsData, setHotelsData] = useState([]);
  const [showdialog, setShowDialog] = useState(false);
  const [selectedHotelId, setSelectedHotelId] = useState<string | null>(null);

  const isOpen = !!searchParams.get("hotel_id");
  const onClose = () => navigate(-1);

  useEffect(() => {
    const getHotelsList = async () => {
      const data = await fetchAllData();
      setHotelsData(data);
    };
    getHotelsList();
  }, []);

  const filteredHotels = hotelsData.filter((hotel: any) =>
    [hotel.name, hotel.location]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

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
        setSelectedHotelId(hotel.id);
        setShowDialog(true);
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
      {modal && <AddHotel onClose={() => setModal(false)} />}

      <div className="flex justify-between ">
        <SearchComponent
          value={search}
          result="hotels"
          onChange={setSearch}
          resultsCount={filteredHotels.length}
          placeholder="Search by name or location..."
        />

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
          {filteredHotels.map((hotel: any) => (
            <HotelCard
              key={hotel?.id}
              hotel={hotel}
              menu={menu(hotel)}
            ></HotelCard>
          ))}
        </section>
      ) : (
        <HotelTable menu={menu} />
      )}

      <Dialog
        open={showdialog}
        onOpenChange={setShowDialog}
        title="Delete Hotel?"
        description="This will permanently delete this hotel."
        onConfirm={() => {
          if (selectedHotelId) {
            deleteHotel(selectedHotelId);
          }
        }}
      />
      <ManageHotel open={isOpen} onClose={onClose} />
    </main>
  );
}
