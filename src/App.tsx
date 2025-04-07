import { Routes, Route } from "react-router-dom";
import { RatesDetailScreen, RatesListScreen } from "./screens/Rates";
import { MainLayout, NotFoundPage } from "./components";

function App() {
  return (
    <MainLayout>
      <Routes >
        <Route path="/" element={<RatesListScreen />} />
        <Route path="/:ticker" caseSensitive element={<RatesDetailScreen />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
