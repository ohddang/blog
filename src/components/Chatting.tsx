import { useEffect, useState } from "react";

const size = 22;

export default function Chatting() {
  const [index, setIsIndex] = useState<number>(0);
  const [opacity, setOpacity] = useState<string[]>([]);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [timeRefresh, setTimeRefresh] = useState<boolean>(false);

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
    <div className="w-full h-screen bg-gray-800 flex flex-col justify-center items-center relative">
      <div className="w-42 h-full flex flex-row items-end text-sm font-bold gap-1 absolute bottom-10 left-10 z-10 ">
        <div className="w-full p-2 rounded bg-white/50 flex flex-col gap-5 relative">
          <div>AWS에 배포 현재는 중단</div>
        </div>
      </div>
      <div
        className={`w-2/3 h-2/3 relative ${outlineStyle}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {opacity.map((op, i) => {
          return (
            <div key={i} className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ${op}`}>
              <img className="w-full h-full" src={`background/chatting${i}.png`} />
            </div>
          );
        })}
      </div>
      <div>
        {opacity.map((_, i) => {
          return (
            <button
              key={i}
              className={`w-10 h-10 text-6xl font-bold ${
                i === index ? "text-yellow-500" : "text-white"
              } focus:outline-none hover:scale-110 transition-transform duration-500`}
              onClick={() => {
                setIsIndex(i);
                setTimeRefresh(!timeRefresh);
              }}
            >
              {"."}
            </button>
          );
        })}
      </div>
      <button
        className="fixed w-10 h-10 text-4xl font-bold bottom-10 right-10 z-10"
        onClick={() => window.open("https://github.com/Codeit-part4-team3", "_blank")}
      >
        <img className="w-10 h-10" src="logo/github.png" />
      </button>
    </div>
  );
}
