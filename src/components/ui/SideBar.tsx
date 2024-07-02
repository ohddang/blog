import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MediaQuerySize, MediaQueryType, useMediaQuery } from "../../hooks/useMediaQuery";

const LinkList = [
  { name: "Home", path: "//" },
  { name: "Cube", path: "/cube" },
  { name: "3D View", path: "/3dview" },
  { name: "Tetris", path: "/tetris" },
  { name: "Whiteboard", path: "/whiteboard" },
  { name: "Coin Alram", path: "/coin" },
  { name: "Chartjs", path: "/chartjs" },
  { name: "Q&A Board", path: "/qaboard" },
  { name: "DashBoard", path: "/dashboard" },
  { name: "🔥 Chatting", path: "/chatting" },
];

export default function SideBar() {
  const [pathname, setPathname] = useState<string>(window.location.pathname);
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
      size = MediaQuerySize.MEDIUM;
      break;
    case MediaQueryType.DESKTOP_2XL:
      size = MediaQuerySize.MEDIUM;
      break;
  }

  const style = "w-full h-12 flex justify-center items-center text-white rounded hover:bg-gray-800 whitespace-nowrap";

  useEffect(() => {
    setPathname(LinkList[0].path);
  }, []);

  return (
    <div className="w-2/12 z-10">
      <div className="fixed w-2/12 h-screen flex flex-col gap-2 bg-gray-900 text-white max-[640px]:p-2 sm:p-3 lg:p-4 max-[640px]:text-xs sm:text-base">
        {LinkList.map((link) => (
          <>
            {link.name === "border" ? (
              <div className="w-full h-[1px] bg-black" />
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`${style} ${
                  pathname === link.path ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : ""
                }`}
                onClick={() => setPathname(link.path)}
              >
                {link.name}
              </Link>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
