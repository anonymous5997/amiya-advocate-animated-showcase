import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Clock, DollarSign, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import chequeDishonourHero from "@/assets/cheque-dishonour-hero.jpg";

const ChequeDishonour = () => {
  const services = [
    {
      icon: FileText,
      title: "Cheque Bounce Cases",
      description: "Expert handling of Section 138 cases with swift complaint filing and effective legal strategies for maximum recovery."
    },
    {
      icon: Clock,
      title: "Speedy Resolution",
      description: "Quick legal action within statutory time limits to ensure maximum chances of successful recovery and legal remedy."
    },
    {
      icon: DollarSign,
      title: "Recovery Strategies",
      description: "Proven track record in debt recovery through legal proceedings and effective negotiation for out-of-court settlements."
    },
    {
      icon: Scale,
      title: "Negotiable Instruments Law",
      description: "Comprehensive expertise in negotiable instruments legislation, banking laws, and commercial transaction disputes."
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Immediate Legal Notice",
      description: "Send legal notice within 30 days of cheque bounce with proper legal formatting and statutory requirements."
    },
    {
      step: "2",
      title: "Filing Complaint",
      description: "File complaint in appropriate court within one month of notice period expiry with complete documentation."
    },
    {
      step: "3",
      title: "Court Proceedings",
      description: "Represent clients in court proceedings with expert advocacy and comprehensive case preparation."
    },
    {
      step: "4",
      title: "Recovery & Settlement",
      description: "Achieve successful recovery through court orders or negotiate favorable out-of-court settlements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${chequeDishonourHero})` }}
        />
        <div className="absolute inset-0 bg-navy/70" />
        
        <div className="relative z-10 text-center text-white px-6">
          <Button asChild variant="outline" className="mb-6 border-white text-white hover:bg-white hover:text-navy">
            <Link to="/#expertise" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Expertise</span>
            </Link>
          </Button>
          
          <Badge className="mb-4 bg-gold text-navy">180+ Cases Resolved</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Section 138 N.I. Act
            <br />
            <span className="text-gold">(Cheque Dishonour)</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Specialized expertise in negotiable instruments law, cheque bounce cases, and effective recovery strategies with proven track record in debt recovery.
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
                <span className="text-gradient-gold">Expert Cheque Dishonour Legal Services</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We specialize in negotiable instruments law, including cheque bounce cases under Section 138 of the Negotiable Instruments Act. Our expertise lies in swift filing of complaints, effective recovery strategies, and proven track records for successful client outcomes. We handle legal complexities while protecting client businesses and interests.
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

            {/* Process Steps */}
            <div className="mb-16 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Our Section 138 Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <Card key={step.step} className={`card-elegant border-border text-center fade-in-up delay-${index * 100}`}>
                    <CardHeader>
                      <div className="mx-auto mb-4 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                        <span className="text-gold font-bold text-lg">{step.step}</span>
                      </div>
                      <CardTitle className="text-lg text-gold">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="card-elegant p-8 mb-16 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-6 text-center">Why Choose Our Section 138 Services?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">180+</div>
                  <p className="text-muted-foreground">Cases Successfully Handled</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">90%</div>
                  <p className="text-muted-foreground">Recovery Success Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">30 Days</div>
                  <p className="text-muted-foreground">Average Case Resolution</p>
                </div>
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="card-elegant p-8 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-6">Our Specialized Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Swift Legal Action</h4>
                  <p className="text-muted-foreground text-sm mb-4">Immediate legal notice and complaint filing within statutory time limits</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Expert Documentation</h4>
                  <p className="text-muted-foreground text-sm mb-4">Comprehensive case preparation with all required legal documentation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Recovery Strategies</h4>
                  <p className="text-muted-foreground text-sm mb-4">Proven methods for maximum debt recovery through legal proceedings</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Court Representation</h4>
                  <p className="text-muted-foreground text-sm mb-4">Expert advocacy and representation in court proceedings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChequeDishonour;