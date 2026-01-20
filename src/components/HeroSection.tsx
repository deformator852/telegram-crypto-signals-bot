import { motion } from "framer-motion";
import heroImage from "@/assets/project-hero.jpg";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="tag-badge">Web App</span>
            <span className="tag-badge">UI/UX Design</span>
            <span className="tag-badge">2024</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            Project Name
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A brief tagline describing the project's purpose and impact. 
            This is where you capture the essence of what makes this project special.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="image-card aspect-video"
        >
          <img
            src={heroImage}
            alt="Project Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
