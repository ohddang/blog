import { useEffect, useState } from "react";
import { MediaQuerySize } from "../../hooks/useMediaQuery";

interface TypingTextProps {
  text: string;
  fontSize: MediaQuerySize;
}

export default function TypingText(props: TypingTextProps) {
  const [currentLength, setCurrentLength] = useState(0);
  const [textPart, setTextPart] = useState<string[]>([]);
  const fontSize =
    props.fontSize === MediaQuerySize.SMALL
      ? "text-sm"
      : props.fontSize === MediaQuerySize.LARGE
      ? "text-xl"
      : "text-lg";

  useEffect(() => {
    const textPart = props.text.split("<br>");
    const len = textPart.reduce((acc, cur) => acc + cur.length, 0);
    setTextPart(textPart);

    const updateLength = () => {
      setTimeout(() => {
        if (currentLength < len) {
          setCurrentLength((prev) => prev + 1);
          updateLength();
        }
      }, 50);
    };
    updateLength();
  }, []);

  return (
    <div className={`w-2/3 xl:w-1/2 ${fontSize} font-normal font-dunggeunmo whitespace-wrap leading-normal`}>
      {textPart.map((part, i) => {
        const preLen = i > 0 ? textPart.slice(0, i).reduce((acc, cur) => acc + cur.length, 0) : 0;
        if (currentLength < preLen) return null;
        return <p>{part.split("").slice(0, currentLength - preLen)}</p>;
      })}
    </div>
  );
}
