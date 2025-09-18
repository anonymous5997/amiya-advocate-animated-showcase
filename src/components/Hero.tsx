import { Button } from "@/components/ui/button";
import { Award, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-background to-navy-light opacity-90" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gold/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gold/5 rounded-full blur-2xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          <div className="mb-6">
            <Award className="h-16 w-16 text-gold mx-auto mb-4 animate-bounce" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient-gold">Advocate</span>
            <br />
            <span className="text-foreground">Amiya Kumar Behera</span>
            <br />
            <span className="text-lg text-muted-foreground">(Advocate)</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Advocate of High Court and Supreme Court delivering exceptional legal counsel with 15 years of expertise across multiple domains
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="outline" size="lg" className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-3 rounded-lg border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button variant="ghost" size="lg" className="text-gold hover:text-gold-light hover:bg-gold/10 px-8 py-3 rounded-lg transition-all duration-300">
              View Expertise
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="card-elegant p-6 rounded-lg fade-in-left">
              <div className="text-3xl font-bold text-gold mb-2">15+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="card-elegant p-6 rounded-lg fade-in-up delay-200">
              <div className="text-3xl font-bold text-gold mb-2">500+</div>
              <div className="text-muted-foreground">Cases Won</div>
            </div>
            <div className="card-elegant p-6 rounded-lg fade-in-right delay-400">
              <div className="text-3xl font-bold text-gold mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;