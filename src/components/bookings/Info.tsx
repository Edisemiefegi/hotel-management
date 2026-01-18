import { BedDouble, Calendar, PlaneLanding } from 'lucide-react';
import InfoCard from '../base/InfoCard';

function Info() {
    const Data = [
    {
      title: "Total Bookings",
      number: "1,240",
      percentage: "12%",
      icon: (
        <div className="text-blue-500  h-fit rounded-sm bg-blue-50 p-2">
          {" "}
          <Calendar size={16} />
        </div>
      ),
    },
    {
      title: "Arrivals Today",
      number: "40",
      percentage: "12%",
      icon: (
        <div className="text-orange-500 h-fit rounded-sm bg-orange-50 p-2">
          {" "}
          <PlaneLanding  size={16} />
        </div>
      ),
    },
    {
      title: "Occupancy Rate",
      number: "18%",
      percentage: "12%",
      icon: (
        <div className="text-teal-900 h-fit rounded-sm bg-teal-50 p-2">
          {" "}
          <BedDouble  size={16}  />
        </div>
      ),
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between w-full gap-6  ">
      {Data.map((item, index) => (
        <div key={index}>
          <InfoCard info={item} />
        </div>
      ))}
    </div>
  )
}

export default Info