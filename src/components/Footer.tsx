import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="contact"
      className="py-16 md:py-24 border-t border-border"
    >
      <div className="section-container">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-8">
            Interested in working together or have questions about this project? 
            I'd love to hear from you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@example.com"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors"
            >
              View More Projects
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Your Name. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
