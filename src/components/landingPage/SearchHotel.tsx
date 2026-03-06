import { Search } from "lucide-react";
import { Button } from "../ui/button";
import SearchComponent from "../base/SearchComponent";

interface Props {
  setSearch: any;
  search: string;
}

function SearchHotel({ setSearch, search }: Props) {
  return (
    <div className="grid grid-cols-4 items-center  gap-3 w-full">
      <div className="col-span-3">
        <label className="text-sm mb-1 text-gray-900 font-medium"> Location</label>
        <SearchComponent
          value={search}
          onChange={setSearch}
          placeholder="Where are you going?"
        />
      </div>

      <Button className="w-full mt-6">
        <Search /> Search Hotels{" "}
      </Button>
    </div>
  );
}

export default SearchHotel;
