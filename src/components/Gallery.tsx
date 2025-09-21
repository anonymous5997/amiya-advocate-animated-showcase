import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import courtVisit from "@/assets/court-visit.jpg";
import advocateCasual from "@/assets/advocate-casual.jpg";

const Gallery = () => {
  return (
    <section className="py-20 relative bg-royal-black/95">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 text-gold border-gold">
            Professional Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">In Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated service at the highest levels of legal practice
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="overflow-hidden border-gold/20 hover:border-gold/50 transition-all duration-500 fade-in-left">
            <div className="relative group">
              <img 
                src={courtVisit} 
                alt="Court Visit - Professional Legal Practice" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-gold mb-2">Court Proceedings</h3>
                <p className="text-light-gray text-sm">
                  Active representation in various court proceedings
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="overflow-hidden border-gold/20 hover:border-gold/50 transition-all duration-500 fade-in-right">
            <div className="relative group">
              <img 
                src={advocateCasual} 
                alt="Professional Advocate Portrait" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-gold mb-2">Professional Excellence</h3>
                <p className="text-light-gray text-sm">
                  Committed to providing exceptional legal services
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="text-center mt-12 fade-in-up">
          <div className="inline-flex items-center space-x-8 text-gold">
            <div className="text-center">
              <div className="text-2xl font-bold font-playfair">Supreme Court</div>
              <div className="text-sm text-muted-foreground">Practice</div>
            </div>
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <div className="text-center">
              <div className="text-2xl font-bold font-playfair">High Court</div>
              <div className="text-sm text-muted-foreground">Expertise</div>
            </div>
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <div className="text-center">
              <div className="text-2xl font-bold font-playfair">15+ Years</div>
              <div className="text-sm text-muted-foreground">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;