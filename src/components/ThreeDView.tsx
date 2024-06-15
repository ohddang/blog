import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ThreeDView() {
  const ref = useRef<HTMLDivElement>(null);
  const cubes: THREE.Mesh[] = [];
  const sidebarWidth = 192;

  useEffect(() => {
    const currentRef = ref.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    const camera = new THREE.PerspectiveCamera(75, (window.innerWidth - sidebarWidth) / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    const keyState: { [key: string]: boolean } = {};

    if (currentRef) {
      currentRef.appendChild(renderer.domElement);
    }

    for (let i = 0; i < 100; i++) {
      const geometry = new THREE.BoxGeometry();
      const color = new THREE.Color(Math.random(), Math.random(), Math.random());
      const material = new THREE.MeshLambertMaterial({ color });
      const cube = new THREE.Mesh(geometry, material);

      cube.position.x = Math.random() * 20 - 10;
      cube.position.y = Math.random() * 20 - 10;
      cube.position.z = Math.random() * 20 - 10;
      cube.rotation.x = Math.random() * 2 * Math.PI;
      cube.rotation.y = Math.random() * 2 * Math.PI;

      scene.add(cube);
      cubes.push(cube);
    }

    const light = new THREE.PointLight(0xffffff, 5, 100, 1);
    light.position.set(-50, 50, -50);
    scene.add(light);

    const light2 = new THREE.PointLight(0xffffff, 5, 100, 1);
    light2.position.set(50, 50, 50);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xffffff, 5, 100, 1);
    light.position.set(-50, -50, 50);
    scene.add(light3);

    const light4 = new THREE.PointLight(0xffffff, 5, 100, 1);
    light2.position.set(50, -50, -50);
    scene.add(light4);

    camera.position.z = 5;

    let animationId: number;
    const animate = function () {
      animationId = requestAnimationFrame(animate);
      renderer.setSize(window.innerWidth - sidebarWidth, window.innerHeight);

      const speed = 0.2;
      const rotationSpeed = 0.03;

      if (keyState["w"]) camera.position.add(camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(speed));

      if (keyState["s"]) camera.position.sub(camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(speed));

      if (keyState["ArrowLeft"]) camera.rotation.y += rotationSpeed;

      if (keyState["ArrowRight"]) camera.rotation.y -= rotationSpeed;

      if (keyState["ArrowUp"]) camera.rotation.x += rotationSpeed;

      if (keyState["ArrowDown"]) camera.rotation.x -= rotationSpeed;

      cubes.forEach((cube, i) => {
        cube.rotation.x += (0.01 * (i * i * i)) / 5000000;
        cube.rotation.y += (0.01 * (i * i * i)) / 1000000;
      });
      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener("resize", () => {
      camera.aspect = (window.innerWidth - sidebarWidth) / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth - sidebarWidth, window.innerHeight);
    });

    window.addEventListener("keydown", function (event) {
      keyState[event.key] = true;
    });

    window.addEventListener("keyup", function (event) {
      keyState[event.key] = false;
    });

    return () => {
      if (currentRef) {
        currentRef.removeChild(renderer.domElement);
      }
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-screen min-h-screen" ref={ref} />
      <div className="text-4xl font-bold absolute top-8 left-8 z-10">
        <div className="rounded p-2 bg-white/50 flex flex-col gap-5">
          <h1>Forward : W</h1>
          <h1>Backward : S</h1>
          <h1>Rotation : ⬅️⬆️⬇️➡️</h1>
        </div>
      </div>
    </div>
  );
}
