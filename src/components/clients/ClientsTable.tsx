import Table from "../base/Table";
import { cn } from "@/lib/utils";
import DropDown from "@/components/base/DropDown";
import type { MenuItem } from "@/types";
import { useState } from "react";
import Pagination from "../base/Pagination";
import { BOOKINGS } from "@/constants/hotels";

interface Props {
  menu: (client: any) => MenuItem[];
}

function ClientsTable({ menu }: Props) {
  const client = BOOKINGS;

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedClients = client.slice(startIndex, endIndex);

  const headers = [
    {
      title: "Guest",
      field: "guest",
      render: (row: any) => (
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full" />
          <p className="font-medium flex flex-col">
            {row.guestName}{" "}
            <span className="text-xs text-gray font-normal">
              {row.guestEmail}
            </span>
          </p>
        </div>
      ),
    },
    {
      title: "Contact Information",
      field: "contact",
      render: (row: any) => (
        <span className=" text-gray text-sm font-semibold">
          {row.bookingId}
        </span>
      ),
    },

    {
      title: "Total Bookings",
      field: "total-bookings",
      render: (row: any) => (
        <span className=" text-gray font-semibold">{row.bookingId}</span>
      ),
    },

    {
      title: "Last Stay",
      field: "last-stay",
      render: (row: any) => <p className="font-medium ">{row.duration} </p>,
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
        uniqueId="bookingId"
        headers={headers}
        data={paginatedClients}
        emptySlot={<p className="p-4 text-center">No clients yet</p>}
      ></Table>
      <div className="p-2">
        <Pagination
          totalItems={BOOKINGS.length}
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

export default ClientsTable;
