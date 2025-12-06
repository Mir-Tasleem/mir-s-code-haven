import { Building2, Calendar, MapPin, ArrowUpRight } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    company: "Exalt Technologies",
    position: "Software Developer",
    duration: "July 2025 - Present",
    location: "Remote",
    current: true,
    responsibilities: [
      "Working as a Java Backend Developer",
      "Building scalable microservices architecture",
      "Implementing RESTful APIs and service integrations",
      "Collaborating with cross-functional teams for product development",
    ],
    technologies: ["Java", "Spring Boot", "Microservices", "Docker", "Kubernetes"],
  },
  {
    company: "Rising Kashmir",
    position: "Junior Software Developer",
    duration: "Feb 2025 - Jul 2025",
    location: "Kashmir, India",
    responsibilities: [
      "SEO optimization and website maintenance",
      "Improved site performance by 20%",
      "Managed content management systems",
      "Implemented responsive design improvements",
    ],
    technologies: ["JavaScript", "SEO", "WordPress", "Analytics"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.06)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">Where I've worked</p>
          <h2 className="section-heading">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subheading mx-auto">
            My professional journey and the impact I've made along the way.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connection Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
              )}

              <div className="glass-card p-6 md:p-8 hover:border-primary/30 transition-all duration-300 md:ml-12">
                {/* Current Badge */}
                {exp.current && (
                  <div className="absolute -top-3 right-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Current
                  </div>
                )}

                {/* Timeline Dot - Hidden on mobile */}
                <div className="hidden md:flex absolute -left-6 top-8 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                      {exp.position}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2 mb-6">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li
                      key={respIndex}
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                    >
                      <span className="text-primary mt-1.5">▹</span>
                      {resp}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
