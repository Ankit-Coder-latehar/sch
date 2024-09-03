import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Trips from "./Pages/Trips";
import Pickup from "./Pages/Pickup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/pickup" element={<Pickup />} />
      </Routes>
    </>
  );
}

export default App;
