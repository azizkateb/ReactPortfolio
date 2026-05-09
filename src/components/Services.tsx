import { motion } from "framer-motion";
import { Layers, Server, Layout, Database } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Full Stack Development",
    description: "End-to-end application development seamlessly integrating robust backend logic with responsive, modern frontend interfaces.",
    icon: Layers,
  },
  {
    title: "REST API Development",
    description: "Designing and implementing secure, scalable, and well-documented RESTful APIs using Spring Boot and Node.js.",
    icon: Server,
  },
  {
    title: "UI Engineering",
    description: "Crafting pixel-perfect, highly interactive, and accessible user interfaces with React, Next.js, and modern CSS frameworks.",
    icon: Layout,
  },
  {
    title: "Database Architecture",
    description: "Structuring efficient schemas, optimizing queries, and ensuring data integrity across SQL and NoSQL databases.",
    icon: Database,
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Core Capabilities</h2>
          <p className="text-lg text-muted-foreground font-light">Comprehensive solutions tailored for scale, performance, and user experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card hover:bg-secondary/50 border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold tracking-tight">{service.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground font-light leading-relaxed mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
