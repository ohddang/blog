import React, { useEffect, useRef, useState } from "react";

const Dice: React.FC = () => {
  const diceRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [rotationX, setRotationX] = useState<number>(0);
  const [rotationY, setRotationY] = useState<number>(0);
  const [positionX, setPositionX] = useState<number>(0);
  const [positionY, setPositionY] = useState<number>(0);
  const [dirX, setDirX] = useState<number>(1);
  const [dirY, setDirY] = useState<number>(1);
  const [speed, setSpeed] = useState<number>(2);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const dice = diceRef.current!;
    const rect = dice.getBoundingClientRect();
    const diceX = rect.left + rect.width / 2;
    const diceY = rect.top + rect.height / 2;

    event.clientX - diceX > 0 ? setDirX(-1) : setDirX(1);
    event.clientY - diceY > 0 ? setDirY(-1) : setDirY(1);
    setSpeed(3);
    setTimeout(() => {
      setSpeed(2);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationX((prevRotationX) => (prevRotationX + 0.3) % 360);
      setRotationY((prevRotationY) => (prevRotationY + 0.3) % 360);

      if (positionX > panelRef.current!.clientWidth / 2 - 96) {
        setDirX(-1);
      } else if (positionX < -panelRef.current!.clientWidth / 2 + 96) {
        setDirX(1);
      }
      if (positionY > panelRef.current!.clientHeight / 2 - 192) {
        setDirY(-1);
      } else if (positionY < -panelRef.current!.clientHeight / 2 + 96) {
        setDirY(1);
      }

      setPositionX((prevPositionX) => prevPositionX + dirX * speed);
      setPositionY((prevPositionY) => prevPositionY + dirY * speed);
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [positionX, positionY, rotationX, rotationY, dirX, dirY, speed]);

  return (
    <div
      className="flex flex-col w-full justify-center items-center h-screen min-h-screen bg-orange-500/50"
      ref={panelRef}>
      <div
        id="dice"
        className="w-36 h-36 relative"
        ref={diceRef}
        onMouseEnter={handleMouseEnter}
        style={{
          transform: `translateX(${positionX}px) translateY(${positionY}px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
          transformStyle: "preserve-3d",
        }}>
        <div className="w-24 h-24 bg-blue-500 absolute" style={{ transform: "rotateY(90deg) translateZ(48px)" }}></div>
        <div className="w-24 h-24 bg-blue-500 absolute" style={{ transform: "rotateY(-90deg) translateZ(48px)" }}></div>
        <div className="w-24 h-24 bg-red-500 absolute" style={{ transform: "rotateX(90deg) translateZ(48px)" }}></div>
        <div className="w-24 h-24 bg-red-500 absolute" style={{ transform: "rotateX(-90deg) translateZ(48px)" }}></div>
        <div
          className="w-24 h-24 bg-green-500 absolute"
          style={{ transform: "rotateY(180deg) translateZ(48px)" }}></div>
        <div className="w-24 h-24 bg-green-500 absolute" style={{ transform: "rotateY(0deg) translateZ(48px)" }}></div>
      </div>
      {/* <div
        className="w-full h-full absolute top-0 left-0 bg-transparent"
        style={{ transformStyle: "preserve-3d" }}
        ref={panelRef}
        onDoubleClick={handleDbClick}></div> */}
    </div>
  );
};

export default Dice;
