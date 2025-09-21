import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Award, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const AwardModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md p-0 bg-royal-black/95 border-2 border-gold/50 overflow-hidden backdrop-blur-md">
        <div className="relative">
          {/* Solid background overlay */}
          <div className="absolute inset-0 bg-royal-black/90" />
          
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold/10" />
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gold/15 rounded-full blur-xl" />
          
          {/* Content */}
          <div className="relative p-8 text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                <Award className="h-8 w-8 text-gold" />
              </div>
              <Badge variant="outline" className="text-gold border-gold bg-gold/10 mb-4">
                🏆 Achievement Unlocked
              </Badge>
            </div>
            
            <h2 className="text-2xl font-bold text-gradient-gold mb-4">
              No. 1 Advocate
            </h2>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              of India
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Recognized for outstanding legal expertise, exceptional client service, and unwavering commitment to justice across India.
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center text-gold">
                <Award className="h-4 w-4 mr-2" />
                15+ Years of Excellence
              </div>
              <div className="flex items-center justify-center text-gold">
                <Award className="h-4 w-4 mr-2" />
                1000+ Successful Cases
              </div>
              <div className="flex items-center justify-center text-gold">
                <Award className="h-4 w-4 mr-2" />
                98% Success Rate
              </div>
            </div>
            
            <Button 
              onClick={() => setIsOpen(false)}
              className="mt-6 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-2 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Continue Exploring
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AwardModal;