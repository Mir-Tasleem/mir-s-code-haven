import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mir Tasleem | Java Backend Developer</title>
        <meta
          name="description"
          content="Mir Tasleem - Software Developer specializing in Java Backend Development, Microservices, and Cloud Technologies. Building scalable and efficient backend systems."
        />
        <meta
          name="keywords"
          content="Mir Tasleem, Java Developer, Backend Developer, Spring Boot, Microservices, Software Engineer, Portfolio"
        />
        <meta property="og:title" content="Mir Tasleem | Java Backend Developer" />
        <meta
          property="og:description"
          content="Software Developer specializing in Java Backend Development, Microservices, and Cloud Technologies."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mirtasleem.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
