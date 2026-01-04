import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ReactNode } from "react";

interface TabItem {
  value: string;
  label: string;
  content: ReactNode;
}

interface Props {
  tabs: TabItem[];
  defaultValue?: string;
  className?: string;
}

function Tab({ tabs, defaultValue, className='space-y-4' }: Props) {
  return (
    <Tabs defaultValue={defaultValue ?? tabs[0]?.value} className={className}>
      <TabsList className="w-full">
        {tabs.map((tab) => (
          <TabsTrigger className="flex-1" key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default Tab;
