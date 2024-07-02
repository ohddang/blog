export default function DashBoard() {
  return (
    <div className="w-10/12 h-screen flex justify-center items-center relative">
      <iframe src="https://taskimo.vercel.app/" className="w-full h-screen"></iframe>
      <div className="w-42 h-full flex flex-row items-end text-sm font-bold gap-1 absolute bottom-10 left-10 z-10 ">
        <div className="w-full p-2 rounded bg-white/50 flex flex-col gap-5 relative">
          <div>ID : test@codeit.com</div>
          <div>PW : sprint101</div>
        </div>
      </div>
      <button
        className="fixed w-10 h-10 text-4xl font-bold bottom-10 right-10 z-10"
        onClick={() => window.open("https://github.com/Codeit3-part3-team4/Taskify", "_blank")}
      >
        <img className="w-10 h-10" src="logo/github.png" />
      </button>
    </div>
  );
}
