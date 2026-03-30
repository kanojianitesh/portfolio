import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/about/About";
import Research from "./pages/research/Research";
import Publications from "./pages/publications/Publications";
import Teaching from "./pages/teaching/Teaching";
import Fun from "./pages/fun/Fun";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router basename="/portfolio">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="container mx-auto flex-grow px-4 py-8">
            <Routes>
              <Route path="/" element={<Navigate to="/about" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/research" element={<Research />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/teaching" element={<Teaching />} />
              <Route path="/fun" element={<Fun />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
