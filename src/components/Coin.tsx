export default function Coin() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-500/10 relative">
      <button
        className="text-4xl font-bold absolute top-10 left-10 animate-bounce"
        onClick={() =>
          window.open(
            "https://chromewebstore.google.com/detail/upbit-gazua/hnjekbfjeongcjipokedmkkjpgffpjop?hl=ko&authuser=0&pli=1",
            "_blank"
          )
        }>
        Link👆
      </button>
      <img
        className="w-2/3 h-2/3"
        src="https://private-user-images.githubusercontent.com/68732996/310512775-79785d74-3422-4bb2-82e2-51ce759e6cea.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTczMjIwOTEsIm5iZiI6MTcxNzMyMTc5MSwicGF0aCI6Ii82ODczMjk5Ni8zMTA1MTI3NzUtNzk3ODVkNzQtMzQyMi00YmIyLTgyZTItNTFjZTc1OWU2Y2VhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjAyVDA5NDk1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTI5YWQ4YWY1YmU3Y2I1YzFlM2UwNmM4Nzc0ZWE4ZDAzMGFiMzE4N2VlYTUyNzczMWMxZDhmODc0OGM0ZWI3MzEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.6aUbFDxbmopx3U_XV-EcQ5ErM_6ygGNgkqjfIjAzAks"
      />
      <button
        className="text-4xl font-bold absolute bottom-10 right-10 z-10"
        onClick={() => window.open("https://github.com/ohddang/upbit-gazua", "_blank")}>
        <img className="w-10 h-10" src="logo/github.png" />
      </button>
    </div>
  );
}
