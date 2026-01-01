import Header from "@/components/base/Header";
import HotelCard from "@/components/hotel/HotelCard";
import SearchComponent from "@/components/base/SearchComponent";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Plus, Rows3 } from "lucide-react";
import { usePersistentState } from "@/hooks/usePersistentState";
import HotelTable from "@/components/hotel/HotelTable";
import HeaderPortal from "@/components/portals/HeaderPortal";

export default function Hotels() {
  const [isGrid, setIsGrid] = usePersistentState("hotelsView", false);
  const menu = [
    {
      label: "Edit",
    },
    {
      label: "View",
    },
    {
      label: "Delete",
    },
  ];

  const hotels = [
    {
      id: "htl_001",
      name: "Azure Bay Hotel",
      location: "Victoria Island, Lagos",
      rating: 4.6,
      reviews: 124,
      pricePerNight: 45000,
      currency: "NGN",
      image: "/hotels/hotel1.webp",
      amenities: ["Free WiFi", "Pool", "Gym", "Restaurant"],
      isFeatured: true,
      status: "Operational",
    },
    {
      id: "htl_002",
      name: "Palm View Resort",
      location: "Lekki, Lagos",
      rating: 4.3,
      reviews: 98,
      pricePerNight: 38000,
      currency: "NGN",
      image: "/hotels/hotel2.webp",
      amenities: ["Breakfast", "Free Parking", "Sea View"],
      isFeatured: false,
      status: "Closed",
    },
    {
      id: "htl_003",
      name: "The Grand Orchid",
      location: "GRA, Port Harcourt",
      rating: 4.8,
      reviews: 210,
      pricePerNight: 60000,
      currency: "NGN",
      image: "/hotels/hotel2.webp",
      amenities: ["Spa", "Pool", "Bar", "Airport Shuttle"],
      isFeatured: true,
      status: "Operational",
    },
    {
      id: "htl_004",
      name: "Sunset Haven Suites",
      location: "Ibadan, Oyo",
      rating: 4.1,
      reviews: 67,
      pricePerNight: 25000,
      currency: "NGN",
      image: "/hotels/hotel2.webp",
      amenities: ["Free WiFi", "Restaurant"],
      isFeatured: false,
      status: "Operational",
    },
    {
      id: "htl_005",
      name: "Emerald Crown Hotel",
      location: "Abuja, FCT",
      rating: 4.7,
      reviews: 156,
      pricePerNight: 52000,
      currency: "NGN",
      image: "/hotels/hotel1.webp",
      amenities: ["Gym", "Conference Hall", "Pool"],
      isFeatured: true,
      status: "Renovation",
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
          {[...hotels, ...hotels, ...hotels, ...hotels].map((hotel, index) => (
            <HotelCard key={index} hotel={hotel}></HotelCard>
          ))}
        </section>
      ) : (
        <HotelTable menu={menu} />
      )}
    </main>
  );
}
