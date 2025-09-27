import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Clock, DollarSign, Users, FileText, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import arbitrationHero from "@/assets/arbitration-hero.jpg";

const Arbitration = () => {
  const services = [
    {
      icon: Shield,
      title: "Commercial Arbitration",
      description: "Expert handling of commercial disputes through arbitration for business conflicts and contractual disagreements."
    },
    {
      icon: FileText,
      title: "Arbitration Agreement Drafting",
      description: "Professional drafting of arbitration clauses and agreements to ensure effective dispute resolution mechanisms."
    },
    {
      icon: Users,
      title: "Mediation Services",
      description: "Skilled mediation services to facilitate mutual understanding and amicable resolution of disputes."
    },
    {
      icon: CheckCircle,
      title: "Award Enforcement",
      description: "Legal assistance in enforcement of arbitral awards and ensuring compliance with arbitration decisions."
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Faster Resolution",
      description: "Arbitration typically resolves disputes 3-5x faster than traditional court litigation"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Significantly lower costs compared to lengthy court proceedings and litigation expenses"
    },
    {
      icon: Shield,
      title: "Confidential Process",
      description: "Private proceedings protect business reputation and confidential information"
    },
    {
      icon: Users,
      title: "Expert Arbitrators",
      description: "Industry experts with specialized knowledge make informed decisions"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Assess dispute suitability for arbitration and develop strategy"
    },
    {
      step: "2",
      title: "Arbitrator Selection",
      description: "Choose qualified arbitrators with relevant expertise"
    },
    {
      step: "3",
      title: "Arbitration Proceedings",
      description: "Present case with evidence and legal arguments"
    },
    {
      step: "4",
      title: "Award & Enforcement",
      description: "Obtain arbitral award and ensure proper enforcement"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${arbitrationHero})` }}
        />
        <div className="absolute inset-0 bg-navy/70" />
        
        <div className="relative z-10 text-center text-white px-6">
          <Button asChild variant="outline" className="mb-6 border-white text-white hover:bg-white hover:text-navy">
            <Link to="/#expertise" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Expertise</span>
            </Link>
          </Button>
          
          <Badge className="mb-4 bg-gold text-navy">80+ Cases Arbitrated</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Arbitration
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Alternative dispute resolution through arbitration to achieve faster, cost-effective conflict settlements outside traditional court systems.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Overview */}
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-gold">Expert Arbitration Services</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Our arbitration practice facilitates alternative dispute resolution through arbitration to achieve faster and cost-effective conflict settlements. We provide clients with an efficient conflict management mechanism beyond conventional courts, specializing in commercial and contractual disputes.
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

            {/* Advantages */}
            <div className="mb-16 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Advantages of Arbitration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {advantages.map((advantage, index) => (
                  <Card key={advantage.title} className={`card-elegant border-border text-center fade-in-up delay-${index * 100}`}>
                    <CardHeader>
                      <div className="mx-auto mb-4 p-3 bg-gold/10 rounded-lg w-fit">
                        <advantage.icon className="h-6 w-6 text-gold" />
                      </div>
                      <CardTitle className="text-lg text-gold">{advantage.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {advantage.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Process Steps */}
            <div className="mb-16 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Our Arbitration Process</h3>
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

            {/* Statistics */}
            <div className="card-elegant p-8 mb-16 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Our Arbitration Track Record</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">80+</div>
                  <p className="text-muted-foreground">Arbitration Cases</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">85%</div>
                  <p className="text-muted-foreground">Successful Resolution Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">6 Months</div>
                  <p className="text-muted-foreground">Average Resolution Time</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">100%</div>
                  <p className="text-muted-foreground">Confidentiality Maintained</p>
                </div>
              </div>
            </div>

            {/* Types of Disputes */}
            <div className="card-elegant p-8 mb-12 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-6">Types of Disputes We Handle</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Commercial Contracts</h4>
                  <p className="text-muted-foreground text-sm mb-4">Breach of contract, supply agreements, and business partnerships</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Construction Disputes</h4>
                  <p className="text-muted-foreground text-sm mb-4">Project delays, quality issues, and payment disputes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Employment Disputes</h4>
                  <p className="text-muted-foreground text-sm mb-4">Wrongful termination, compensation, and workplace conflicts</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ International Trade</h4>
                  <p className="text-muted-foreground text-sm mb-4">Cross-border commercial disputes and trade conflicts</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="card-elegant p-8 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-6">Why Choose Our Arbitration Services?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Experienced Arbitrators</h4>
                  <p className="text-muted-foreground text-sm mb-4">Access to qualified arbitrators with industry expertise</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Strategic Approach</h4>
                  <p className="text-muted-foreground text-sm mb-4">Tailored arbitration strategies for optimal outcomes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Efficient Process</h4>
                  <p className="text-muted-foreground text-sm mb-4">Streamlined procedures to minimize time and costs</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Enforcement Support</h4>
                  <p className="text-muted-foreground text-sm mb-4">Complete assistance with award enforcement and compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Arbitration;