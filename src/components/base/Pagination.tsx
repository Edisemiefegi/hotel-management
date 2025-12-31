import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, Dot } from "lucide-react";
import SelectComponent from "./SelectComponent";

function Pagination() {
  const Options = [
    {
      item: "10",
      value: "10",
    },
    {
      item: "20",
      value: "20",
    },
    {
      item: "30",
      value: "30",
    },
  ];

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <SelectComponent placeholder="Sort" options={Options} />

        <p className="text-gray-700  hidden lg:flex  gap-1 items-center">
          page <span className="font-semibold"> 1 </span> of{" "}
          <span className="font-semibold"> 10 </span> <Dot /> 20 hotels
        </p>
      </div>

      <div className="md:space-x-1 ">
        <Button size={'sm'} variant={"secondary"}>1</Button>
        <Button size={'sm'} variant={"ghost"}>2</Button>
        <Button size={'sm'} variant={"ghost"}>...</Button>
        <Button size={'sm'} variant={"ghost"}>5</Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size={'sm'} variant={"outline"}>
          <ArrowLeft />
          <span className="lg:block hidden"> Previous</span>
        </Button>
        <Button size={'sm'} variant={"secondary"}>
          <span className="lg:block hidden">Next</span>

          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
