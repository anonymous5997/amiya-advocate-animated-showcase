import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Briefcase, Building, FileText, Users, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import corporateLawHero from "@/assets/corporate-law-hero.jpg";

const CorporateLaw = () => {
  const services = [
    {
      icon: Building,
      title: "Business Compliance",
      description: "Comprehensive regulatory compliance guidance ensuring your business meets all legal requirements and industry standards."
    },
    {
      icon: FileText,
      title: "Contract Drafting & Review",
      description: "Expert contract drafting, review, and negotiation for business agreements, partnerships, and commercial transactions."
    },
    {
      icon: TrendingUp,
      title: "Mergers & Acquisitions",
      description: "Strategic legal support for M&A transactions, due diligence, and corporate restructuring with risk mitigation."
    },
    {
      icon: Shield,
      title: "Commercial Dispute Resolution",
      description: "Effective resolution of commercial disputes through negotiation, arbitration, and litigation when necessary."
    },
    {
      icon: Users,
      title: "Corporate Governance",
      description: "Legal guidance on corporate governance, board compliance, and shareholder rights protection."
    },
    {
      icon: Briefcase,
      title: "Business Formation",
      description: "Complete legal assistance in business formation, incorporation, and structuring for optimal legal and tax benefits."
    }
  ];

  const clientHighlights = [
    {
      company: "Bridge & Roof Company",
      service: "Corporate Legal Advisory",
      description: "Comprehensive legal support for infrastructure projects and corporate compliance"
    },
    {
      company: "Manufacturing Sector Clients",
      service: "Contract Management",
      description: "Large-scale contract drafting and commercial dispute resolution"
    },
    {
      company: "Technology Companies",
      service: "Regulatory Compliance",
      description: "Legal compliance for digital businesses and intellectual property protection"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${corporateLawHero})` }}
        />
        <div className="absolute inset-0 bg-navy/70" />
        
        <div className="relative z-10 text-center text-white px-6">
          <Button asChild variant="outline" className="mb-6 border-white text-white hover:bg-white hover:text-navy">
            <Link to="/#expertise" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Expertise</span>
            </Link>
          </Button>
          
          <Badge className="mb-4 bg-gold text-navy">800+ Cases Resolved</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Corporate & Commercial Law
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Complete business legal solutions for compliance, contracts, mergers, acquisitions, and commercial dispute resolution. Serving notable clients including Bridge & Roof Company.
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
                <span className="text-gradient-gold">Comprehensive Business Legal Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                We provide advisory services to businesses on compliance, contracts, mergers, acquisitions, and dispute resolution. With over 800 successfully resolved cases, our team ensures risk mitigation and legal assurance in commercial matters for clients across various industries.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={service.title} className={`card-elegant border-border hover:border-gold/50 transition-all duration-300 hover:scale-105 fade-in-up delay-${index * 100}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-gold/10 rounded-lg">
                        <service.icon className="h-6 w-6 text-gold" />
                      </div>
                      <CardTitle className="text-lg text-gold">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Client Highlights */}
            <div className="mb-16 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Notable Client Engagements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {clientHighlights.map((client, index) => (
                  <Card key={client.company} className={`card-elegant border-border fade-in-up delay-${index * 150}`}>
                    <CardHeader>
                      <CardTitle className="text-lg text-gold">{client.company}</CardTitle>
                      <Badge variant="outline" className="w-fit border-gold/30 text-gold">
                        {client.service}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {client.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="card-elegant p-8 mb-16 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Our Corporate Law Track Record</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">800+</div>
                  <p className="text-muted-foreground">Corporate Cases</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">50+</div>
                  <p className="text-muted-foreground">Corporate Clients</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">15+</div>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">98%</div>
                  <p className="text-muted-foreground">Client Retention</p>
                </div>
              </div>
            </div>

            {/* Industry Expertise */}
            <div className="card-elegant p-8 mb-12 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-6">Industry Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Infrastructure & Construction</h4>
                  <p className="text-muted-foreground text-sm mb-4">Legal support for construction companies and infrastructure projects</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Manufacturing</h4>
                  <p className="text-muted-foreground text-sm mb-4">Compliance and contract management for manufacturing businesses</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Technology & Digital</h4>
                  <p className="text-muted-foreground text-sm mb-4">Legal frameworks for technology companies and digital businesses</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Financial Services</h4>
                  <p className="text-muted-foreground text-sm mb-4">Regulatory compliance for financial institutions and services</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="card-elegant p-8 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-6">Why Choose Our Corporate Law Practice?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Business-Focused Solutions</h4>
                  <p className="text-muted-foreground text-sm mb-4">Legal strategies aligned with business objectives and growth</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Risk Mitigation</h4>
                  <p className="text-muted-foreground text-sm mb-4">Proactive legal counsel to minimize business risks and exposures</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Industry Knowledge</h4>
                  <p className="text-muted-foreground text-sm mb-4">Deep understanding of various industry regulations and practices</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Long-term Partnership</h4>
                  <p className="text-muted-foreground text-sm mb-4">Ongoing legal support as your business grows and evolves</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateLaw;