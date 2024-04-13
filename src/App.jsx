import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <main className="bg-slate-300/20">
      <AnimatePresence>
        <Router>
          <Navbar />
          <AnimatedRoutes />
        </Router>
      </AnimatePresence>
    </main>
  );
}

export default App;
