export default function Chatting() {
  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center relative">
      <div className="w-42 h-full flex flex-row items-end text-sm font-bold gap-1 absolute bottom-10 left-10 z-10 ">
        <div className="w-full p-2 rounded bg-white/50 flex flex-col gap-5 relative">
          <div>AWS에 배포 현재는 중단</div>
        </div>
      </div>
      <img className="w-2/3 h-2/3" src="background/chatting.png" />
      <button
        className="text-4xl font-bold absolute bottom-10 right-10 z-10"
        onClick={() => window.open("https://github.com/Codeit-part4-team3", "_blank")}>
        <img className="w-10 h-10" src="logo/github.png" />
      </button>
    </div>
  );
}
