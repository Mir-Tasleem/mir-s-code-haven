import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Java Backend Developer",
  "Software Engineer",
  "Frontend Developer",
  "Cloud Enthusiast",
  "AI Enthusiast"
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.15)_0%,_transparent_50%)]" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float delay-300" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_hsl(var(--border)/0.3)_1px,_transparent_1px),_linear-gradient(to_bottom,_hsl(var(--border)/0.3)_1px,_transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up">
              Hello, I'm
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up delay-100">
              <span className="text-foreground">Mir </span>
              <span className="text-gradient">Tasleem</span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-fade-up delay-200 h-8 md:h-10">
              <span className="text-foreground">{displayText}</span>
              <span className="text-primary animate-pulse">|</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up delay-300">
              Specializing in Microservices & Cloud Technologies. Building scalable,
              efficient backend systems with Java and Spring Boot.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-400">
              <Button
                variant="hero"
                size="lg"
                onClick={() => handleNavClick("#projects")}
                className="group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => handleNavClick("#contact")}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-8 animate-fade-up delay-500">
              <a
                href="https://github.com/Mir-Tasleem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border/50 bg-secondary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/mir-tasleem/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border/50 bg-secondary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="mailto:mirtasleem1234@gmail.com"
                className="p-3 rounded-full border border-border/50 bg-secondary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Avatar/Visual */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-up delay-200">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-[60px] animate-pulse-glow" />
              
              {/* Avatar Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-primary/30 p-2 animate-float">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary to-card flex items-center justify-center border border-border/50 overflow-hidden">
                  {/* Code-like decoration */}
                  <div className="text-center font-mono">
                    <div className="text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                      MT
                    </div>
                    <div className="text-muted-foreground text-xs md:text-sm">
                      <span className="text-primary">&lt;</span>
                      Developer
                      <span className="text-primary"> /&gt;</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -right-4 px-3 py-1.5 glass-card text-xs font-mono text-primary animate-float delay-100">
                Java
              </div>
              <div className="absolute top-1/4 -left-8 px-3 py-1.5 glass-card text-xs font-mono text-primary animate-float delay-200">
                Spring Boot
              </div>
              <div className="absolute bottom-1/4 -right-8 px-3 py-1.5 glass-card text-xs font-mono text-primary animate-float delay-300">
                Microservices
              </div>
              <div className="absolute -bottom-4 left-1/4 px-3 py-1.5 glass-card text-xs font-mono text-primary animate-float delay-400">
                Docker
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
