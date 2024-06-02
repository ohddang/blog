import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dice from "./components/Dice";
import SideBar from "./components/ui/SideBar";
import ThreeDView from "./components/ThreeDView";
import Tetris from "./components/Tetris";
import Whiteboard from "./components/Whiteboard";
import Coin from "./components/Coin";
import QABoard from "./components/QABoard";
import DashBoard from "./components/dashboard";
import Chatting from "./components/Chatting";

function App() {
  return (
    <BrowserRouter basename="/this-is-me">
      <section className="w-full h-full flex flex-row">
        <SideBar />
        <Routes>
          <Route path="/dice" element={<Dice />} />
          <Route path="/3dview" element={<ThreeDView />} />
          <Route path="/coin" element={<Coin />} />
          <Route path="/chatting" element={<Chatting />} />
          <Route path="/whiteboard" element={<Whiteboard />} />
          <Route path="/qaboard" element={<QABoard />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/tetris" element={<Tetris />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
