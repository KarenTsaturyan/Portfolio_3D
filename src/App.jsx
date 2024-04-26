import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import AnimatedRoutes from "./AnimatedRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <AnimatePresence>
          <AnimatedRoutes />
        </AnimatePresence>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
