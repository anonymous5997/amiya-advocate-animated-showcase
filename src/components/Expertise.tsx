import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Gavel, 
  Home, 
  Briefcase, 
  Users, 
  Shield, 
  FileText,
  Car,
  Heart
} from "lucide-react";

const expertiseAreas = [
  {
    icon: Gavel,
    title: "Criminal Law",
    description: "Expert defense in criminal cases with a proven track record of successful outcomes",
    cases: "150+ Cases"
  },
  {
    icon: Home,
    title: "Property Law",
    description: "Comprehensive property legal services including documentation and disputes",
    cases: "200+ Cases"
  },
  {
    icon: Briefcase,
    title: "Corporate Law",
    description: "Business legal solutions for companies of all sizes and sectors",
    cases: "100+ Cases"
  },
  {
    icon: Users,
    title: "Family Law",
    description: "Sensitive handling of family matters with compassion and expertise",
    cases: "80+ Cases"
  },
  {
    icon: Shield,
    title: "Civil Rights",
    description: "Protecting individual rights and fighting for justice in civil matters",
    cases: "120+ Cases"
  },
  {
    icon: FileText,
    title: "Contract Law",
    description: "Drafting, reviewing, and enforcing contracts for optimal protection",
    cases: "300+ Cases"
  },
  {
    icon: Car,
    title: "Motor Accident Claims",
    description: "Comprehensive support for motor vehicle accident compensation claims",
    cases: "90+ Cases"
  },
  {
    icon: Heart,
    title: "Medical Negligence",
    description: "Specialized representation in medical malpractice and negligence cases",
    cases: "50+ Cases"
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 text-gold border-gold">
            15 Years of Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Legal Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive legal services across multiple practice areas with a commitment to excellence and client satisfaction
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <Card 
              key={area.title}
              className={`card-elegant border-border hover:border-gold/50 transition-all duration-300 hover:scale-105 fade-in-up delay-${index * 100}`}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gold/10 rounded-lg w-fit">
                  <area.icon className="h-8 w-8 text-gold" />
                </div>
                <CardTitle className="text-lg text-foreground">{area.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {area.description}
                </p>
                <Badge variant="secondary" className="bg-gold/20 text-gold border-0">
                  {area.cases}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 fade-in-up">
          <div className="card-elegant p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gold mb-4">Why Choose Our Firm?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2">✓ Proven Track Record</h4>
                <p className="text-muted-foreground text-sm">15 years of successful legal practice</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">✓ Client-Centric Approach</h4>
                <p className="text-muted-foreground text-sm">Personalized attention to every case</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">✓ Expert Knowledge</h4>
                <p className="text-muted-foreground text-sm">Deep understanding of legal complexities</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">✓ Ethical Practice</h4>
                <p className="text-muted-foreground text-sm">Highest standards of legal ethics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;