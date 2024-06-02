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
  "logo/threejs.png",
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

const etc = ["logo/docker.png", "logo/jest.svg", "logo/terraform.png"];

export default function Home() {
  return (
    <div className="flex flex-col p-10 gap-14">
      <div className="flex flex-col gap-5">
        <div className="text-3xl font-noto-sans-kr font-bold">FrontEnd</div>
        <div className="flex flex-row gap-5">
          {frontend.map((src, i) => {
            return <img key={i} className="w-14 h-14" src={src} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-3xl font-noto-sans-kr font-bold">BackEnd</div>
        <div className="flex flex-row gap-5">
          {backend.map((src, i) => {
            return <img key={i} className="w-14 h-14" src={src} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-3xl font-noto-sans-kr font-bold">ETC</div>
        <div className="flex flex-row gap-5">
          {etc.map((src, i) => {
            return <img key={i} className="w-14 h-14" src={src} />;
          })}
        </div>
      </div>
      <button
        className="text-4xl font-bold absolute bottom-10 right-10 z-10"
        onClick={() => window.open("https://github.com/ohddang/", "_blank")}>
        <img className="w-10 h-10" src="logo/github.png" />
      </button>
    </div>
  );
}
