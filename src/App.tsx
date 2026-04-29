import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ExperienceEducation from "./components/ExperienceEducation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer"; // <-- Add this
import ScrollToTop from "./components/ScrollToTop"; // <-- Add this

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <ExperienceEducation />
        <Projects />
        <Skills />
        <Certifications />
      </main>
      <Footer /> {/* This shows the dark bar at the bottom */}
      <ScrollToTop /> {/* This shows the button when you scroll */}
    </div>
  );
}