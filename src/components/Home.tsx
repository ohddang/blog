import { MediaQuerySize, MediaQueryType, useMediaQuery } from "../hooks/useMediaQuery";
import Card from "./ui/Card";
import TypingText from "./ui/TypingText";

const frontend = [
  { name: "javascript", url: "logo/javascript.png" },
  { name: "typescript", url: "logo/typescript.png" },
  { name: "react", url: "logo/react.png" },
  { name: "nextjs", url: "logo/nextjs.png" },
  { name: "tailwind", url: "logo/tailwind.png" },
  { name: "styledComponents", url: "logo/styledComponents.png" },
  { name: "reactQuery", url: "logo/reactQuery.png" },
  { name: "redux", url: "logo/redux.png" },
  { name: "zustand", url: "logo/zustand.png" },
];

const backend = [
  { name: "", url: "logo/nodejs.svg" },
  { name: "", url: "logo/nestjs.svg" },
  { name: "", url: "logo/mysql.png" },
  { name: "", url: "logo/mongodb.png" },
  { name: "", url: "logo/prisma.svg" },
  { name: "", url: "logo/typeorm.svg" },
];

const intro = `안녕하세요. 웹 개발자 오영곤입니다.<br>
저는 프론트엔드로 웹 개발을 시작하였으며 이후 짧은 기간동안 다양한 경험을 통해 새로운 환경에서도 빨리 적응할 수 있는 역량을 키웠습니다.<br>
추후에는 프론트엔드, 백엔드, 인프라를 아우르는 풀스택 개발자가 되기 위해 노력하고 있습니다.<br>`;

const etc = [
  { name: "", url: "logo/aws.svg" },
  { name: "", url: "logo/docker.png" },
];

const contentComponent = () => {
  return (
    <div className="w-full h-full flex flex-row justify-around items-center">
      <img
        className="h-1/2 cursor-pointer transition-transform hover:scale-110"
        src="logo/github.png"
        onClick={() => window.open("https://github.com/ohddang/", "_blank")}
      />
      <img
        className="h-1/2 cursor-pointer transition-transform hover:scale-110"
        src="logo/email.svg"
        onClick={() => (window.location.href = "mailto:your-email@example.com")}
      />
    </div>
  );
};

export default function Home() {
  const mediaQuery = useMediaQuery();
  let size: MediaQuerySize = MediaQuerySize.LARGE;

  switch (mediaQuery) {
    case MediaQueryType.MOBILE:
      size = MediaQuerySize.SMALL;
      break;
    case MediaQueryType.TABLET:
      size = MediaQuerySize.MEDIUM;
      break;
    case MediaQueryType.DESKTOP:
      size = MediaQuerySize.LARGE;
      break;
    case MediaQueryType.DESKTOP_2XL:
      size = MediaQuerySize.LARGE;
      break;
  }
  const flexDirection = "flex-col";
  const layout = size === MediaQuerySize.SMALL ? "grid grid-cols-3 justify-items-center" : "flex flex-row";
  const gap = size === MediaQuerySize.SMALL ? "gap-5" : "gap-10";
  const padding = size === MediaQuerySize.SMALL ? "p-4" : "p-8";
  const justify = size === MediaQuerySize.SMALL ? "justify-between" : "justify-center";

  return (
    <>
      <div className="w-10/12 h-full flex flex-col text-white [&>*:nth-child(odd)]:bg-gray-800 [&>*:nth-child(even)]:bg-gray-700">
        <div
          className={`w-full min-h-fit h-fit gap-5 ${padding} relaitve flex ${flexDirection} ${justify} items-center text-3xl font-bold transition-all transition-duration-1000`}
        >
          <Card url="images/profile.jpg" size={size} children={contentComponent()} />
          <TypingText text={intro} fontSize={size} />
        </div>
        <div
          className={`w-full min-h-fit h-fit flex flex-col ${padding} ${justify} items-center ${gap} max-[640px]:p-4`}
        >
          <div className="text-3xl font-bold">FrontEnd</div>
          <div className="w-fit grid grid-cols-5 justify-items-center gap-3 md:gap-4 xl:gap-5">
            {frontend.map((item) => {
              return <Card url={item.url} size={size} verticalAlign="center" isSquare={true} />;
            })}
          </div>
          <div className="text-3xl font-bold">BackEnd</div>
          <div className={`${layout} gap-3 md:gap-4 xl:gap-5`}>
            {backend.map((item) => {
              return <Card url={item.url} size={size} verticalAlign="center" isSquare={true} />;
            })}
          </div>
          <div className="text-3xl font-bold">ETC</div>
          <div className="flex flex-row gap-3 md:gap-4 xl:gap-5">
            {etc.map((item) => {
              return <Card url={item.url} size={size} verticalAlign="center" isSquare={true} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
