import { useEffect, useState } from "react";

interface Props {
    text: string
}

const TypewriterText = ({text}: Props) => {
  const speed = 30;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <p className="md:text-2xl text-xl">
      <span className="text-black">
        {text.slice(0, index)}
      </span>
      <span className="text-neutral-400">
        {text.slice(index)}
      </span>
    </p>
  );
};

export default TypewriterText;
