import { Suspense } from "react";
import { Header } from "./Header";
import { Loader } from "./Loader";
import { Footer } from "./Footer";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </Suspense>
  );
};
