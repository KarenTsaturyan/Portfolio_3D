import {
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import AnimatedRoutes from "./AnimatedRoutes";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <AnimatedRoutes />
      </AnimatePresence>
      {!isHomePage && <Footer />}
    </>
  );
}

export default App;
