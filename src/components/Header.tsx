import { Scale } from "lucide-react";
import Aklogo from "/Ak.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-royal-black/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* <div className="p-2 bg-gold/20 rounded-lg border border-gold/30"> */}
              <img src={Aklogo} alt="AK Logo" className="h-17 w-12" />
            {/* </div> */}
            <div>
              <h1 className="text-xl font-bold text-gold font-playfair">A.K BEHERA & ASSOCIATES</h1>
              <p className="text-xs text-light-gray">Advocate & Solicitors</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-light-gray hover:text-gold transition-colors font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#expertise" className="text-light-gray hover:text-gold transition-colors font-medium relative group">
              Expertise
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#faq" className="text-light-gray hover:text-gold transition-colors font-medium relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-light-gray hover:text-gold transition-colors font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;