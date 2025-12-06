import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mirtasleem1234@gmail.com",
    href: "mailto:mirtasleem1234@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7006460278",
    href: "tel:+917006460278",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kashmir, India",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/MirTasleem",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/mir-tasleem",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    toast({
      title: "Message sent!",
      description: "Thank you! I'll get back to you soon.",
    });

    // Reset submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.05)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">Get in touch</p>
          <h2 className="section-heading">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subheading mx-auto">
            Have a project in mind or want to discuss opportunities? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Let's Talk</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border/30 hover:border-primary/30 hover:bg-secondary/50 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{info.label}</p>
                      <p className="text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-secondary/30 border border-border/30 hover:border-primary/30 hover:bg-primary/10 transition-all"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
