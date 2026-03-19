interface Props {
  title?: string;
  text?: string;
  number?: number;
  status?: string;
  image?: string;
}

function SummaryCard({ title, text, number, status, image }: Props) {
  return (
    <div className="bg-secondary/30 text-gray p-3 rounded-md flex  justify-between w-full">
      <div className="flex gap-1">
        <span className="w-12 h-12 rounded-md overflow-hidden">
          {" "}
          <img loading="lazy" src={image} alt="" className="" />
        </span>{" "}
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-xs">{text}</p>
        </div>
      </div>
      <div>
        <p className="font-medium">NGN{number}</p>
        <p className="text-xs text-green-600">{status}</p>
      </div>
    </div>
  );
}

export default SummaryCard;
