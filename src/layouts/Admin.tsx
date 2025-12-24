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
      <section className={`pt-20 md:pt-6 px-6 transition-all ${contentOffset}`}>
        <Outlet />
      </section>
    </main>
  );
}

export default Admin;
