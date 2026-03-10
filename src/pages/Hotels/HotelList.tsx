import Pagination from "@/components/base/Pagination";
import HotelCard from "@/components/hotel/HotelCard";
import Filter from "@/components/landingPage/hotels/Filter";
import SearchHotel from "@/components/landingPage/SearchHotel";
import { Button } from "@/components/ui/button";
import { useAdmin } from "@/hooks/useAdmin";
import { useAdminStore } from "@/store/adminStore";
import type { amenities } from "@/types/hotel";
import { SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Filters {
  priceRange: [number, number];
  rating: string | null;
  amenities: any;
}

function HotelList() {
  const { hotels } = useAdminStore();
  const { getHotelRooms, getHotels } = useAdmin();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [hotelRooms, setHotelRooms] = useState<Record<string, any[]>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // Temporary filter state (UI only)
  const [tempFilters, setTempFilters] = useState<Filters>({
    priceRange: [20000, 500000],
    rating: null,
    amenities: [],
  });

  // Applied filters (used for filtering hotels)
  const [appliedFilters, setAppliedFilters] = useState<Filters>({
    priceRange: [20000, 500000],
    rating: null,
    amenities: [],
  });

  useEffect(() => {
    const fetchhotels = async () => {
      await getHotels();
    };

    const fetchData = async () => {
      await getHotels();

      const roomsData: Record<string, any[]> = {};

      for (const hotel of hotels) {
        const rooms = await getHotelRooms(hotel.id);
        roomsData[hotel.id] = rooms || [];
      }

      setHotelRooms(roomsData);
    };

    fetchData();
    fetchhotels();
  }, [hotels]);

  const openFilter = () => setIsFilterOpen(true);
  const closeFilter = () => setIsFilterOpen(false);

  const handleSaveFilters = () => {
    setAppliedFilters(tempFilters);
    closeFilter();
  };

  const handleClearFilters = () => {
    const defaultFilters: Filters = {
      priceRange: [20000, 500000],
      rating: null,
      amenities: [],
    };
    setTempFilters(defaultFilters);
    setAppliedFilters(defaultFilters);
    closeFilter();
  };

  const filteredHotels = hotels.filter((hotel) => {
    const matchesSearch = [hotel.name, hotel.location]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    const rooms = hotelRooms[hotel.id] || [];

    const matchesPrice =
      rooms.some(
        (room) =>
          room.pricePerNight >= appliedFilters.priceRange[0] &&
          room.pricePerNight <= appliedFilters.priceRange[1],
      ) || rooms.length === 0;

    const matchesRating = appliedFilters.rating
      ? hotel.rating >= parseFloat(appliedFilters.rating)
      : true;

    const matchesAmenities =
      appliedFilters.amenities.length === 0 ||
      appliedFilters.amenities.some((a: amenities) =>
        hotel.amenities.includes(a),
      );

    return matchesSearch && matchesPrice && matchesRating && matchesAmenities;
  });

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedHotels = filteredHotels.slice(
    startIndex,
    startIndex + pageSize,
  );
  return (
    <main className="container mx-auto px-8 py-20 space-y-10 min-h-screen">
      <header className="space-y-8">
        <h2 className="font-bold text-2xl">All Hotels</h2>
        <SearchHotel search={search} setSearch={setSearch} />
      </header>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={openFilter} className="md:hidden">
            <span className="font-semibold text-lg">Filters</span>
            <SlidersHorizontal size={20} />
          </Button>
          <span className="text-xs text-gray">
            {filteredHotels.length} hotels found
          </span>
        </div>

        <section className="grid grid-cols-5 gap-4">
          {/* Desktop Filter */}
          <aside className="hidden md:block md:col-span-2">
            <Filter
              priceRange={tempFilters.priceRange}
              setPriceRange={(v: any) =>
                setTempFilters({ ...tempFilters, priceRange: v })
              }
              rating={tempFilters.rating}
              setRating={(v: any) =>
                setTempFilters({ ...tempFilters, rating: v })
              }
              amenities={tempFilters.amenities}
              setAmenities={(v: any) =>
                setTempFilters({ ...tempFilters, amenities: v })
              }
              onSave={handleSaveFilters}
              onClear={handleClearFilters}
            />
          </aside>

          {/* Hotels List */}
          <div className="col-span-5 md:col-span-3 space-y-4">
            {paginatedHotels.map((hotel) => (
              <Link key={hotel.id} to={`/hotels/${hotel.id}`} className="block">
                <HotelCard
                  layout="row"
                  className="w-full"
                  hotel={hotel}
                  menu={[]}
                />
              </Link>
            ))}
            {filteredHotels.length === 0 && (
              <p className="text-xl text-center">No hotel found</p>
            )}
            <Pagination
              totalItems={filteredHotels.length}
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
        </section>
      </div>

      {/* Mobile Filter Sidebar */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 h-full md:hidden"
            onClick={closeFilter}
          />
          <aside className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-background z-50 p-4 overflow-y-auto md:hidden animate-slide-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">Filters</h2>
              <button onClick={closeFilter}>✕</button>
            </div>
            <Filter
              priceRange={tempFilters.priceRange}
              setPriceRange={(v: any) =>
                setTempFilters({ ...tempFilters, priceRange: v })
              }
              rating={tempFilters.rating}
              setRating={(v: any) =>
                setTempFilters({ ...tempFilters, rating: v })
              }
              amenities={tempFilters.amenities}
              setAmenities={(v: any) =>
                setTempFilters({ ...tempFilters, amenities: v })
              }
              onSave={handleSaveFilters}
              onClear={handleClearFilters}
            />
          </aside>
        </>
      )}
    </main>
  );
}

export default HotelList;
