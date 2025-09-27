import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Import all necessary icons
import { Scale, Building, FileText, Users, Gavel, BookOpen, CheckCircle, ArrowLeft } from "lucide-react"; 
import { Link } from "react-router-dom";

// Corrected image import names
import highCourtOdishaImage from '@/assets/high-court-odisha.jpg';   
import supremeCourtIndiaImage from '@/assets/supreme-court-of-india.jpg'; 

import CourtPracticeHero from '@/components/CourtPracticeHero'; 


import React, { useState, useEffect, useRef } from "react"; 

// ======================================================================
// REUSABLE HOOK FOR SCROLL ANIMATION
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


const CourtPractice = () => {
  // Forces the page to scroll to the top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  // Hooks for Intersection Observer for scroll animations
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1 });
  const [practicesRef, practicesInView] = useInView({ threshold: 0.1 }); 
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 }); 
  const [achievementsRef, achievementsInView] = useInView({ threshold: 0.1 }); 
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });
  const [caseTypesRef, caseTypesInView] = useInView({ threshold: 0.1 });
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });


  const practices = [
    {
      // 💥 Changed icon to Scale for "High Court Practice" 💥
      icon: Scale, 
      title: "High Court Practice",
      description: "Extensive experience in High Court litigation across various legal domains including civil, criminal, constitutional, and commercial matters.",
      cases: "300+ Cases",
      highlights: ["Civil Appeals", "Criminal Appeals", "Writ Petitions", "Commercial Disputes"]
    },
    {
      // 💥 Changed icon to Scale for "Supreme Court Practice" 💥
      icon: Scale, 
      title: "Supreme Court Practice",
      description: "Specialized practice in Supreme Court of India with chamber in New Delhi for complex legal matters, constitutional issues, and appeals.",
      cases: "50+ Cases",
      highlights: ["Special Leave Petitions", "Constitutional Matters", "Civil Appeals", "Criminal Appeals"]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: "Appellate Practice",
      description: "Expert handling of appeals in High Courts and Supreme Court with comprehensive legal research and strategic advocacy."
    },
    {
      icon: Gavel,
      title: "Constitutional Matters",
      description: "Specialized representation in constitutional law cases, fundamental rights, and public interest litigation."
    },
    {
      icon: BookOpen,
      title: "Legal Research",
      description: "Comprehensive legal research and case law analysis to support complex litigation strategies."
    },
    {
      icon: Users,
      title: "Client Representation",
      description: "Professional representation before superior courts with detailed case preparation and advocacy."
    }
  ];

  const achievements = [
    {
      title: "Supreme Court Chamber",
      description: "Established chamber in New Delhi for dedicated Supreme Court practice",
      icon: Building // Keeping original icon here, adjust if you want 'Scale' here too
    },
    {
      title: "Constitutional Expertise",
      description: "Recognized expertise in constitutional law and fundamental rights cases",
      icon: Scale
    },
    {
      title: "Appellate Success",
      description: "High success rate in appellate matters across various legal domains",
      icon: Gavel
    }
  ];
  
  const caseTypes = [
    { title: "✓ Constitutional Law", desc: "Fundamental rights, constitutional interpretation, and public interest litigation" },
    { title: "✓ Civil Appeals", desc: "Property disputes, contract appeals, and civil rights matters" },
    { title: "✓ Criminal Appeals", desc: "Criminal law appeals and bail applications in superior courts" },
    { title: "✓ Commercial Disputes", desc: "High-value commercial disputes and corporate law matters" }
  ];
  
  const whyChooseUsData = [
    { title: "✓ Strategic Advocacy", desc: "Expert advocacy with deep understanding of superior court procedures" },
    { title: "✓ Constitutional Expertise", desc: "Specialized knowledge in constitutional law and fundamental rights" },
    { title: "✓ Appellate Experience", desc: "Extensive experience in appellate practice and case strategy" },
    { title: "✓ Delhi Chamber", desc: "Dedicated chamber in New Delhi for Supreme Court matters" }
  ];


  return (
    <div className="min-h-screen bg-background">
      
      {/* Use the CourtPracticeHero component with the corrected image imports */}
      <CourtPracticeHero
        highCourtImage={highCourtOdishaImage}
        supremeCourtImage={supremeCourtIndiaImage}
        casesResolved="350+ Superior Court Cases"
        title="High Court & Supreme Court"
        subtitle="Practice"
        linkBackTo="/#expertise"
      />

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
                <span className="text-gradient-gold">Superior Court Legal Practice</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                With extensive experience in High Court litigation and specialized practice in the Supreme Court of India, we provide authoritative representation across various legal domains including constitutional law, appeals, and complex litigation matters.
              </p>
            </div>

            {/* Court Practices (Adapted to the two-sided card style) */}
            <div 
                ref={practicesRef}
                className="space-y-12 mb-16"
            >
              {practices.map((practice, index) => (
                <Card 
                    key={practice.title} 
                    className={`card-elegant border-border overflow-hidden transition-all duration-1000 hover:shadow-gold/30 hover:shadow-xl ${
                        practicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: practicesInView ? `${index * 150}ms` : "0ms" }}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-3 gap-0 ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                    
                    {/* Visual Panel (Right or Left side swap based on index) */}
                    <div className={`bg-gradient-to-br from-gold/10 to-navy/10 p-8 flex items-center justify-center ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="text-center">
                        {/* Now both will use the Scale icon */}
                        <practice.icon className="h-24 w-24 text-gold mx-auto mb-4 opacity-50" />
                        <h3 className="text-xl font-bold text-gold">{practice.title}</h3>
                      </div>
                    </div>
                    
                    {/* Content Panel */}
                    <div className={`lg:col-span-2 p-8 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="p-4 bg-gold/10 rounded-lg">
                          {/* Now both will use the Scale icon */}
                          <practice.icon className="h-8 w-8 text-gold" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-gold">{practice.title}</CardTitle>
                          <Badge className="bg-gold/20 text-gold border-0 mt-2 font-semibold">
                            {practice.cases}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {practice.description}
                      </p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Practice Areas:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {practice.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="outline" className="justify-start border-gold/30 text-gold font-normal">
                              <CheckCircle className="h-3 w-3 mr-2 fill-gold text-background" />
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Services Grid (Standard 4-item layout) */}
            <div 
                ref={servicesRef}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                    <Card 
                        key={service.title} 
                        className={`card-elegant border-border hover:border-gold/50 transition-all duration-1000 hover:scale-[1.02] ${
                            servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: servicesInView ? `${index * 150}ms` : "0ms" }}
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

            {/* Achievements (Standard 3-item layout) */}
            <div 
                ref={achievementsRef}
                className="mb-16"
            >
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Key Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                        <Card 
                            key={achievement.title} 
                            className={`card-elegant border-border text-center transition-all duration-1000 hover:shadow-gold/30 hover:shadow-lg ${
                              achievementsInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            }`}
                            style={{ transitionDelay: achievementsInView ? `${index * 150}ms` : "0ms" }}
                        >
                            <CardHeader>
                              <div className="mx-auto mb-4 p-4 bg-gold/10 rounded-lg w-fit">
                                <Icon className="h-8 w-8 text-gold" />
                              </div>
                              <CardTitle className="text-lg text-gold">{achievement.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {achievement.description}
                              </p>
                            </CardContent>
                          </Card>
                    );
                })}
              </div>
            </div>

            {/* Statistics (Standardized Layout and Animation) */}
            <div 
                ref={statsRef}
                className={`card-elegant p-8 mb-16 transition-all duration-1000 ${
                  statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Superior Court Track Record</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { value: "350+", label: "Superior Court Cases" },
                    { value: "15+", label: "Years of Practice" },
                    { value: "90%", label: "Success Rate" },
                    { value: "100+", label: "Constitutional Cases" }
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

            {/* Case Types (Standardized Layout and Animation) */}
            <div 
                ref={caseTypesRef}
                className={`card-elegant p-8 mb-12 transition-all duration-1000 ${
                  caseTypesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h3 className="text-2xl font-bold text-gold mb-6">Types of Superior Court Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseTypes.map((item, index) => (
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
              <h3 className="text-2xl font-bold text-gold mb-6">Why Choose Our Superior Court Practice?</h3>
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
                {/* Consistent phone link */}
                <a href="tel:+919437147208" className="block">
                  Consult for Superior Court Matters
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CourtPractice;