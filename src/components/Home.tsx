import Card from "./ui/Card";
import TypingText from "./ui/TypingText";

const frontend = [
  "logo/javascript.png",
  "logo/typescript.png",
  "logo/react.png",
  "logo/nextjs.png",
  "logo/tailwind.png",
  "logo/styledComponents.png",
  "logo/reactQuery.png",
  "logo/redux.png",
  "logo/zustand.png",
];

const backend = [
  "logo/nodejs.svg",
  "logo/nestjs.svg",
  "logo/aws.svg",
  "logo/mysql.png",
  "logo/mongodb.png",
  "logo/prisma.svg",
  "logo/typeorm.svg",
];

const intro = `안녕하세요. 웹 개발자 오영곤입니다. <br>저는 프론트엔드로 웹 개발을 시작하였으며<br>이후 짧은 기간동안 다양한 경험을 통해 새로운 환경에서도 빨리 적응할 수 있는 역량을 키웠습니다. <br>추후에는 프론트엔드, 백엔드, 인프라를 아우르는 풀스택 개발자가 되기 위해 노력하고 있습니다.`;

const etc = ["logo/docker.png"];

const contentComponent = () => {
  return (
    <div className="w-full h-full flex flex-row justify-around items-center">
      <img
        className="h-4/6 cursor-pointer"
        src="logo/github.png"
        onClick={() => window.open("https://github.com/ohddang/", "_blank")}
      />
      <img
        className="h-4/6 cursor-pointer"
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
        <div className="flex flex-col gap-5">
          <div className="text-3xl font-bold">FrontEnd</div>
          <div className="flex flex-row gap-5">
            {frontend.map((src, i) => {
              return <img key={i} className="w-14 h-14" src={src} />;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-3xl font-bold">BackEnd</div>
          <div className="flex flex-row gap-5">
            {backend.map((src, i) => {
              return <img key={i} className="w-14 h-14" src={src} />;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-3xl font-bold">ETC</div>
          <div className="flex flex-row gap-5">
            {etc.map((src, i) => {
              return <img key={i} className="w-14 h-14" src={src} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
