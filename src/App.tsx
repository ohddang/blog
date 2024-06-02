import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dice from "./components/Dice";
import SideBar from "./components/SideBar";
import ThreeDView from "./components/ThreeDView";

function App() {
  return (
    <BrowserRouter basename="/this-is-me">
      <section className="w-full h-full flex flex-row">
        <SideBar />
        <Routes>
          <Route path="/dice" element={<Dice />} />
          <Route path="/3dview" element={<ThreeDView />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
