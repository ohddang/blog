export default function Chartjs() {
  return (
    <div className="w-10/12 h-screen relative">
      <iframe src="https://chartjs-alpha.vercel.app/dashboard/KRW-BTC" className="w-full h-screen"></iframe>
      <div className="text-4xl font-bold flex flex-col gap-5 absolute top-10 left-10 z-10">
        <h1></h1>
      </div>
      <button
        className="fixed w-10 h-10 text-4xl font-bold bottom-10 right-10 z-10"
        onClick={() => window.open("https://github.com/ohddang/chartjs", "_blank")}
      >
        <img className="w-10 h-10" src="logo/github.png" />
      </button>
    </div>
  );
}
