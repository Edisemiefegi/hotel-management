import Card from "@/components/base/Card";
import Header from "@/components/base/Header";
import Tab from "@/components/base/Tab";
import Info from "@/components/bookings/Info";
import Line from "@/components/charts/Line";
import HeaderPortal from "@/components/portals/HeaderPortal";
import { Button } from "@/components/ui/button";

function Dashboard() {
  const tabs = [
    {
      value: "Today",
      label: "Today",
    },
    {
      value: "Week",
      label: "Week",
    },
    {
      value: "Month",
      label: "Month",
    },
  ];
  const activity = [
    {
      time: "10:20 AM",
      title: "New booking recieved",
      subheading: "Booking #1280 for Deluxe Suite",
    },
    {
      time: "11:20 AM",
      title: " booking Cancelled",
      subheading: "Booking #1280 for Deluxe Suite",
    },
    {
      time: "10:20 AM",
      title: "New booking recieved",
      subheading: "Booking #1280 for Deluxe Suite",
    },
  ];

  const lineChartData = {
    title: {
      name: "Revenue",
      subheading: "Last 30 days performace",
    },
    labels: ["Nov 01", "Nov 02", "Nov 03", "Nov 04"],
    data: [
      {
        name: "Revenue",
        values: [10000, 20000, 30000, 25000],
        color: "green",
      },
    ],
  };

  return (
    <div className="space-y-6">
      <HeaderPortal>
        <Header
          action
          heading="Dashboard"
          subheading="Welcome back! Here's your hotel performance overview."
        >
          <div>
            <Tab tabs={tabs} />
          </div>
        </Header>
      </HeaderPortal>
      <Info />
      {/* chart */}
      <section>
        <Card>
          <Line
            data={lineChartData.data}
            labels={lineChartData.labels}
            title={lineChartData.title}
          />
        </Card>
      </section>
      <section className="grid md:grid-cols-3 grid-cols-1 gap-6">
        <Card className="md:col-span-2">
          <div className="flex justify-between">
            <p>Recent Bookings</p>
            <Button className="text-primary" variant={"ghost"}>
              View All
            </Button>
          </div>
          {/* <BookingsTable menu={menu} /> */}
        </Card>
        <Card className="md:col-span-1 space-y-6">
          <p className="font-medium">Todays Activity</p>
          <div className="space-y-4">
            {activity.map((item, index) => (
              <div className="flex gap-2">
                <div className="flex flex-col items-center">
                  <span className="p-1 rounded-full bg-gray"></span>
                  <span className="h-20 w-0.5 bg-gray-200" />
                </div>
                <div className="text-sm " key={index}>
                  <p className="text-xs text-gray font-medium">{item.time}</p>
                  <p>{item.title}</p>
                  <p className="text-xs text-gray">{item.subheading}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}

export default Dashboard;
