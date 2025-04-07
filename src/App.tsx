import { Footer, Header, Loader } from "./components";
import { Routes, Route } from "react-router-dom";
import { RatesDetailScreen, RatesListScreen } from "./screens/Rates";
import { Suspense } from "react";
import { MainLayout } from "./components/MainLayout";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<RatesListScreen />} />
          <Route path="/:ticker" element={<RatesDetailScreen />} />
        </Routes>
      </MainLayout>
    </Suspense>
  );
}

export default App;
