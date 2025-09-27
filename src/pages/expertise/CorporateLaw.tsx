import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Briefcase, Building, FileText, Users, Shield, TrendingUp } from "lucide-react"; 
import { Link } from "react-router-dom";
import corporateLawHero from '@/assets/corporate-law-hero.jpg'; 
// 💥 NEW: Import the local logo file from your assets folder 💥
import bridgeAndRoofLogo from '@/assets/bridge-and-roof-logo.png'; // Make sure you save 'image_04692b.png' as 'bridge-and-roof-logo.png' in your assets folder

import React, { useState, useEffect, useRef } from "react"; 

// ======================================================================
// REUSABLE HOOK FOR SCROLL ANIMATION (COPIED FROM CIVIL/ARBITRATION)
// ======================================================================
const useInView = (options) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target); 
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, inView];
};
// ======================================================================

// STATIC DATA
const advantages = [
    {
        icon: Shield,
        title: "Proactive Risk Mitigation",
        description: "Identify and neutralize legal risks before they impact your business operations."
    },
    {
        icon: Briefcase,
        title: "Strategic Compliance",
        description: "Ensure legal compliance without compromising business speed or innovation."
    },
    {
        icon: TrendingUp,
        title: "Transaction Expertise", // Re-added title
        description: "Skilled handling of complex mergers, acquisitions, and restructuring deals."
    },
    {
        icon: Building,
        title: "Governance & Structure",
        description: "Establish robust corporate governance frameworks for stability and trust."
    }
];

const CorporateLaw = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  // Hooks for Intersection Observer for scroll animations
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [advantagesRef, advantagesInView] = useInView({ threshold: 0.1 });
  const [highlightsRef, highlightsInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });
  const [industryRef, industryInView] = useInView({ threshold: 0.1 });
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });

  const services = [
    { icon: Building, title: "Business Compliance", description: "Comprehensive regulatory compliance guidance ensuring your business meets all legal requirements and industry standards." },
    { icon: FileText, title: "Contract Drafting & Review", description: "Expert contract drafting, review, and negotiation for business agreements, partnerships, and commercial transactions." },
    { icon: TrendingUp, title: "Mergers & Acquisitions", description: "Strategic legal support for M&A transactions, due diligence, and corporate restructuring with risk mitigation." },
    { icon: Shield, title: "Commercial Dispute Resolution", description: "Effective resolution of commercial disputes through negotiation, arbitration, and litigation when necessary." },
    { icon: Users, title: "Corporate Governance", description: "Legal guidance on corporate governance, board compliance, and shareholder rights protection." },
    { icon: Briefcase, title: "Business Formation", description: "Complete legal assistance in business formation, incorporation, and structuring for optimal legal and tax benefits." }
  ];

  // 💥 MODIFIED clientHighlights array to use the local logo import 💥
  const clientHighlights = [
    {
      company: "Bridge & Roof Company",
      logoSrc: bridgeAndRoofLogo, // Use the imported local asset
      service: "Corporate Legal Advisory",
      description: "Comprehensive legal support for infrastructure projects and corporate compliance"
    }
  ];

  const industryExpertise = [
    { title: "✓ Infrastructure & Construction", desc: "Legal support for construction companies and infrastructure projects" },
    { title: "✓ Manufacturing", desc: "Compliance and contract management for manufacturing businesses" },
    { title: "✓ Technology & Digital", desc: "Legal frameworks for technology companies and digital businesses" },
    { title: "✓ Financial Services", desc: "Regulatory compliance for financial institutions and services" }
  ];

  const whyChooseUsData = [
    { title: "✓ Business-Focused Solutions", desc: "Legal strategies aligned with business objectives and growth" },
    { title: "✓ Risk Mitigation", desc: "Proactive legal counsel to minimize business risks and exposures" },
    { title: "✓ Industry Knowledge", desc: "Deep understanding of various industry regulations and practices" },
    { title: "✓ Long-term Partnership", desc: "Ongoing legal support as your business grows and evolves" }
  ];


  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section (Standardized Structure) */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="container mx-auto px-6">
          
          {/* Back Button */}
          <div className="flex flex-col items-center justify-center">
            <Button asChild variant="outline" className="mb-8 border-navy text-navy hover:bg-navy/10 hover:text-navy self-start md:self-center">
              <Link to="/#expertise" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Expertise</span>
              </Link>
            </Button>

            {/* Image Placeholder */}
            <div className="w-full max-w-5xl mx-auto mb-10 shadow-2xl rounded-xl overflow-hidden">
                <img 
                    src={corporateLawHero} 
                    alt="Image representing corporate legal documents and city skyline"
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Text Content */}
            <div className="relative z-10 text-center px-6">
              <Badge className="mb-4 bg-gold text-navy">800+ Cases Resolved</Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-navy">
                Corporate & Commercial Law
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
                Complete business legal solutions for compliance, contracts, mergers, acquisitions, and commercial dispute resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Overview (Standardized Layout and Animation) */}
            <div 
                ref={overviewRef}
                className={`text-center mb-16 transition-all duration-1000 ${
                  overviewInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-gold">Comprehensive Business Legal Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                We provide advisory services to businesses on compliance, contracts, mergers, acquisitions, and dispute resolution. Our team ensures risk mitigation and legal assurance in commercial matters for clients across various industries.
              </p>
            </div>

            {/* Services Grid (6-item layout is unique but uses standardized card styling and animation) */}
            <div 
                ref={servicesRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                    <Card 
                        key={service.title} 
                        className={`card-elegant border-border hover:border-gold/50 transition-all duration-1000 hover:scale-[1.02] ${
                            servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: servicesInView ? `${index * 100}ms` : "0ms" }}
                    >
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gold/10 rounded-lg">
                            <Icon className="h-6 w-6 text-gold" />
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
                );
              })}
            </div>
            
            {/* Advantages (Standard 4-column layout) */}
            <div 
                ref={advantagesRef}
                className="mb-16"
            >
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Core Pillars of Our Corporate Advisory</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {advantages.map((advantage, index) => {
                    const Icon = advantage.icon;
                    return (
                        <Card 
                            key={advantage.title} 
                            className={`card-elegant border-border text-center transition-all duration-1000 hover:shadow-gold/30 hover:shadow-lg ${
                              advantagesInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            }`}
                            style={{ transitionDelay: advantagesInView ? `${index * 150}ms` : "0ms" }}
                          >
                            <CardHeader>
                              <div className="mx-auto mb-4 p-3 bg-gold/10 rounded-lg w-fit">
                                <Icon className="h-6 w-6 text-gold" />
                              </div>
                              <CardTitle className="text-lg text-gold">{advantage.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {advantage.description}
                              </p>
                            </CardContent>
                          </Card>
                    );
                })}
              </div>
            </div>


            {/* Client Highlights (Now with only one company and adjusted grid for centering) */}
            <div 
                ref={highlightsRef}
                className="mb-16"
            >
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Notable Client Engagements</h3>
              {/* MODIFIED GRID CLASSES FOR SINGLE ITEM CENTERING */}
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-2xl mx-auto">
                {clientHighlights.map((client, index) => (
                  <Card 
                    key={client.company} 
                    className={`card-elegant border-border transition-all duration-1000 ${
                      highlightsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: highlightsInView ? `${index * 150}ms` : "0ms" }}
                  >
                    <CardHeader>
                        {/* 💥 LOGO DISPLAY SECTION USING LOCAL IMPORT 💥 */}
                        {client.logoSrc && (
                            <div className="mb-4 h-12 flex items-center justify-start">
                                <img 
                                    src={client.logoSrc} 
                                    alt={`${client.company} Logo`} 
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        )}
                        {/* 💥 END LOGO DISPLAY SECTION 💥 */}
                        
                      <CardTitle className="text-xl text-gold">{client.company}</CardTitle>
                      <Badge className="w-fit bg-gold/10 text-gold">{client.service}</Badge>
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

            {/* Statistics (Standardized Layout and Animation) */}
            <div 
                ref={statsRef}
                className={`card-elegant p-8 mb-16 transition-all duration-1000 ${
                  statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Our Corporate Law Track Record</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { value: "800+", label: "Corporate Cases" },
                    { value: "50+", label: "Corporate Clients" },
                    { value: "15+", label: "Years Experience" },
                    { value: "98%", label: "Client Retention" }
                ].map((item, index) => (
                    <div key={item.label} className="text-center">
                        <div className={`text-3xl font-bold text-gold mb-2 transition-all duration-1000 ${
                            statsInView ? "scale-100" : "scale-50"
                        }`}
                        style={{ transitionDelay: statsInView ? `${index * 150}ms` : "0ms" }}
                        >
                            {item.value}
                        </div>
                        <p className="text-muted-foreground">{item.label}</p>
                    </div>
                ))}
              </div>
            </div>

            {/* Industry Expertise (Standardized Layout and Animation) */}
            <div 
                ref={industryRef}
                className={`card-elegant p-8 mb-12 transition-all duration-1000 ${
                  industryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h3 className="text-2xl font-bold text-gold mb-6">Industry Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {industryExpertise.map((item, index) => (
                    <div 
                        key={index} 
                        className="p-4 rounded-lg hover:bg-gold/10 transition-colors duration-300"
                    >
                      <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                    </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us (Standardized Layout and Animation) */}
            <div 
                ref={whyChooseRef}
                className={`card-elegant p-8 transition-all duration-1000 ${
                  whyChooseInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h3 className="text-2xl font-bold text-gold mb-6">Why Choose Our Corporate Law Practice?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyChooseUsData.map((item, index) => (
                    <div 
                        key={index} 
                        className="p-4 rounded-lg hover:bg-gold/10 transition-colors duration-300"
                    >
                      <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                    </div>
                ))}
              </div>
            </div>

            {/* Call To Action (Standardized Layout and Phone Dialing Link) */}
            <div 
                ref={ctaRef}
                className={`text-center mt-16 transition-all duration-1000 ${
                    ctaInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
              <Button asChild className="bg-gold text-navy px-12 py-4 rounded-full font-semibold text-lg hover:bg-gold/90 transform transition-transform duration-300 hover:scale-105">
                <a href="tel:+919437147208" className="block">
                  Schedule a Corporate Consultation
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateLaw;