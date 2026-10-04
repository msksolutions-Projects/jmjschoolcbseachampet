import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
// import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Header from "./common/Header";
import AdmissionScroll from "./common/AdmissionScroll";

// Lazy load all page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Academics = lazy(() => import("./pages/Academics"));
const Admissions = lazy(() => import("./pages/Admissions"));
const Facilities = lazy(() => import("./pages/Facilities"));
const Clubs = lazy(() => import("./pages/Clubs"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-primary-dark font-semibold">Loading...</p>
    </div>
  </div>
);

const App = () => {
  return (
    <>
      <AdmissionScroll />
      <Header />
      {/* <Navbar /> */}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;