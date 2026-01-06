import Table from "../base/Table";
import { cn } from "@/lib/utils";
import DropDown from "@/components/base/DropDown";
import type { MenuItem } from "@/types";
import { Dot } from "lucide-react";
import { ROOMS } from "@/constants/hotels";
import { useState } from "react";
import Pagination from "../base/Pagination";

interface Props {
  menu: (hotel: any) => MenuItem[];
}

function RoomsTable({ menu }: Props) {
  const rooms = [...ROOMS];

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedRooms = rooms.slice(startIndex, endIndex);

  const headers = [
    {
      title: "Room NO.",
      field: "roomNo",
      render: (row: any) => (
        <div className="flex gap-3">
          <img
            src="/hotels/hotel1.webp"
            alt=""
            className="w-12 h-12 rounded-lg"
          />
          <p className="font-medium">{row.id} </p>
        </div>
      ),
    },
    {
      title: "Type",
      field: "type",
      render: (row: any) => <span className="text-gray"> {row.name}</span>,
    },

    {
      title: "Floor",
      field: "floor",
      render: (row: any) => <span className="text-gray"> {row.id}</span>,
    },

    {
      title: "Price/Night",
      field: "price",
      render: (row: any) => (
        <span className="text-gray font-medium"> {row.pricePerNight}</span>
      ),
    },
    {
      title: "Status",
      field: "status",
      render: (row: any) => (
        <span
          className={cn(
            row.status == "Available" &&
              "bg-green-50 text-green-500 border-green-500",
            row.status == "Maintenance" &&
              "bg-yellow-50 text-yellow-500 border-yellow-500",
            row.status == "Booked" &&
              "bg-blue-50 text-blue-600 border-blue-500",
            "py-1 px-1.5 w-fit rounded-full text-xs flex items-center  border"
          )}
        >
          <Dot size={15} /> {row.status}
        </span>
      ),
    },
    {
      title: "Action",
      field: "action",
      render: (row: any) => <DropDown menu={menu(row)} />,
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-md">
      <Table
        uniqueId="id"
        headers={headers}
        data={paginatedRooms}
        emptySlot={<p className="p-4 text-center">No Room found</p>}
      ></Table>
      <div className="p-2">
        <Pagination
          totalItems={rooms.length}
          currentPage={currentPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          onPageChange={setCurrentPage}
          onPageSizeChange={(size) => {
            setPageSize(size);
            setCurrentPage(1);
          }}
        />
      </div>
    </div>
  );
}

export default RoomsTable;
