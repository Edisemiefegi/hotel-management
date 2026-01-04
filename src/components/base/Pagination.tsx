import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, Dot } from "lucide-react";
import SelectComponent from "./SelectComponent";
import {  useMemo } from "react";

interface Props {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  setPageSize: (val: number) => void;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  resources?:string
}

function Pagination({
  totalItems,
  currentPage,
  pageSize,
  setPageSize,
  onPageChange,
  resources = 'items'
}: Props) {
  const totalPages = Math.ceil(totalItems / pageSize);

  const Options = [
    {
      label: "5",
      value: "5",
    },
    {
      label: "10",
      value: "10",
    },
    {
      label: "15",
      value: "15",
    },
  ];

  const getPageNumbers = useMemo(
    () => {
    const pages: (number | string)[] = [];


    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
     
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if(i !== 1 && i !== totalPages) pages.push(i)
      };
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  
  }, [currentPage]);

  return (
    <div className="flex flex-col gap-2 sm:flex-row items-center justify-between text-sm">
      {/* sort */}
     <div className="flex items-center justify-between w-full sm:w-7/12  ">
       <div className="flex items-center gap-2">
        <SelectComponent
          placeholder="Items per page"
          value={String(pageSize)}
          onChange={(value) => setPageSize(Number(value))}
          options={Options}
        />

        <p className="text-gray-700  hidden lg:flex  gap-1 items-center">
          page <span className="font-semibold"> {currentPage} </span> of
          <span className="font-semibold"> {totalPages} </span> <Dot className="-mx-1" /> {totalItems}{" "}
          {resources}
        </p>
      </div>

      {/* page numbers */}
      <div className="flex items-center gap-0.5">
        {getPageNumbers?.map((page, index) =>
          page === "..." ? (
            <span key={index + page} className="px-1 text-gray">
              ...
            </span>
          ) : (
            <Button
              key={page}
              size={"sm"}
              variant={page === currentPage ? "secondary" : "ghost"}
              onClick={() => onPageChange(page as number)}
            >
              {page}
            </Button>
          )
        )}
    
      </div>
     </div>

      {/* navigation */}
      <div className="flex items-center gap-3">
        <Button
          size={"sm"}
          variant={"outline"}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ArrowLeft />
           Previous
        </Button>
        <Button
          size={"sm"}
          variant={"secondary"}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next

          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
