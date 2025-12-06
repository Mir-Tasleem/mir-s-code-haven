import { GraduationCap, Briefcase, Code, Target } from "lucide-react";

const timelineItems = [
  {
    year: "2020 - 2024",
    title: "B.Tech in Information Technology",
    institution: "NIT Srinagar",
    icon: GraduationCap,
    description: "Focused on software development, data structures, and web technologies.",
  },
  {
    year: "Feb 2025 - Jul 2025",
    title: "Junior Software Developer",
    institution: "Rising Kashmir",
    icon: Briefcase,
    description: "Website maintenance and SEO optimization.",
  },
  {
    year: "Jul 2025 - Present",
    title: "Software Developer",
    institution: "Exalt Technologies",
    icon: Code,
    description: "Java Backend Developer building scalable microservices.",
  },
];

const interests = [
  { icon: "🚀", text: "Building scalable systems" },
  { icon: "📚", text: "Continuous learning" },
  { icon: "🎯", text: "Problem solving" },
  { icon: "☁️", text: "Cloud technologies" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.05)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">Get to know me</p>
          <h2 className="section-heading">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subheading mx-auto">
            A passionate software developer dedicated to building efficient and scalable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I have completed my B.Tech in Information Technology Engineering from NIT Srinagar. 
                I have worked as a Junior Software Developer at Rising Kashmir, maintaining the 
                organization's website and improving its SEO. I am currently working as a Software 
                Developer (Java Backend Developer) with 6 months of training experience.
              </p>
            </div>

            {/* Interests */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">What Drives Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="text-sm text-muted-foreground">{interest.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="glass-card p-6 md:p-8 border-l-4 border-l-primary">
              <p className="text-muted-foreground italic">
                "I believe in writing clean, maintainable code that solves real problems. 
                Every line of code should serve a purpose and every system should be built 
                with scalability in mind."
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <h3 className="text-xl font-semibold mb-8">My Journey</h3>
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-12">
                  {/* Timeline Line */}
                  {index !== timelineItems.length - 1 && (
                    <div className="absolute left-3 md:left-5 top-12 w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-primary to-transparent" />
                  )}

                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-2 top-1 w-6 h-6 md:w-6 md:h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <item.icon className="w-3 h-3 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="glass-card p-5 md:p-6 hover:border-primary/30 transition-colors group">
                    <span className="text-primary font-mono text-sm">{item.year}</span>
                    <h4 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.institution}</p>
                    <p className="text-muted-foreground text-sm mt-3">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
