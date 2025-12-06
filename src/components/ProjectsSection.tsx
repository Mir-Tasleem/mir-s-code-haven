import { ExternalLink, Github, Folder, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
  featured?: boolean;
  comingSoon?: boolean;
}

const projects: Project[] = [
  {
    title: "E-Commerce Backend System",
    description:
      "A microservice-based e-commerce system handling orders, inventory management, and sending notifications to customers. Built with clean architecture principles and event-driven communication.",
    technologies: ["Java", "Spring Boot", "Microservices", "Docker", "Kubernetes", "Kafka"],
    githubLink: "https://github.com/MirTasleem",
    featured: true,
  },
  {
    title: "Task Management API",
    description:
      "RESTful API for task management with user authentication, role-based access control, and real-time updates using WebSockets.",
    technologies: ["Java", "Spring Security", "PostgreSQL", "WebSocket"],
    comingSoon: true,
  },
  {
    title: "Cloud-Native Blog Platform",
    description:
      "A scalable blogging platform with content management, user subscriptions, and analytics dashboard.",
    technologies: ["Java", "Spring Cloud", "MySQL", "Redis", "AWS"],
    comingSoon: true,
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      className={`group glass-card overflow-hidden transition-all duration-300 hover:border-primary/30 hover:scale-[1.02] ${
        project.featured ? "md:col-span-2 lg:col-span-2" : ""
      } ${project.comingSoon ? "opacity-75" : ""}`}
    >
      {/* Project Header */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <Folder className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-3">
            {project.comingSoon && (
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                <Clock className="w-3 h-3" />
                Coming Soon
              </span>
            )}
            {project.githubLink && !project.comingSoon && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
            )}
            {project.liveLink && !project.comingSoon && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded bg-secondary/50 text-xs font-mono text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Featured project extra styling */}
      {project.featured && (
        <div className="px-6 pb-6 md:px-8 md:pb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </Button>
        </div>
      )}
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 relative overflow-hidden bg-secondary/20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--primary)/0.08)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">What I've built</p>
          <h2 className="section-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            A collection of projects that showcase my skills and experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* More Projects Link */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a
              href="https://github.com/MirTasleem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
