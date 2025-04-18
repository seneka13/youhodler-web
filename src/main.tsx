import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/youhodler-web">
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
