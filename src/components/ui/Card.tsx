import { useEffect, useRef, useState } from "react";
import { MediaQuerySize } from "../../hooks/useMediaQuery";

interface CardProps {
  url: string;
  size: MediaQuerySize;
  verticalAlign?: "top" | "center" | "bottom";
  isSquare?: boolean;
  children?: React.ReactNode;
}

export default function Card(props: CardProps) {
  const cardRef = useRef<HTMLImageElement>(null);
  const [cardScale, setCardScale] = useState<string>("scale-0");
  const [bgColor, setBgColor] = useState<string>("");

  const sizeToWidth = {
    square: { 0: "w-square-sm", 1: "w-square-md", 2: "w-square-lg" },
    rectangle: { 0: "w-rect-sm", 1: "w-rect-md", 2: "w-rect-lg" },
  };

  const sizeToHeight = {
    square: { 0: "h-square-sm", 1: "h-square-md", 2: "h-square-lg" },
    rectangle: { 0: "h-rect-sm", 1: "h-rect-md", 2: "h-rect-lg" },
  };

  const shapeType = props.isSquare ? "square" : "rectangle";

  let width = sizeToWidth[shapeType][props.size];
  let height = sizeToHeight[shapeType][props.size];

  const py =
    props.verticalAlign === "center"
      ? ""
      : props.size === MediaQuerySize.SMALL
      ? "py-3"
      : props.size === MediaQuerySize.MEDIUM
      ? "py-4"
      : "py-5";
  const verticalAlign =
    props.verticalAlign === "top"
      ? "justify-start"
      : props.verticalAlign === "center"
      ? "justify-center"
      : "justify-end";

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
        b = 0,
        a = 0;

      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] === 0) {
          r += 255;
          g += 255;
          b += 255;
          a += data[i + 3];
        } else {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
          a += data[i + 3];
        }
      }

      r = Math.floor(r / (data.length / 4));
      g = Math.floor(g / (data.length / 4));
      b = Math.floor(b / (data.length / 4));
      a = Math.floor(a / (data.length / 4));
      setBgColor(`rgb(${r},${g},${b})`);
    };
    img.src = props.url;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCardScale("scale-100");
    }, 1000);
  }, [cardScale]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        ref={cardRef}
        style={{ backgroundColor: `${bgColor}` }}
        className={`${width} ${height} ${bgColor} h-min-full rounded-lg shadow-md flex flex-col ${py} ${verticalAlign} items-center transition-transform ${cardScale}`}
        onMouseMove={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <img className="rounded w-11/12 h-5/6" src={props.url} />
        {props.children && <div className="w-11/12 h-1/6">{props.children}</div>}
      </div>
    </div>
  );
}
