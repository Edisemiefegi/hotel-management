import HotelCard from "@/components/hotel/HotelCard";
import Filter from "@/components/landingPage/hotels/Filter";
import HotelsHeader from "@/components/landingPage/hotels/HotelsHeader";
import { Button } from "@/components/ui/button";
import { useAdminStore } from "@/store/adminStore";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function HotelList() {
  const { hotels } = useAdminStore();
  const displayedHotels = [...hotels, ...hotels, ...hotels];

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const openFilter = () => setIsFilterOpen(true);
  const closeFilter = () => setIsFilterOpen(false);

  return (
    <main className="container mx-auto px-8 py-20 space-y-10 min-h-screen">
      <HotelsHeader />

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Button
            variant={"outline"}
            onClick={openFilter}
            className="md:hidden"
          >
            <span className="font-semibold text-lg">Filters</span>
            <SlidersHorizontal size={20} />
          </Button>
          <span className="text-xs text-gray">3 hotels found</span>
        </div>

        <section className="grid grid-cols-5 gap-4">
          <aside className="hidden md:block md:col-span-2">
            <Filter />
          </aside>

          <div className="col-span-5 md:col-span-3 space-y-4">
            {displayedHotels.map((hotel) => (
              <Link key={hotel.id} to={`/hotels/${hotel.id}`} className="block">
                <HotelCard
                  layout="row"
                  className="w-full"
                  hotel={hotel}
                  menu={[]}
                />
              </Link>
            ))}
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

            <Filter />
          </aside>
        </>
      )}
    </main>
  );
}

export default HotelList;
