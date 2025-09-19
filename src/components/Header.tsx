import { Scale } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gold/10 rounded-lg">
              <img src={logo} alt="Legal Logo" className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gold">A.K BEHERA & ASSOCIATES</h1>
              <p className="text-xs text-muted-foreground">Advocate & Solicitors</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-foreground hover:text-gold transition-colors">About</a>
            <a href="#expertise" className="text-foreground hover:text-gold transition-colors">Expertise</a>
            <a href="#faq" className="text-foreground hover:text-gold transition-colors">FAQ</a>
            <a href="#contact" className="text-foreground hover:text-gold transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;