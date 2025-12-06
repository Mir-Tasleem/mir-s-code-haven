import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/MirTasleem",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/mir-tasleem",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:mirtasleem1234@gmail.com",
    label: "Email",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-card/50 border-t border-border/50">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="text-2xl font-bold text-gradient inline-block mb-4"
            >
              &lt;MT /&gt;
            </a>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building scalable backend solutions with passion and precision.
              Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary/30 border border-border/30 hover:border-primary/30 hover:bg-primary/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Mir Tasleem. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-destructive fill-current" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
