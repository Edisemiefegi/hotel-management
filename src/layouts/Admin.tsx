import NavigationDrawer from "@/components/base/NavigationDrawer";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <div >
      
        <NavigationDrawer>
          <Outlet/>
        </NavigationDrawer>
   
    </div>
  );
}

export default Admin;
