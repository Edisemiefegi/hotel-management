import NavigationDrawer from "@/components/layout/NavigationDrawer";
import { usePersistentState } from "@/hooks/usePersistentState";
import { Outlet } from "react-router-dom";

function Admin() {
  const [rail, setRail] = usePersistentState("rail", false);

  const contentOffset = rail ? "md:ml-18" : "md:ml-60";

  return (
    <main className="relative max-h-screen">
      <NavigationDrawer rail={rail} setRail={setRail} />
      {/* main content */}
      <div className={` px-4 md:px-5 pt-2   transition-all ${contentOffset}`}>
        <div className="pb-10 pt-14 md:pt-0 md:container mx-auto relative">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default Admin;
