import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Movie Explorer",
    description: "A beautiful Movie search app using Next.js 15.",
    image: "/projects/Movie-Store.png",
    tags: ["Next.js", "MongoDB", "TMDB API"],
    demoUrl: "https://movie-store-silk.vercel.app/",
    githubUrl: "https://github.com/kowtechenthusiast/movie-store",
  },
  {
    id: 2,
    title: "Food delivery Client",
    description: "Food delivery app with Map and Stripe payment integration.",
    image: "/projects/Swift-Go Client.png",
    tags: ["React.js", "Flask", "MySQL", "Map", "Framer-Motion", "Stripe"],
    demoUrl: "https://swiftgo-client.netlify.app/",
    githubUrl: "https://github.com/kowtechenthusiast/food-delivery",
  },
  {
    id: 3,
    title: "Hospital Database Management",
    description: "Hospital web application to all hospital related operations.",
    image: "/projects/Hospital-Database.png",
    tags: ["HTML", "CSS", "Flask", "MySQL"],
    demoUrl: "https://hospital-database-azwn.onrender.com/",
    githubUrl: "https://github.com/kowtechenthusiast/hospital-database",
  },
  {
    id: 4,
    title: "Food delivery Admin",
    description: "Admin dashboard for managing food delivery operations.",
    image: "/projects/Swift-Go Admin.png",
    tags: ["React.js", "Flask", "MySQL"],
    demoUrl: "https://swiftgo-admin.netlify.app/",
    githubUrl:
      "https://github.com/kowtechenthusiast/food-delivery/tree/main/admin-page",
  },
  {
    id: 5,
    title: "Student Learning Partner",
    description:
      "A web-based student learning platform with courses, games, community discussions using AI",
    image: "/projects/Learniverse.jpeg",
    tags: ["React.js", "Tailwind CSS", "Express.js", "MongoDB", "WebSocket"],
    demoUrl: "https://movie-store-silk.vercel.app/",
    githubUrl: "https://github.com/kowtechenthusiast/movie-store",
  },
  {
    id: 6,
    title: "Medical Appointment & Records System",
    description:
      "An application for managing medical appointments, patient records, and doctor schedules with a user-friendly interface.",
    image: "/projects/MedVault.jpeg",
    tags: ["React.js", "Tailwind CSS", "PostgreSQL", "Spring Boot"],
    demoUrl: null,
    githubUrl: "https://github.com/kowtechenthusiast/Infosys-MedVault-Frontend",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each project was carefully crafted with attention to detail,
            performance, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)]"
            >
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex justify-center flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold border rounded-md bg-secondary/50 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* DESCRIPTION: Line Clamp to 2 lines */}
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Footer - Pushed to bottom */}
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/50">
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="View Source Code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            className="cosmic-button inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
            target="_blank"
            href="https://github.com/kowtechenthusiast"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
