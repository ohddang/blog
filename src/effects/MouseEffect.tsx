import { useEffect, useState } from "react";

function getRandomInt(min: number, max: number) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

interface Ball {
  left: number;
  top: number;
  backgroundColor: string;
  height: number;
  width: number;
}

const MouseEffect = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [balls, setBalls] = useState<Ball[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.pageX, y: e.pageY });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -1, y: -1 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    let animationFrameId: number;

    const draw = () => {
      if (mousePos.x > 0 && mousePos.y > 0) {
        const range = 15;
        const sizeInt = getRandomInt(10, 30);
        const newBall = {
          left: getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range),
          top: getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range),
          backgroundColor: `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`,
          height: sizeInt,
          width: sizeInt,
        };
        if (balls.length > 300) {
          setBalls((currentBalls) => [...currentBalls.slice(100, balls.length), newBall]);
        } else setBalls((currentBalls) => [...currentBalls, newBall]);
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos.x, mousePos.y]);

  return (
    <div id="wrap">
      {balls.map((ball) => (
        <div
          key={`${ball.left}-${ball.top}-${ball.backgroundColor}-${ball.width}`}
          className="ball"
          style={{
            position: "absolute",
            left: ball.left,
            top: ball.top,
            backgroundColor: ball.backgroundColor,
            height: ball.height,
            width: ball.width,
          }}
        />
      ))}
    </div>
  );
};

export default MouseEffect;
