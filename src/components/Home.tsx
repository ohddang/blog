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

const intro = `안녕하세요. 웹 개발자 오영곤입니다. <br>저는 프론트엔드로 웹 개발을 시작하였으며<br>이후 짧은 기간동안 다양한 경험을 통해 새로운 환경에서도 빨리 적응할 수 있는 역량을 키웠습니다. <br>추후에는 프론트엔드, 백엔드, 인프라를 아우르는 풀스택 개발자가 되기 위해 노력하고 있습니다.`;

const etc = [
  { name: "", url: "logo/aws.svg" },
  { name: "", url: "logo/docker.png" },
];

const contentComponent = () => {
  return (
    <div className="w-full h-full flex flex-row justify-around items-center">
      <img
        className="h-1/2 cursor-pointer"
        src="logo/github.png"
        onClick={() => window.open("https://github.com/ohddang/", "_blank")}
      />
      <img
        className="h-1/2 cursor-pointer"
        src="logo/email.svg"
        onClick={() => (window.location.href = "mailto:your-email@example.com")}
      />
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col bg-green-500 text-white [&>*]:p-20 [&>*]:h-screen [&>*:nth-child(odd)]:bg-gray-800 [&>*:nth-child(even)]:bg-gray-700">
        <div className="w-full h-screen gap-10 relaitve flex flex-row justify-between text-3xl font-bold transition-all transition-duration-1000">
          <TypingText text={intro} />
          <Card url="images/profile.jpg" size="lg" children={contentComponent()} />
        </div>
        <div className="flex flex-col gap-10">
          <div className="text-3xl font-bold">FrontEnd</div>
          <div className="flex flex-row gap-5">
            {frontend.map((item, i) => {
              return <Card url={item.url} size="sm" isSquare={true} />;
            })}
          </div>
          <div className="text-3xl font-bold">BackEnd</div>
          <div className="flex flex-row gap-5">
            {backend.map((item, i) => {
              return <Card url={item.url} size="sm" isSquare={true} />;
            })}
          </div>
          <div className="text-3xl font-bold">ETC</div>
          <div className="flex flex-row gap-5">
            {etc.map((item, i) => {
              return <Card url={item.url} size="sm" isSquare={true} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
