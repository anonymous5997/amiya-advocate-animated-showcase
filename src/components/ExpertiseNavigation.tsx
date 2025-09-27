import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Gavel, 
  Heart, 
  FileText,
  Briefcase, 
  Shield, 
  Scale,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const expertiseAreas = [
  {
    icon: Gavel,
    title: "Civil Law",
    description: "Comprehensive civil litigation covering property disputes, contract breaches, and personal legal matters",
    cases: "200+ Cases",
    link: "/expertise/civil-law"
  },
  {
    icon: Heart,
    title: "Family & Divorce Law",
    description: "Expert divorce lawyers providing comprehensive family law services with sensitivity and legal precision",
    cases: "150+ Cases",
    link: "/expertise/family-law"
  },
  {
    icon: FileText,
    title: "Section 138 N.I. Act (Cheque Dishonour)",
    description: "Specialized expertise in negotiable instruments law and cheque bounce cases with proven recovery track record",
    cases: "180+ Cases",
    link: "/expertise/cheque-dishonour"
  },
  {
    icon: Briefcase,
    title: "Corporate & Commercial Law",
    description: "Complete business legal solutions for compliance, contracts, mergers, and commercial dispute resolution",
    cases: "800+ Cases",
    link: "/expertise/corporate-law"
  },
  {
    icon: Shield,
    title: "Arbitration",
    description: "Alternative dispute resolution through arbitration for faster, cost-effective conflict settlements",
    cases: "80+ Cases",
    link: "/expertise/arbitration"
  },
  {
    icon: Scale,
    title: "High Court & Supreme Court Practice",
    description: "Expert representation in High Court and Supreme Court with specialized chambers in New Delhi",
    cases: "350+ Cases",
    link: "/expertise/court-practice"
  }
];

const ExpertiseNavigation = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <Card 
              key={area.title}
              className={`group card-elegant border-border hover:border-gold/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl fade-in-up delay-${index * 100}`}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gold/10 rounded-lg w-fit group-hover:bg-gold/20 transition-colors">
                  <area.icon className="h-8 w-8 text-gold" />
                </div>
                <CardTitle className="text-lg text-foreground group-hover:text-gold transition-colors">{area.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
                
                <Badge variant="secondary" className="bg-gold/20 text-gold border-0 group-hover:bg-gold/30 transition-colors">
                  {area.cases}
                </Badge>
                
                <Button asChild className="w-full bg-gold hover:bg-gold/90 text-navy">
                  <Link to={area.link} className="flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
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

export default ExpertiseNavigation;