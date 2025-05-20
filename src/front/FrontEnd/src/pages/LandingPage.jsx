import Header from "../components/Header/Header.jsx";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import Features from "../components/Features/Features.jsx";
import Introduction from "../components/Introduction/Introduction.jsx";
import Team from "../components/Team/Team.jsx";
import "../assets/css/LandingPage.css"

function LandingPage() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <Features />
        <Introduction />
        <Team />
      </main>
    </div>
  );
}

export default LandingPage;
