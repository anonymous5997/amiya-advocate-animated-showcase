import { Button } from "@/components/ui/button";
import { Award, Phone } from "lucide-react";
import advocateProfile from "@/assets/advocate-profile.jpg";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 md:pt-20 bg-royal-black">
      {/* Royal gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      
      {/* Animated royal elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gold/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-gold/10 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-5 w-2 h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent blur-sm" />
      <div className="absolute top-1/3 right-5 w-2 h-24 bg-gradient-to-b from-transparent via-gold/20 to-transparent blur-sm" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center fade-in-up">
          <div className="mb-8 relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3">
              <div className="relative mx-auto w-48 h-48 lg:w-64 lg:h-64">
                <img 
                  src={advocateProfile} 
                  alt="Amiya Kumar Behera - Advocate" 
                  className="w-full h-full object-cover rounded-full border-4 border-gold shadow-2xl"
                />
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-gold rounded-full flex items-center justify-center animate-pulse">
                  <Award className="h-6 w-6 text-royal-black" />
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 lg:text-left text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair">
                <span className="text-gold block">AMIYA KUMAR BEHERA</span>
                <div className="gold-accent-line w-32 mx-auto lg:mx-0 my-4"></div>
                <span className="text-lg md:text-xl lg:text-2xl text-light-gray block font-normal leading-relaxed">
                  Advocate of Hon'ble Supreme Court of India and High Court of Orissa
                </span>
              </h1>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Advocate of Hon'ble Supreme Court of India and High Court of Orissa delivering exceptional legal counsel with 15 years of expertise across multiple domains
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-royal-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glow-gold"
              onClick={() => window.location.href = 'tel:+919437147208'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-royal-black px-8 py-3 rounded-lg transition-all duration-300">
              View Expertise
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="card-royal p-8 rounded-xl fade-in-left">
              <div className="text-4xl font-bold text-gold mb-2 font-playfair">15+</div>
              <div className="text-light-gray font-medium">Years of Experience</div>
            </div>
            <div className="card-royal p-8 rounded-xl fade-in-up delay-200">
              <div className="text-4xl font-bold text-gold mb-2 font-playfair">1000+</div>
              <div className="text-light-gray font-medium">Cases Won</div>
            </div>
            <div className="card-royal p-8 rounded-xl fade-in-right delay-400">
              <div className="text-4xl font-bold text-gold mb-2 font-playfair">98%</div>
              <div className="text-light-gray font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;