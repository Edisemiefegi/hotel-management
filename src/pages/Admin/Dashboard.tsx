import Header from "@/components/base/Header";
import Info from "@/components/bookings/Info";
import HeaderPortal from "@/components/portals/HeaderPortal";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

function Dashboard() {
  return (
    <div className="space-y-6">
      <HeaderPortal>
        <Header
          action
          heading="Dashboard"
          subheading="Welcome back! Here's your hotel performance overview."
        >
          <Button>
            <Download /> Export Report
          </Button>
        </Header>
      </HeaderPortal>
      <Info />
    </div>
  );
}

export default Dashboard;
