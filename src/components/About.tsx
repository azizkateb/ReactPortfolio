import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Architecting <span className="text-primary">precision</span>, line by line.
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            <p>
              I am a Full Stack Developer specializing in building robust, high-performance applications with Spring Boot and Next.js. I don't just write code; I architect systems that scale, focusing on clean patterns, maintainability, and exceptional user experiences.
            </p>
            <p>
              With a deep understanding of both backend infrastructure and frontend architecture, I bridge the gap between complex data logic and intuitive interfaces. I believe in pragmatic engineering: choosing the right tool for the job, writing self-documenting code, and shipping products that matter.
            </p>
          </div>
          
          <div className="mt-12 pt-12 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Experience", value: "2+ Years" },
              { label: "Projects", value: "20+" },
              { label: "Clients", value: "25+" },
              { label: "Commitment", value: "100%" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-mono">{stat.value}</p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
