import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Gavel, FileText, Home, Users } from "lucide-react";
import { Link } from "react-router-dom";
import civilLawHero from "@/assets/civil-law-hero.jpg";

const CivilLaw = () => {
  const services = [
    {
      icon: Home,
      title: "Property Disputes",
      description: "Expert representation in property litigation, boundary disputes, title issues, and real estate conflicts with comprehensive legal strategies."
    },
    {
      icon: FileText,
      title: "Contract Disputes",
      description: "Professional handling of breach of contract cases, contract interpretation, and commercial agreement disputes."
    },
    {
      icon: Gavel,
      title: "Tort Claims",
      description: "Comprehensive representation in personal injury, defamation, negligence, and other civil wrong cases."
    },
    {
      icon: Users,
      title: "Civil Rights",
      description: "Dedicated advocacy for civil rights violations, constitutional matters, and fundamental rights protection."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${civilLawHero})` }}
        />
        <div className="absolute inset-0 bg-navy/70" />
        
        <div className="relative z-10 text-center text-white px-6">
          <Button asChild variant="outline" className="mb-6 border-white text-white hover:bg-white hover:text-navy">
            <Link to="/#expertise" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Expertise</span>
            </Link>
          </Button>
          
          <Badge className="mb-4 bg-gold text-navy">200+ Cases Resolved</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Civil Law
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive civil litigation covering property disputes, contract breaches, tort claims, and civil rights violations with expert representation in civil courts.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-gold">Expert Civil Law Representation</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our civil law practice handles disputes related to property, contracts, and personal legal matters with expert representation in civil courts. With over 200 successfully resolved cases, we provide client-centric solutions and maintain a consistent track record of success across property and contractual litigations.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={service.title} className={`card-elegant border-border hover:border-gold/50 transition-all duration-300 hover:scale-105 fade-in-up delay-${index * 150}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gold/10 rounded-lg">
                        <service.icon className="h-6 w-6 text-gold" />
                      </div>
                      <CardTitle className="text-xl text-gold">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Key Strengths */}
            <div className="card-elegant p-8 mb-16 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-6 text-center">Our Civil Law Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">200+</div>
                  <p className="text-muted-foreground">Cases Successfully Resolved</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">15+</div>
                  <p className="text-muted-foreground">Years of Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">95%</div>
                  <p className="text-muted-foreground">Client Satisfaction Rate</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="card-elegant p-8 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-6">Why Choose Our Civil Law Practice?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Comprehensive Legal Strategy</h4>
                  <p className="text-muted-foreground text-sm mb-4">Thorough case analysis and strategic planning for optimal outcomes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Court Expertise</h4>
                  <p className="text-muted-foreground text-sm mb-4">Extensive experience in civil court procedures and litigation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Client-Focused Approach</h4>
                  <p className="text-muted-foreground text-sm mb-4">Personalized attention and regular case updates</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Cost-Effective Solutions</h4>
                  <p className="text-muted-foreground text-sm mb-4">Transparent fee structure and efficient case management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CivilLaw;