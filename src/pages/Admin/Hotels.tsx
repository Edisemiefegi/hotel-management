import Header from "@/components/base/Header";
import HotelCard from "@/components/hotel/HotelCard";
import SearchComponent from "@/components/base/SearchComponent";
import Table from "@/components/base/Table";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Plus, Rows3 } from "lucide-react";
import {usePersistentState} from "@/hooks/usePersistentState"

export default function Hotels() {
  const [isGrid, setIsGrid] = usePersistentState("hotelsView", false)

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
    },
  ];

  return (
    <main className="space-y-6 pb-30">
      <Header
        action={true}
        heading="Hotels"
        subheading="Manage your hotel propertie"
      >
        <Button>
          <Plus /> Add Hotel
        </Button>
      </Header>

      <div className="flex justify-between ">
        <SearchComponent />

        <Button
          className=""
          variant={"ghost"}
          onClick={() => setIsGrid((prev) => !prev)}
        >
          {isGrid ? <Rows3 /> : <LayoutGrid />}
        </Button>
      </div>

      {isGrid ? (
        <section className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4">
          {hotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel}></HotelCard>
          ))}
        </section>
      ) : (
        <section>
          <Table></Table>
        </section>
      )}
    </main>
  );
}


