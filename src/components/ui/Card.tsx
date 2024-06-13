import { useEffect, useRef, useState } from "react";

interface CardProps {
  url: string;
  size: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export default function Card(props: CardProps) {
  const cardRef = useRef<HTMLImageElement>(null);
  const [cardScale, setCardScale] = useState<number>(0);
  const [bgColor, setBgColor] = useState<string>("");

  const width = props.size === "sm" ? "w-72" : props.size === "md" ? "w-1/2" : "w-lg";
  const height = props.size === "sm" ? "h-96" : props.size === "md" ? "h-5/6" : "h-lg";
  const pt = props.size === "sm" ? "pt-3" : props.size === "md" ? "pt-4" : "pt-5";

  const onMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = cardRef?.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const width = element.offsetWidth;
    const height = element.offsetHeight;

    const midX = width / 2;
    const midY = height / 2;

    const angleX = (x - midX) / midX;
    const angleY = (y - midY) / midY;

    const rotateY = angleX * 15;
    const rotateX = angleY * -15;

    element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    element.style.boxShadow = `${angleX * -5}px ${angleY * -5}px 8px 5px rgba(0, 0, 0, 0.25)`;
  };

  function onMouseOut() {
    const element = cardRef?.current;
    if (!element) return;

    element.style.transform = `rotateX(0deg) rotateY(0deg)`;
    element.style.boxShadow = `1px 1px 1px 1px rgba(0, 0, 0, 0.1)`;
  }

  useEffect(() => {
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;

      if (!ctx) {
        return;
      }

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let r = 0,
        g = 0,
        b = 0;

      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }

      r = Math.floor(r / (data.length / 4));
      g = Math.floor(g / (data.length / 4));
      b = Math.floor(b / (data.length / 4));
      setBgColor(`rgb(${r},${g},${b})`);
    };
    img.src = props.url;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCardScale(100);
    }, 1000);
  }, [cardScale]);

  return (
    <div
      ref={cardRef}
      style={{ backgroundColor: `${bgColor}` }}
      className={`${width} ${height} ${bgColor} rounded-lg shadow-md flex flex-col ${pt} justify-start items-center transition-transform scale-${cardScale}`}
      onMouseMove={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <img className="rounded w-11/12 h-5/6" src={props.url} />
      <div className="w-11/12 h-1/6">{props.children}</div>
    </div>
  );
}
