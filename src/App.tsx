import { MotionConfig } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { legacyRoutes } from "./data/profile";
import { ThemeProvider } from "./hooks/useTheme";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const Assistant = lazy(() => import("./components/Assistant"));

/** Keeps old deep links (/projects, /contact, …) working by scrolling to the section. */
function SectionRoute() {
  const { section = "" } = useParams();
  const target = legacyRoutes[section.toLowerCase()];
  return target ? <Home scrollTo={target} /> : <NotFound />;
}

/** Defer non-critical UI until the browser is idle so it never competes with first paint. */
function useIdle() {
  const [idle, setIdle] = useState(false);
  useEffect(() => {
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(() => setIdle(true));
    else {
      const t = setTimeout(() => setIdle(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);
  return idle;
}

export default function App() {
  const idle = useIdle();

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <MotionConfig reducedMotion="user">
          <BrowserRouter>
            <div className="backdrop" aria-hidden="true" />
            <Navbar />
            <main id="main" className="overflow-x-clip">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:section" element={<SectionRoute />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            {idle && (
              <ErrorBoundary fallback={null}>
                <Suspense fallback={null}>
                  <Assistant />
                </Suspense>
              </ErrorBoundary>
            )}
          </BrowserRouter>
        </MotionConfig>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
