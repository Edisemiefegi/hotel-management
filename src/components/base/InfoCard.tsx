

interface Props {
    title?: string;
    text?: string;
    number?: number;
    status?: string
}

function InfoCard({title, text, number, status}: Props) {
  return (
    <div className='bg-secondary/30 text-gray p-3 rounded-md flex  justify-between w-full'>
        <div>
            <p className="font-medium">{title}</p>
            <p className="text-xs">{text}</p>
        </div>
        <div>
            <p className="font-medium">NGN{number}</p>
            <p className="text-xs text-green-600">{status}</p>
        </div>
    </div>
  )
}

export default InfoCard