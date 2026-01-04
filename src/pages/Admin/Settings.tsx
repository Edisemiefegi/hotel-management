import Card from "@/components/base/Card";
import Header from "@/components/base/Header";
import InputComponet from "@/components/base/InputComponet";
import SelectComponent from "@/components/base/SelectComponent";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Bell, Building2, Globe, Lock, type LucideIcon } from "lucide-react";

interface SettingsHeaderProps {
  Icon: LucideIcon;
  title: string;
  text: string;
}

function SettingsHeader({ Icon, title, text }: SettingsHeaderProps) {
  return (
    <div className="flex gap-3 items-center">
      <Button variant={"secondary"} className="rounded-lg" size={"icon"}>
        <Icon color="#7A462E" />
      </Button>
      <div className="space-y-1">
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-gray">{text}</p>
      </div>
    </div>
  );
}

function Settings() {
  const notifications = [
    {
      title: "Email Notifications",
      text: "Receive booking confirmations via email",
    },
    {
      title: "New Booking Alerts",
      text: "Get notified when a new booking is made",
    },
    {
      title: "Cancellation Alerts",
      text: "Get notified when a booking is cancelled",
    },
    {
      title: "Weekly Reports",
      text: "Receive weekly performance summaries",
    },
  ];

  return (
    <main className="space-y-8">
      <Header
        heading="Settings"
        subheading="Manage your application preferences"
      >
        {" "}
      </Header>
      {/* info */}
      <Card className="space-y-8">
        <SettingsHeader
          text="Update your brand details"
          title="Brand Information"
          Icon={Building2}
        />

        <div className="grid grid-cols-2 gap-4">
          <InputComponet label="Brand Name" />
          <InputComponet label="Support Email" />
          <InputComponet label="Phone Number" />
          <InputComponet label="Location" />
        </div>
        <div className="flex justify-end">
          <Button>Save changes</Button>
        </div>
      </Card>

      {/* region */}
      <Card className="space-y-8">
        <SettingsHeader
          text="Configure currency and timezone"
          title="Regional Settings"
          Icon={Globe}
        />

        <div className="flex  justify-between">
          <SelectComponent options={[]} placeholder="NGN" label="Currency" />
          <SelectComponent
            options={[]}
            label="TimeZone"
            placeholder="Eastern Time(EST)"
          />
        </div>
        <div className="flex justify-end">
          <Button>Save changes</Button>
        </div>
      </Card>

      {/* notification */}
      <Card className="space-y-8">
        <SettingsHeader
          text="Manage notification preferences"
          title="Notifications"
          Icon={Bell}
        />
        {notifications.map((item, index) => (
          <div key={index} className="space-y-8">
            <div className="flex  justify-between">
              <div className="">
                <p className="">{item.title}</p>
                <p className="text-xs text-gray">{item.text}</p>
              </div>
              <Switch />
            </div>
            <hr />
          </div>
        ))}
      </Card>

      {/* security */}
      <Card className="space-y-8">
        <SettingsHeader
          text="Manage your account security"
          title="Security"
          Icon={Lock}
        />
        <InputComponet label="Current Password" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputComponet label="New Password" />
          <InputComponet label="Confirm Password" />
        </div>
        <div className="flex justify-end">
          <Button>Update Password</Button>
        </div>
      </Card>
    </main>
  );
}

export default Settings;
