export default function Tetris() {
  return (
    <div className="w-10/12 h-screen relative">
      <iframe src="https://ohddang.github.io/react-tetris/tetris" className="w-full h-screen"></iframe>
      <div className="max-[640px]:text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold flex flex-col gap-5 absolute top-10 left-10 z-10">
        <h1>Move : ⬅️⬇️➡️</h1>
        <h1>Rotation : ⬆️</h1>
      </div>
      <button
        className="fixed w-10 h-10 text-4xl font-bold bottom-10 right-10 z-10"
        onClick={() => window.open("https://github.com/ohddang/react-tetris", "_blank")}
      >
        <img className="w-10 h-10" src="logo/github.png" />
      </button>
    </div>
  );
}
