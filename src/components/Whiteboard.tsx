export default function Whiteboard() {
  return (
    <div className="w-10/12 h-screen bg-gray-100 flex justify-center items-center relative">
      <button
        className="text-xs sm:text-xl lg:text-2xl xl:text-4xl font-bold absolute top-10 left-10 animate-bounce"
        onClick={() => window.open("https://ohddang.github.io/whiteboard", "_blank")}
      >
        Link👆
      </button>
      <img className="w-2/3 h-2/3" src="background/whiteboard.png" />
      <button
        className="fixed w-10 h-10 bottom-10 right-10 z-10"
        onClick={() => window.open("https://github.com/ohddang/whiteboard", "_blank")}
      >
        <img className="w-10 h-10" src="logo/github.png" />
      </button>
    </div>
  );
}
