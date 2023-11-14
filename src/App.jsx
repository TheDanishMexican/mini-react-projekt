import Homepage from "./components/Homepage.jsx";
import DataPage from "./components/DataPage.jsx";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Data" element={<DataPage />} />
        <Route path="/Create" element={<DataPage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
