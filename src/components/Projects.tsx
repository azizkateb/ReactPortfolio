import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Islamic Website",
    description: "A high-performance website built with React, APIs",
    tags: ["React Js", "Tailwind CSS", "TypeScript", "Api Integration"],
    demoUrl: "https://azizkateb.github.io/Qoran/",
    githubUrl: "https://github.com/azizkateb/Qoran",
    image: "/islamic.png"
  },
  {
    title: "E-Commerce Website",
    description: "Microservices-based e-commerce backend handling inventory management, payment processing, and complex order routing at scale.",
    tags: ["Spring Boot", "Angular", "MySQL", "Docker"],
    demoUrl: "https://azizkateb.github.io/ecommerce-frontend/home",
    githubUrl: "https://github.com/azizkateb/ecommerce-frontend",
    image: "/home.png"
  },
  {
    title: "Portfolio Website Full",
    description: "A portfolio website built with React, showcasing projects and skills with a clean design.",
    tags: ["Angular", "Node.js", "Socket.io", "Redis"],
    demoUrl: "https://azizkatebportfolio.netlify.app",
    githubUrl: "https://github.com/azizkateb/portfolio2.0",
    image: "/portfolio.png"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl font-light">Showcasing complex problems solved with elegant code.</p>
          </div>
          <Button variant="ghost" className="self-start md:self-auto hover:bg-transparent hover:text-primary p-0 h-auto font-semibold">
            View full archive <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full flex flex-col overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <div className={`h-48 w-full relative overflow-hidden ${project.image ? '' : `bg-gradient-to-br ${project.gradient}`}`} style={project.image ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
                  {/* Decorative mesh/grid background for placeholder */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-sm">
                    <Button variant="secondary" className="scale-90 group-hover:scale-100 transition-transform">
                      View Details
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                  <CardDescription className="text-base font-light mt-2 h-20 overflow-hidden text-ellipsis line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-secondary text-secondary-foreground border border-border/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t border-border/50 pt-6">
                  <Button asChild variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" data-testid={`project-demo-${index}`}>
                      Live Demo <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="border-border hover:bg-secondary">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" data-testid={`project-github-${index}`}>
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
