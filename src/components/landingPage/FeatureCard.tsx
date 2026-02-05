import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title?: string;
  subtitle?: string;
  text?: string;
  aos?: string;
  duration?: string;
}
function FeatureCard({ icon: Icon, title, text, aos, duration, subtitle }: Props) {
  return (
    <div
      data-aos={aos}
      data-aos-duration={duration}
      className="space-y-3 text-center flex flex-col "
    >
      <span className="p-3 flex items-center justify-center mx-auto w-fit bg-secondary rounded-lg">
        <Icon size={23} className="text-primary" />
      </span>

      <div className="space-y-1">
        <p className="font-semibold text-xl">{title}</p>
        <p className="text-primary">{subtitle}</p>
      <p className="text-gray-400 font-light">{text}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
