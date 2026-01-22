import Header from "@/components/base/Header";
import SearchComponent from "@/components/base/SearchComponent";
import SelectComponent from "@/components/base/SelectComponent";
import BookingsTable from "@/components/bookings/BookingsTable";
import Info from "@/components/bookings/Info";
import HeaderPortal from "@/components/portals/HeaderPortal";
import { Button } from "@/components/ui/button";
import type { MenuItem } from "@/types";
import { Download } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Bookings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const isOpen = !!searchParams.get("booking_id");
  const onClose = () => navigate(-1);

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

  const menu = (booking: any): MenuItem[] => [
    {
      label: "Edit",
      onClick: () => {
        setSearchParams((prev) => {
          prev.set("booking_id", booking?.bookingId);
          prev.set("edit", "true");
          return prev;
        });
      },
    },
    {
      label: "View",
      onClick: () => {
        setSearchParams((prev) => {
          prev.set("booking_id", booking?.bookingId);
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
    <div className="space-y-6">
      <HeaderPortal>
        <Header
          action
          heading="Booking Management"
          subheading="Review and manage guest reservations across all properties."
        >
          <Button>
            <Download /> Export Report
          </Button>
        </Header>
      </HeaderPortal>
      <Info />

      <div className="flex justify-between mt-6 w-full ">
        <SearchComponent />
        <div className="flex gap-4">
          <SelectComponent options={sort.hotel} placeholder="All Hotel" />
          <SelectComponent options={sort.status} placeholder="All Status" />
        </div>
      </div>

      <BookingsTable menu={menu} />
    </div>
  );
}

export default Bookings;
