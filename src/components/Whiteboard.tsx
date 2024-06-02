export default function Whiteboard() {
  return (
    <div className="w-full h-screen bg-gray-500/10 flex justify-center items-center relative">
      <button
        className="text-4xl font-bold absolute top-10 left-10 animate-bounce"
        onClick={() => window.open("https://ohddang.github.io/whiteboard", "_blank")}>
        Link👆
      </button>
      <img
        className="w-2/3 h-2/3"
        src="https://private-user-images.githubusercontent.com/68732996/304271299-b35a2c86-a852-4f3a-89ba-3002d342ad3a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTczMjEyNTMsIm5iZiI6MTcxNzMyMDk1MywicGF0aCI6Ii82ODczMjk5Ni8zMDQyNzEyOTktYjM1YTJjODYtYTg1Mi00ZjNhLTg5YmEtMzAwMmQzNDJhZDNhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjAyVDA5MzU1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWMyNjczNTU1NWZjNzk4NWNmYTgwNzRhZTkzYTRkY2U4YjI2OWJlMDUzY2EzMjQ3MmQyN2ZiZTU0ZmI3MjdlNTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.-gf-Nhcr9rV2GvmNU5SqdFCAZ4hslNNdQ1KdLIyyV64"
      />
      <button
        className="text-4xl font-bold absolute bottom-10 right-10 z-10"
        onClick={() => window.open("https://github.com/ohddang/whiteboard", "_blank")}>
        <img className="w-10 h-10" src="logo/github.png" />
      </button>
    </div>
  );
}
