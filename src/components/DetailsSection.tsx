import { motion } from "framer-motion";

const techStack = [
  "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Figma"
];

const DetailsSection = () => {
  return (
    <section id="details" className="py-16 md:py-24 bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Project Description
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This is where you write a detailed description of your project. Explain 
                the context, the challenges you faced, and how you approached solving them.
              </p>
              <p>
                Discuss the design decisions you made and why. What made this project 
                unique? What did you learn during the process? This section should give 
                readers a comprehensive understanding of your work.
              </p>
              <p>
                You can also mention any constraints you worked within, whether they 
                were technical, time-based, or budget-related. This adds depth to your 
                portfolio and shows your problem-solving abilities.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Timeline
              </h3>
              <p className="text-muted-foreground">
                3 months (January - March 2024)
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                My Role
              </h3>
              <p className="text-muted-foreground">
                Lead Designer & Frontend Developer
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Links
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-primary hover:underline font-medium"
                >
                  Live Demo →
                </a>
                <a
                  href="#"
                  className="text-primary hover:underline font-medium"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
