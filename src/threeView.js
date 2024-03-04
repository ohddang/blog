import * as THREE from "https://unpkg.com/three/build/three.module.js";

class App {
  constructor() {
    const divContainer = document.querySelector("#webgl_container");
    /* 다른 method 에서 참조 할 수 있도록 field 화 */
    this._divContainer = divContainer;

    /* antialias : 오브젝트들의 경계선이 계단 현상 없이 부드럽게 표현되는 옵션 */
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    /* pixel ratio : 픽셀 밀도 설정 */
    renderer.setPixelRatio(window.devicePixelRatio);
    /* renderer.domElement : canvas 타입의 Dom 객체 */
    divContainer.appendChild(renderer.domElement);
    this._renderer = renderer;

    const scene = new THREE.Scene();
    this._scene = scene;

    this._cubeArray = [];
    this._currentCubeIndex = 0;
    this._turn = false;
    this._lookCurrToNextBeginlerp = 0;
    this._lookDirectionlerp = 0;
    this._lookAtlerp = 0;

    /* 밑줄로 시작하는 field 와 method는 App 클래스 내부에서만 사용된다는 의미로 씀.
		javascript에서는 private 성격을 부여할 수 있는 기능이 없기 때문에 이와 같이 밑줄로 표현하는것이 개발자간의 약속이다) */
    this._setupCamera();
    this._setupLight();
    this._setupModel();

    /* renderer 나 camera 는 창크기가 변경 될 때 마다 크기에 맞게 속성 값을 재설정해주어야 함 */
    /* resize method를 bind 통해 넘기는 이유 : resize method 안에서 this 가 가르키는 객체가 이벤트 객체가 아닌 App 클래스의 객체가 되도록 하기 위함 */
    window.onresize = this.resize.bind(this);
    /* 생성자에서 무조건 한 번은 호출 : 창크기에 맞게 설정 */
    this.resize();

    requestAnimationFrame(this.render.bind(this));
  }

  _setupCamera() {
    /* 3차원 그래픽을 출력할 영역에 대한 크기를 가져옴 */
    const width = this._divContainer.clientWidth;
    const height = this._divContainer.clientHeight;
    /* 크기를 이용해서 카메라 객체 생성 */
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    camera.position.z = 2;
    this._camera = camera;
  }

  _setupLight() {
    /* 광원의 색상과 광원의 세기 값을 설정 */
    const color = 0xffffff;
    const intensity = 1;
    /* 광원 객체 생성 */
    const position = [
      { x: 100, y: 100, z: 100 },
      { x: -100, y: -100, z: -100 },
    ];

    for (let i = 0; i < position.length; i++) {
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(position[i].x, position[i].y, position[i].z);

      this._scene.add(light);
    }
  }

  /* 파란색 정육면체 mesh를 생성하는 method */
  _setupModel() {
    for (let i = 0; i < 100; ++i) {
      const size = Math.random() * 4;
      const geometry = new THREE.BoxGeometry(size, size, size);
      /* 재질 */
      // random color
      const material = new THREE.MeshPhongMaterial({ color: Math.random() * 0xffffff });

      /* mesh 생성 */
      const cube = new THREE.Mesh(geometry, material);

      cube.position.set(Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50);
      cube.speed = Math.random() * 20;
      /* scene 객체의 구성요소로 추가 */
      this._scene.add(cube);

      this._cubeArray.push(cube);
    }
    this._camera.lookAt(this._cubeArray[this._currentCubeIndex].position);
  }

  resize() {
    const width = this._divContainer.clientWidth;
    const height = this._divContainer.clientHeight;

    /* camera 속성 변경 */
    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();

    /* renderer 의 크기 설정 */
    this._renderer.setSize(width, height);
  }

  /* time : requestAnimationFrame 가 render 함수에 전달해주는 값 */
  render(time) {
    this._renderer.setClearColor(0x808080);
    /* renderer 가 scene 을 카메라 시점으로 렌더링하도록 함 */
    this._renderer.render(this._scene, this._camera);
    /* time 인자 : 렌더링이 처음 시작된 이후 경과된 시간값. millisecond unit */
    this.update(time);
    /* 생성자 코드와 동일 */
    requestAnimationFrame(this.render.bind(this));
  }

  update(time) {
    time *= 0.0005;

    this._cubeArray.forEach((cube, index) => {
      cube.rotation.x = cube.speed * time;
      cube.rotation.y = cube.speed * time;

      if (index === this._currentCubeIndex) {
        if (this._turn) {
          const targetCube = this._cubeArray[(this._currentCubeIndex + 1) % this._cubeArray.length];

          const currentLookAt = cube.position;
          const targetLookAt = targetCube.position;

          this._lookAtlerp += 0.005;
          if (this._lookAtlerp > 1) this._lookAtlerp = 1;

          const newLookAt = new THREE.Vector3().lerpVectors(currentLookAt, targetLookAt, this._lookAtlerp);

          this._camera.lookAt(newLookAt);

          if (this._lookAtlerp === 1) {
            this._lookAtlerp = 0;
            this._turn = false;
            this._currentCubeIndex = (this._currentCubeIndex + 1) % this._cubeArray.length;
          }
        } else {
          const dx = this._camera.position.x - cube.position.x;
          const dy = this._camera.position.y - cube.position.y;
          const dz = this._camera.position.z - cube.position.z;

          const length = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (length < 3) {
            this._turn = true;
          }
          this._camera.lookAt(cube.position);

          this._camera.position.x -= (dx / length) * 0.1;
          this._camera.position.y -= (dy / length) * 0.1;
          this._camera.position.z -= (dz / length) * 0.1;
        }
      }
    });
  }
}

window.onload = function () {
  new App();
  webgl_container.style.display = "none";
};
