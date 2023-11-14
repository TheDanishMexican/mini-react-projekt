import Homepage from "./components/Homepage.jsx";
import DataPage from "./components/DataPage.jsx";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import CreateForm from "./components/CreatePage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Data" element={<DataPage />} />
        <Route path="/Create" element={<CreateForm />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
