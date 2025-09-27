import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Clock, DollarSign, Scale, Users, Gavel, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
// CRITICAL FIX: Use simple relative path for robust image loading
import chequeDishonourHero from '@/assets/cheque-dishonour-hero.jpg'; 

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


const ChequeDishonour = () => {
  // Forces the page to scroll to the top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  // Hooks for Intersection Observer for scroll animations (Matching Arbitration structure)
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [processRef, processInView] = useInView({ threshold: 0.1 }); // Renamed from advantages to match structure
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });
  const [expertiseRef, expertiseInView] = useInView({ threshold: 0.1 }); // Renamed from typesRef
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });

  // Renamed the data array for structure consistency (original services)
  const serviceAreas = [ 
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

  // Renamed the data array for structure consistency (original processSteps)
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
  
  // Custom Key Benefits section mapped to the standard 4-column advantage grid
  const keyBenefits = [
      {
          icon: Gavel,
          title: "Criminal Remedy",
          description: "Initiate criminal proceedings to enforce payment, unlike purely civil suits."
      },
      {
          icon: DollarSign,
          title: "Double the Debt",
          description: "Potential to recover up to twice the cheque amount as penalty/fine."
      },
      {
          icon: Clock,
          title: "Time-Bound Action",
          description: "Legal process has strict, short deadlines forcing swift resolution."
      },
      {
          icon: Users,
          title: "Personal Liability",
          description: "Directors/Signatories are personally liable, increasing compliance pressure."
      }
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

            {/* Image Placeholder - Uses standard image tag */}
            <div className="w-full max-w-5xl mx-auto mb-10 shadow-2xl rounded-xl overflow-hidden">
                <img 
                    src={chequeDishonourHero} 
                    alt="Cheque dishonour document with legal stamp"
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Text Content */}
            <div className="relative z-10 text-center px-6">
              <Badge className="mb-4 bg-gold text-navy">180+ Cases Resolved</Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-navy">
                Section 138 N.I. Act
              </h1>
              <span className="text-2xl md:text-4xl font-extrabold mb-4 text-gold block">(Cheque Dishonour)</span>
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
                Specialized expertise in negotiable instruments law, cheque bounce cases, and effective recovery strategies with a proven track record in debt recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20"> {/* Standard vertical padding */}
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto"> {/* Standard wide container */}
            
            {/* Overview (Standardized Layout and Animation) */}
            <div 
                ref={overviewRef}
                className={`text-center mb-16 transition-all duration-1000 ${
                  overviewInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-gold">Expert Cheque Dishonour Legal Services</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                We specialize in negotiable instruments law, including cheque bounce cases under Section 138 of the Negotiable Instruments Act. Our expertise lies in swift filing of complaints, effective recovery strategies, and proven track records for successful client outcomes.
              </p>
            </div>

            {/* Services Grid (Standardized Layout and Animation) */}
            <div 
                ref={servicesRef}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            >
              {serviceAreas.map((service, index) => {
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

            {/* Key Benefits (Mapped to the standard 4-column Advantages Grid) */}
            <div 
                ref={processRef}
                className="mb-16"
            >
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Key Legal Advantages of Section 138</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {keyBenefits.map((advantage, index) => {
                    const Icon = advantage.icon;
                    return (
                        <Card 
                            key={advantage.title} 
                            className={`card-elegant border-border text-center transition-all duration-1000 hover:shadow-gold/30 hover:shadow-lg ${
                              processInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            }`}
                            style={{ transitionDelay: processInView ? `${index * 150}ms` : "0ms" }}
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


            {/* Process Steps (Standardized Layout and Animation) */}
            <div 
                ref={expertiseRef} // Renamed ref to use 'expertiseRef' for a new section
                className="mb-16"
            >
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Our Section 138 Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <Card 
                    key={step.step} 
                    className={`card-elegant border-border text-center transition-all duration-1000 ${
                      expertiseInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: expertiseInView ? `${index * 150}ms` : "0ms" }}
                  >
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

            {/* Statistics (Standardized Layout and Animation) */}
            <div 
                ref={statsRef}
                className={`card-elegant p-8 mb-16 transition-all duration-1000 ${
                  statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Our Recovery Track Record</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { value: "180+", label: "Cases Successfully Handled" },
                    { value: "90%", label: "Recovery Success Rate" },
                    { value: "30 Days", label: "Average Legal Notice Time" },
                    { value: "15+ Years", label: "Specialized Experience" }
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

            {/* Expertise Areas (Standardized Layout and Animation) */}
            <div 
                ref={processRef} // Reusing processRef since we already used all the standard ones
                className={`card-elegant p-8 transition-all duration-1000 ${
                  processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h3 className="text-2xl font-bold text-gold mb-6">Our Specialized Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "✓ Swift Legal Action", desc: "Immediate legal notice and complaint filing within statutory time limits." },
                  { title: "✓ Expert Documentation", desc: "Comprehensive case preparation with all required legal documentation." },
                  { title: "✓ Recovery Strategies", desc: "Proven methods for maximum debt recovery through legal proceedings." },
                  { title: "✓ Court Representation", desc: "Expert advocacy and representation in court proceedings." }
                ].map((item, index) => (
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

            {/* Call To Action (Standardized Layout and Animation) */}
            <div 
                ref={ctaRef}
                className={`text-center mt-16 transition-all duration-1000 ${
                    ctaInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
              <Button asChild className="bg-gold text-navy px-12 py-4 rounded-full font-semibold text-lg hover:bg-gold/90 transform transition-transform duration-300 hover:scale-105">
                <a href="tel:+919437147208" className="block">
                  Start Your Recovery Case Today
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ChequeDishonour;