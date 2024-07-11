import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  const style = "w-full h-8 sm:h-12 flex justify-center items-center text-white sm:rounded hover:bg-gray-800 whitespace-nowrap";

  useEffect(() => {
    setPathname(LinkList[0].path);
  }, []);

  return (
    <div className="w-2/12 z-10">
      <div className="fixed w-2/12 h-screen flex flex-col gap-0 sm:gap-2 bg-gray-900 text-white overflow-scroll scrollbar-hide sm:p-2 lg:p-4 text-[8px] sm:text-[10px] md:text-xs lg:text-base">
        {LinkList.map((link) => (
          <>
            {link.name === "border" ? (
              <div className="w-full h-[1px] bg-black" />
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`${style} ${pathname === link.path ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : ""}`}
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
