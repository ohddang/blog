import { useState } from "react";
import { Link } from "react-router-dom";

const LinkList = [
  { name: "Dice", path: "/dice" },
  { name: "3D View", path: "/3dview" },
  { name: "Tetris", path: "/tetris" },
  { name: "Whiteboard", path: "/whiteboard" },
  { name: "Coin Alram", path: "/coin" },
  { name: "Q&A Board", path: "/qaboard" },
  { name: "DashBoard", path: "/dashboard" },
  { name: "Chatting", path: "/chatting" },
];

export default function SideBar() {
  const [pathname, setPathname] = useState<string>(window.location.pathname);

  const style =
    "w-full h-12 flex justify-center items-center text-black font-noto-sans-kr rounded hover:bg-gray-500/10";

  return (
    <div className="w-48 h-full p-2 flex flex-col gap-2 bg-gray font-noto-sans-kr">
      {LinkList.map((link) => (
        <>
          {link.name === "border" ? (
            <div className="w-full h-[1px] bg-black" />
          ) : (
            <Link
              key={link.name}
              to={link.path}
              className={`${style} ${
                pathname === link.path ? "bg-gradient-to-r from-blue-500 to-green-500 text-white" : ""
              }`}
              onClick={() => setPathname(link.path)}>
              {link.name}
            </Link>
          )}
        </>
      ))}
    </div>
  );
}
