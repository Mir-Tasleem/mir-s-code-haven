import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    skills: [
      { name: "Java", level: 90, icon: "☕" },
      { name: "Spring Boot", level: 85, icon: "🍃" },
      { name: "Microservices", level: 80, icon: "🔗" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", level: 85, icon: "🐬" },
      { name: "PostgreSQL", level: 80, icon: "🐘" },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", level: 75, icon: "🐳" },
      { name: "Kubernetes", level: 70, icon: "☸️" },
    ],
  },
  {
    name: "Languages",
    skills: [
      { name: "Java", level: 90, icon: "☕" },
      { name: "Python", level: 70, icon: "🐍" },
    ],
  },
  {
    name: "Other",
    skills: [
      { name: "Frontend Development", level: 65, icon: "🌐" },
    ],
  },
];

const SkillBar = ({ skill, isVisible }: { skill: Skill; isVisible: boolean }) => {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-xs text-primary font-mono">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            transitionDelay: "0.3s",
          }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden bg-secondary/20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">What I work with</p>
          <h2 className="section-heading">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subheading mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} isVisible={isVisible} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Badges */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm mb-6">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Git", "REST APIs", "Agile", "CI/CD", "Linux", "Maven", "Gradle"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full border border-border/50 bg-secondary/30 text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
