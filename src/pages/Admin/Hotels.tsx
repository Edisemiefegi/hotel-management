import Header from "@/components/base/Header";
import HotelCard from "@/components/hotel/HotelCard";
import SearchComponent from "@/components/base/SearchComponent";
import Table from "@/components/base/Table";
import { Button } from "@/components/ui/button";
import {
  Dot,
  Ellipsis,
  LayoutGrid,
  MapPin,
  Plus,
  Rows3,
  Star,
} from "lucide-react";
import { usePersistentState } from "@/hooks/usePersistentState";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

export default function Hotels() {
  const [isGrid, setIsGrid] = usePersistentState("hotelsView", false);

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

  const headers = [
    {
      title: "Hotel",
      field: "hotel",
      render: (row: any) => (
        <div className="flex gap-3">
          <img
            src="/hotels/hotel1.webp"
            alt=""
            className="w-12 h-12 rounded-lg"
          />
          <p className="font-medium flex flex-col">
            {row.name}{" "}
            <span className="text-xs text-gray font-normal">{row.id}</span>
          </p>
        </div>
      ),
    },
    {
      title: "Location",
      field: "location",
      render: (row: any) => (
        <div className="flex gap-1 items-center text-gray-700">
          <MapPin size={15} />
          <span> {row.location}</span>
        </div>
      ),
    },

    {
      title: "Status",
      field: "status",
      render: (row: any) => (
        <span
          className={cn(
            row.status == "Operational" &&
              "bg-green-50 text-green-500 border-green-500",
            row.status == "Renovation" &&
              "bg-yellow-50 text-yellow-500 border-yellow-500",
            row.status == "Closed" && "bg-red-50 text-red-600 border-red-500",
            "py-1 px-1.5 w-fit rounded-full text-xs flex items-center  border"
          )}
        >
          <Dot size={15} /> {row.status}
        </span>
      ),
    },

    {
      title: "Rating",
      field: "rating",
      render: (row: any) => (
        <div className="flex items-center gap-1">
          <Star stroke="0" fill="#FBBF23" size={15} />
          <p>
            {" "}
            {row.rating} <span className="text-gray text-sm">(12)</span>
          </p>
        </div>
      ),
    },
    {
      title: "Occupancy",
      field: "occupancy",
      render: () => (
        <div className="space-y-1">
          <Progress value={33} />
          <span className="text-xs"> 33% full</span>
        </div>
      ),
    },
    {
      title: "Action",
      field: "action",
      render: () => (
        <Button variant={"ghost"} className=" ">
          <Ellipsis />
        </Button>
      ),
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

      {!isGrid ? (
        <section className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {hotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel}></HotelCard>
          ))}
        </section>
      ) : (
        <section>
          <Table
            uniqueId="id"
            headers={headers}
            data={hotels}
            emptySlot={<p className="p-4 text-center">No Hotel found</p>}
          ></Table>
        </section>
      )}
    </main>
  );
}
