import { useEffect, useState } from "react";

export default function TypingText({ text }: { text: string }) {
  const [currentLength, setCurrentLength] = useState(0);
  const [textPart, setTextPart] = useState<string[]>([]);

  useEffect(() => {
    const textPart = text.split("<br>");
    const len = textPart.reduce((acc, cur) => acc + cur.length, 0);
    setTextPart(textPart);

    const updateLength = () => {
      setTimeout(() => {
        if (currentLength < len) {
          setCurrentLength((prev) => prev + 1);
          updateLength();
        }
      }, 100);
    };
    updateLength();
  }, []);

  return (
    <div className="w-full text-3xl font-normal font-dunggeunmo whitespace-wrap leading-normal">
      {textPart.map((part, i) => {
        const preLen = i > 0 ? textPart.slice(0, i).reduce((acc, cur) => acc + cur.length, 0) : 0;
        if (currentLength < preLen) return null;
        return <p>{part.split("").slice(0, currentLength - preLen)}</p>;
      })}
    </div>
  );
}
