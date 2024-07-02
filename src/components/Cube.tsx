import React, { useEffect, useRef, useState } from "react";

const Cube: React.FC = () => {
  const diceRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [rotationX, setRotationX] = useState<number>(0);
  const [rotationY, setRotationY] = useState<number>(0);
  const [positionX, setPositionX] = useState<number>(0);
  const [positionY, setPositionY] = useState<number>(0);
  const [dirX, setDirX] = useState<number>(1);
  const [dirY, setDirY] = useState<number>(1);
  const [speed, setSpeed] = useState<number>(3);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const dice = diceRef.current!;
    const rect = dice.getBoundingClientRect();
    const diceX = rect.left + rect.width / 2;
    const diceY = rect.top + rect.height / 2;

    event.clientX - diceX > 0 ? setDirX(-1) : setDirX(1);
    event.clientY - diceY > 0 ? setDirY(-1) : setDirY(1);
    setSpeed(4);
    setTimeout(() => {
      setSpeed(3);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationX((prevRotationX) => (prevRotationX + 1.6) % 360);
      setRotationY((prevRotationY) => (prevRotationY + 1.6) % 360);

      if (positionX > panelRef.current!.clientWidth / 2 - 144) {
        setDirX(-1);
      } else if (positionX < -panelRef.current!.clientWidth / 2 + 144) {
        setDirX(1);
      }
      if (positionY > panelRef.current!.clientHeight / 2 - 288) {
        setDirY(-1);
      } else if (positionY < -panelRef.current!.clientHeight / 2 + 144) {
        setDirY(1);
      }

      setPositionX((prevPositionX) => prevPositionX + dirX * speed);
      setPositionY((prevPositionY) => prevPositionY + dirY * speed);
    }, 15);

    return () => {
      clearInterval(interval);
    };
  }, [positionX, positionY, rotationX, rotationY, dirX, dirY, speed]);

  return (
    <div
      className="w-10/12 flex flex-col  justify-center items-center h-screen min-h-screen bg-gray-100 relative"
      ref={panelRef}
    >
      <h1 className="text-4xl font-bold absolute top-10 left-10 animate-bounce z-10">Touch Cube</h1>
      <div
        id="dice"
        className="w-48 h-48 relative"
        ref={diceRef}
        onMouseEnter={handleMouseEnter}
        style={{
          transform: `translateX(${positionX}px) translateY(${positionY}px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="w-36 h-36 bg-blue-500 absolute" style={{ transform: "rotateY(90deg) translateZ(72px)" }}></div>
        <div className="w-36 h-36 bg-blue-500 absolute" style={{ transform: "rotateY(-90deg) translateZ(72px)" }}></div>
        <div className="w-36 h-36 bg-red-500 absolute" style={{ transform: "rotateX(90deg) translateZ(72px)" }}></div>
        <div className="w-36 h-36 bg-red-500 absolute" style={{ transform: "rotateX(-90deg) translateZ(72px)" }}></div>
        <div
          className="w-36 h-36 bg-green-500 absolute"
          style={{ transform: "rotateY(180deg) translateZ(72px)" }}
        ></div>
        <div className="w-36 h-36 bg-green-500 absolute" style={{ transform: "rotateY(0deg) translateZ(72px)" }}></div>
      </div>
    </div>
  );
};

export default Cube;
