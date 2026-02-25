import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrincipalPage } from "./Pages/PrincipalPage";
import { ConfigPage } from "./Pages/ConfigPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrincipalPage />} />
        <Route path="/config" element={<ConfigPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
