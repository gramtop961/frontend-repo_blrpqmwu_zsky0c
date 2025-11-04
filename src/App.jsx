import Navbar from "./components/Navbar";
import HeroBooking from "./components/HeroBooking";
import TrustSection from "./components/TrustSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroBooking />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
