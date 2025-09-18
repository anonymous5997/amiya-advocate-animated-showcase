import { Scale, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent opacity-80" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gold/10 rounded-lg">
                <Scale className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold">A.K BEHERA & ASSOCIATES</h3>
                <p className="text-xs text-muted-foreground">Excellence in Legal Practice</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Committed to providing exceptional legal services with integrity, professionalism, and dedication to our clients' success.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-gold transition-colors text-sm">About Us</a>
              <a href="#expertise" className="text-muted-foreground hover:text-gold transition-colors text-sm">Legal Expertise</a>
              <a href="#contact" className="text-muted-foreground hover:text-gold transition-colors text-sm">Contact</a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors text-sm">Privacy Policy</a>
            </nav>
          </div>
          
          {/* Contact Summary */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Bhubaneswar, Odisha</p>
              <p className="text-muted-foreground">+91 98765 43210</p>
              <p className="text-muted-foreground">info@akbeheralaw.com</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 A.K Behera & Associates. All rights reserved.
            </p>
            <div className="flex items-center text-muted-foreground text-sm">
              Made with <Heart className="h-4 w-4 mx-1 text-gold" /> for Justice
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;