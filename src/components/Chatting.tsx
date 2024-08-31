import { useEffect, useState } from "react";
import { MediaQuerySize, MediaQueryType, useMediaQuery } from "../hooks/useMediaQuery";

const size = 22;

export default function Chatting() {
  const [index, setIsIndex] = useState<number>(0);
  const [opacity, setOpacity] = useState<string[]>([]);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [timeRefresh, setTimeRefresh] = useState<boolean>(false);

  const mediaQuery = useMediaQuery();
  let mediaSize: MediaQuerySize = MediaQuerySize.LARGE;
  switch (mediaQuery) {
    case MediaQueryType.MOBILE:
      mediaSize = MediaQuerySize.SMALL;
      break;
    case MediaQueryType.TABLET:
      mediaSize = MediaQuerySize.MEDIUM;
      break;
    case MediaQueryType.DESKTOP:
      mediaSize = MediaQuerySize.LARGE;
      break;
    case MediaQueryType.DESKTOP_2XL:
      mediaSize = MediaQuerySize.LARGE;
      break;
  }

  const fontSize = mediaSize === MediaQuerySize.SMALL ? "text-xs" : mediaSize === MediaQuerySize.MEDIUM ? "text-xs" : "text-md";
  const top = mediaSize === MediaQuerySize.SMALL ? "top-1" : mediaSize === MediaQuerySize.MEDIUM ? "top-5" : "top-10";
  const left = mediaSize === MediaQuerySize.SMALL ? "left-1" : mediaSize === MediaQuerySize.MEDIUM ? "left-5" : "left-10";

  const outlineStyle = isHover ? "outline outline-5 outline-yellow-500" : "";

  useEffect(() => {
    setOpacity(Array.from({ length: size }, (_, i) => (i === index ? "opacity-100" : "opacity-0")));
  }, [index]);

  useEffect(() => {
    let animation: number = NaN;

    const startAnimation = () => {
      animation = setTimeout(() => {
        if (!isHover) {
          setIsIndex((prev) => (prev + 1) % size);
          startAnimation();
        }
      }, 3000);
    };

    startAnimation();

    return () => {
      clearTimeout(animation);
    };
  }, [isHover, timeRefresh]);

  return (
    <div className="w-10/12 h-screen bg-gray-800 pt-16 sm:pt-0 flex flex-col flex-start sm:justify-center items-center gap-3 relative">
      <div className={`w-fit h-fit p-1 flex flex-row items-end ${fontSize} font-bold absolute top-3 left-3 z-10`}>
        <div className="w-full h-full p-2 rounded bg-white/50 flex justify-center items-center">
          <p className="whitespace-nowrap">MSA서버구조 AWS에 배포</p>
        </div>
      </div>

      <div className={`text-white ${fontSize}`}>
        <p>실시간 채팅 웹 사이트</p>
        <p>React + NestJS + AWS</p>
      </div>
      <div
        className={`w-[300px] h-[200px] md:w-[420px] md:h-[280px] lg:w-[540px] lg:h-[360px] xl:w-[720px] xl:h-[480px] flex relative mb-4 lg:mb-10 ${outlineStyle}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {opacity.map((op, i) => {
          return (
            <div key={i} className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ${op}`}>
              <img className="w-[300px] h-[200px] md:w-[420px] md:h-[280px] lg:w-[540px] lg:h-[360px] xl:w-[720px] xl:h-[480px]" src={`background/chatting${i}.png`} />
            </div>
          );
        })}
      </div>
      <div className="w-2/3 lg:w-1/2 grid grid-cols-11 justify-items-center gap-4">
        {opacity.map((_, i) => {
          return (
            <button
              key={i}
              className={`w-2 h-2 sm:w-3 sm:h-3 gap-4 rounded-full  ${
                i === index ? "bg-yellow-500" : "bg-white"
              } focus:outline-none hover:scale-110 transition-transform duration-500`}
              onClick={() => {
                setIsIndex(i);
                setTimeRefresh(!timeRefresh);
              }}
            ></button>
          );
        })}
      </div>
      <button className="fixed w-10 h-10 text-4xl font-bold bottom-10 right-10 z-10" onClick={() => window.open("https://github.com/Codeit-part4-team3", "_blank")}>
        <img className="w-10 h-10" src="logo/github.png" />
      </button>
    </div>
  );
}
