import Header from "@/components/base/Header";
import SearchComponent from "@/components/base/SearchComponent";
import ManageBooking from "@/components/bookings/ManageBooking";
import ClientsTable from "@/components/clients/ClientsTable";
import HeaderPortal from "@/components/portals/HeaderPortal";
import { Button } from "@/components/ui/button";
import type { MenuItem } from "@/types";
import { Download } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Clients() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const isOpen = !!searchParams.get("booking_id");
  const onClose = () => navigate(-1);

 

  const menu = (client: any): MenuItem[] => [
    {
      label: "Message",
      onClick: () => {
        console.log("messagee");
      },
    },
    {
      label: "View",
      onClick: () => {
        setSearchParams((prev) => {
          prev.set("client_id", client?.id);
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
        <Header action heading="Manage Clients">
          <Button>
            <Download /> Download File
          </Button>
        </Header>
      </HeaderPortal>
      <ManageBooking open={isOpen} onClose={onClose} />

      <div className=" w-full md:w-1/2 ">
        <SearchComponent />
      </div>

      <ClientsTable menu={menu} />
    </div>
  );
}

export default Clients;
