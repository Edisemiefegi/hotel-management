import { cn } from "@/lib/utils";
import type { TableColum } from "@/types";
import type { ReactNode } from "react";

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
        "overflow-x-auto overflow-y-auto  w-full bg-white rounded-xl border border-gray-200 shadow-md ",
        scrollHeight
      )}
    >
      <table className="table-auto min-w-max w-full  ">
        <thead className="sticky top-0 bg-white/70 backdrop-blur-md  shadow-xs z-10 ">
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
    </div>
  );
}

export default Table;
