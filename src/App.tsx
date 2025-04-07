import { Routes, Route } from "react-router-dom";
import { RatesDetailScreen, RatesListScreen } from "./screens/Rates";
import { MainLayout } from "./components";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<RatesListScreen />} />
        <Route path="/:ticker" element={<RatesDetailScreen />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
