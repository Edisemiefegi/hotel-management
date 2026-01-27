import Table from "../base/Table";
import { cn } from "@/lib/utils";
import DropDown from "@/components/base/DropDown";
import type { MenuItem } from "@/types";
import { useState } from "react";
import Pagination from "../base/Pagination";
import { BOOKINGS } from "@/constants/hotels";

interface Props {
  menu: (booking: any) => MenuItem[]  ;
}

function BookingsTable({ menu }: Props) {
  const bookings = BOOKINGS;


  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedBookings = bookings.slice(startIndex, endIndex);

  const headers = [
    {
      title: "Booking ID",
      field: "booking-id",
      render: (row: any) => (
        <span className=" text-gray font-semibold">{row.bookingId}</span>
      ),
    },
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
      title: "Hotel & Room",
      field: "hotel&room",
      render: (row: any) => (
        <p className="font-medium flex flex-col">
          {row.hotel}{" "}
          <span className="text-xs text-gray font-normal">{row.room}</span>
        </p>
      ),
    },

    {
      title: "Duration",
      field: "duration",
      render: (row: any) => (
        <p className="font-medium flex flex-col">
          {row.duration}{" "}
          <span className="text-xs text-gray font-normal">2 Nights</span>
        </p>
      ),
    },
    {
      title: "Amount",
      field: "amount",
      render: (row: any) => (
        <p className="font-medium flex flex-col">{row.amount}</p>
      ),
    },
    {
      title: "Status",
      field: "status",
      render: (row: any) => (
        <span
          className={cn(
            row.status == "Confirmed" &&
              "bg-green-50 text-green-500  ",
            row.status == "Pending" &&
              "bg-yellow-50 text-yellow-500",
            row.status == "Cancelled" &&
              "bg-red-50 text-red-600",
            "p-0.5 px-2  w-fit rounded-full text-xs flex items-center  ",
          )}
        >
          {row.status}
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
        uniqueId="bookingId"
        headers={headers}
        data={paginatedBookings}
        emptySlot={<p className="p-4 text-center">No Bookings yet</p>}
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

export default BookingsTable;
