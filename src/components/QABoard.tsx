export default function QABoard() {
  return (
    <div className="w-10/12 h-screen relative">
      <iframe src="https://open-mind-7.vercel.app/" className="w-full h-screen"></iframe>
      <button
        className="fixed w-10 h-10 text-4xl font-bold bottom-10 right-10 z-10"
        onClick={() => window.open("https://github.com/Team7-OpenMind/OpenMind", "_blank")}
      >
        <img className="w-10 h-10" src="logo/github.png" />
      </button>
    </div>
  );
}
