import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-display text-xl font-semibold text-foreground">
            Portfolio
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#overview" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Overview
            </a>
            <a href="#gallery" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Gallery
            </a>
            <a href="#details" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Details
            </a>
          </nav>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
