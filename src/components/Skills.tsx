import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  SiReact, SiNextdotjs, SiAngular, SiTypescript, 
  SiSpring, SiNodedotjs, 
  SiMongodb, SiMysql, 
  SiGit, SiDocker, SiPostman, 
  SiLaravel,
  SiExpress,
  SiPostgresql,
  SiTailwindcss
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "Angular", icon: SiAngular, color: "text-[#DD0031]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38B2AC]" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", icon: SiSpring, color: "text-[#6DB33F]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Express", icon: SiExpress, color: "text-[#339933]" },
      { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "Oracle DB", icon: SiMysql, color: "text-[#F80000]" },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
    ]
  }
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-light">The tools I use to bring ideas to life. Specialized in robust backends and dynamic frontends.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold tracking-tight">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {category.skills.map((skill) => (
                      <motion.li 
                        key={skill.name} 
                        className="flex items-center gap-3 group"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className={`p-2 rounded-md bg-secondary text-lg transition-transform group-hover:scale-110 ${skill.color}`}>
                          <skill.icon />
                        </div>
                        <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
