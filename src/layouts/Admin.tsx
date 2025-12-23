import NavigationDrawer from "@/components/ui/base/NavigationDrawer";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <div >
      
        <NavigationDrawer>
          drawingx
          <Outlet/>
        </NavigationDrawer>
   
    </div>
  );
}

export default Admin;
