export default function Coin() {
  return (
    <div className="w-10/12 h-screen flex flex-col justify-center items-center bg-gray-100 relative">
      <button
        className="text-xs sm:text-xl lg:text-2xl xl:text-4xl font-bold absolute top-10 left-10 animate-bounce"
        onClick={() =>
          window.open(
            "https://chromewebstore.google.com/detail/upbit-gazua/hnjekbfjeongcjipokedmkkjpgffpjop?hl=ko&authuser=0&pli=1",
            "_blank"
          )
        }
      >
        Link👆
      </button>
      <img className="w-2/3 h-2/3" src="background/coin.png" />
      <button
        className="fixed w-10 h-10 bottom-10 right-10 z-10"
        onClick={() => window.open("https://github.com/ohddang/upbit-gazua", "_blank")}
      >
        <img className="w-10 h-10" src="logo/github.png" />
      </button>
    </div>
  );
}
