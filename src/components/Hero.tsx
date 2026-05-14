import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20">
      {/* Background Animated Gradient Mesh / Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 -right-1/4 w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[150px]"
        />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">

          {/* Left: Text content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">Available for work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-balance"
            >
              Hi, I'm <span className="text-primary">Mohammed Aziz Elkateb</span>.
              <br />
              <span className="text-foreground/80">Full Stack Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 font-light"
            >
              I build fast, scalable, and modern web applications with Spring Boot and Next.js. Architecting precise solutions from the database to the DOM.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wide">
                <a href="#projects" data-testid="hero-btn-projects">View Projects</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base border-border hover:bg-secondary font-medium tracking-wide">
                <a href="#contact" data-testid="hero-btn-contact">Contact Me</a>
              </Button>
            </motion.div>
          </div>

          {/* Right: Image with neon square frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex-shrink-0"
            data-testid="hero-image-container"
          >
            {/* Pulsing outer glow */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute blur-2xl"
              style={{
                inset: "-10px",
                background: "hsl(var(--primary) / 0.3)",
              }}
            />

            {/* Rotating beam border — conic-gradient spins to simulate light traveling around the square */}
            <div
              className="absolute overflow-hidden"
              style={{ inset: "-6px" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute"
                style={{
                  inset: "-100%",
                  background:
                    "conic-gradient(from 0deg, transparent 0%, transparent 60%, hsl(var(--primary) / 0.15) 68%, hsl(var(--primary) / 0.7) 76%, hsl(var(--primary)) 84%, white 88%, hsl(var(--primary)) 92%, hsl(var(--primary) / 0.5) 96%, transparent 100%)",
                  transformOrigin: "center center",
                }}
              />
            </div>

            {/* Static faint base border always visible */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                border: "2px solid hsl(var(--primary) / 0.25)",
              }}
            />

            {/* Corner accents */}
            {[
              { top: -4, left: -4, borderTop: true, borderLeft: true },
              { top: -4, right: -4, borderTop: true, borderRight: true },
              { bottom: -4, left: -4, borderBottom: true, borderLeft: true },
              { bottom: -4, right: -4, borderBottom: true, borderRight: true },
            ].map((corner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="absolute w-5 h-5"
                style={{
                  top: corner.top,
                  left: corner.left,
                  right: corner.right,
                  bottom: corner.bottom,
                  borderTop: corner.borderTop ? "3px solid hsl(var(--primary))" : undefined,
                  borderBottom: corner.borderBottom ? "3px solid hsl(var(--primary))" : undefined,
                  borderLeft: corner.borderLeft ? "3px solid hsl(var(--primary))" : undefined,
                  borderRight: corner.borderRight ? "3px solid hsl(var(--primary))" : undefined,
                  filter: "drop-shadow(0 0 6px hsl(var(--primary)))",
                  zIndex: 10,
                }}
              />
            ))}

            {/* Image area */}
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden"
              style={{ background: "hsl(var(--secondary))" }}
            >
              {/* Replace src below with your actual photo */}
              <img
                src="me.jpg"
                alt="Your Name — Full Stack Developer"
                className="w-full h-full object-cover"
                data-testid="hero-profile-image"
              />
              {/* Subtle overlay for depth */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary) / 0.08) 0%, transparent 60%)",
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
