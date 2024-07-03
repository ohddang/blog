import { MediaQuerySize, MediaQueryType, useMediaQuery } from "../hooks/useMediaQuery";

export default function Tetris() {
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

  const fontSize =
    mediaSize === MediaQuerySize.SMALL ? "text-[9px]" : mediaSize === MediaQuerySize.MEDIUM ? "text-xs" : "text-md";
  const bottom =
    mediaSize === MediaQuerySize.SMALL ? "bottom-3" : mediaSize === MediaQuerySize.MEDIUM ? "bottom-5" : "bottom-10";
  const left =
    mediaSize === MediaQuerySize.SMALL ? "left-3" : mediaSize === MediaQuerySize.MEDIUM ? "left-5" : "left-10";
  const gap = mediaSize === MediaQuerySize.SMALL ? "gap-1" : mediaSize === MediaQuerySize.MEDIUM ? "gap-3" : "gap-5";

  return (
    <div className="w-10/12 h-screen relative">
      <iframe src="https://ohddang.github.io/react-tetris/tetris" className="w-full h-screen"></iframe>
      <div className={`${fontSize} font-bold flex flex-col ${gap} absolute ${bottom} ${left} z-10`}>
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
