export default function Chatting() {
  return (
    <div className="w-full h-screen bg-gray-500/10 flex justify-center items-center relative">
      <div className="w-42 h-full flex flex-row items-end text-sm font-bold gap-1 absolute bottom-10 left-10 z-10 ">
        <div className="w-full p-2 rounded bg-white/50 flex flex-col gap-5 relative">
          <div>AWS에 배포 현재는 중단</div>
        </div>
      </div>
      <img
        className="w-2/3 h-2/3"
        src="https://private-user-images.githubusercontent.com/68732996/335859690-cf0586c6-c707-4215-a1a9-5e9320d7e4f3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTczMjYzMDUsIm5iZiI6MTcxNzMyNjAwNSwicGF0aCI6Ii82ODczMjk5Ni8zMzU4NTk2OTAtY2YwNTg2YzYtYzcwNy00MjE1LWExYTktNWU5MzIwZDdlNGYzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjAyVDExMDAwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA0ZGE0MmEyYzZlODhjOWYyNzc1MTkyNmFhM2VlNDQ0Mjc3MzcyZWMyOGNhZTMxYjczMWUxNWQxYWE3YTIzYmImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ODc7Es6cxW-ZfxAtZDJ9TTLT12rdeH7uuFH9z0ESI-4"
      />
      <button
        className="text-4xl font-bold absolute bottom-10 right-10 z-10"
        onClick={() => window.open("https://github.com/Codeit-part4-team3", "_blank")}>
        <img className="w-10 h-10" src="logo/github.png" />
      </button>
    </div>
  );
}
