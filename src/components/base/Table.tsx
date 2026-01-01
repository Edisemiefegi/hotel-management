import { cn } from "@/lib/utils";
import type { TableColum } from "@/types";
import { useState, type ReactNode } from "react";
import Pagination from "./Pagination";
import { HOTELS } from "@/constants/hotels";

interface Props<T> {
  uniqueId: keyof T | string;
  headers: TableColum<T>[];
  data: T[];
  emptyClass?: string;
  emptySlot?: ReactNode;
  scrollHeight?: string;
}

function Table<T>({
  uniqueId,
  headers,
  data,
  emptyClass,
  emptySlot,
  scrollHeight = "max-h-[calc(100vh-200px)]",

  ...rest
}: Props<T>) {
  function getField(path?: string, row?: any): any {
    if (!path || !row) return "";

    return path.split(".").reduce((acc: any, key) => {
      return acc?.[key];
    }, row);
  }

  return (
    <div
      {...rest}
      className={cn(
        "overflow-x-auto overflow-y-auto  rounded-t-xl w-full  ",
        scrollHeight
      )}
    >
      <table className="table-auto min-w-max w-full  ">
        <thead className="sticky top-0 bg-white  shadow-xs z-10 ">
          <tr className="text-left text-gray border-b border-gray-300">
            {headers.map((col, index) => (
              <th
                key={`${index}-${col.field}`}
                className={cn(col.headerClass ?? "", "p-6 font-medium")}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="">
          {data.map((row, rowIndex) => (
            <tr
              key={`${rowIndex}-${(row as any)?.[uniqueId]}`}
              className="hover:bg-gray-50 transition border-b  border-gray-300"
            >
              {headers.map((col, colIndex) => {
                const value = getField(col.field, row);

                return (
                  <td
                    key={`${rowIndex}-${colIndex}-${col.field}`}
                    className={`p-4 align-center ${col.className ?? ""}`}
                  >
                    {col.render
                      ? col.render(row, rowIndex, value)
                      : col.format
                      ? col.format(value, row, rowIndex)
                      : value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {!data.length && (
        <div className="w-full">
          {emptySlot ?? (
            <p className={`p-4 text-center ${emptyClass ?? ""}`}>Empty</p>
          )}
        </div>
      )}

      {/* <div className="p-2">
        <Pagination
          totalItems={data.length}
          currentPage={currentPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
        />
      </div> */}
    </div>
  );
}

export default Table;
