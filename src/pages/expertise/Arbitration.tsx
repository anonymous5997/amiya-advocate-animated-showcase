import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Clock, DollarSign, Users, FileText, CheckCircle } from "lucide-react"; 
import { Link } from "react-router-dom";
// 💥 CRITICAL FIX: Changed the import to a relative path
// If you are using aliases like '@/', ensure they are configured correctly in vite.config.js or webpack.config.js.
// If the image is locally in a common folder like 'src/assets', a relative path is often safer for immediate testing.
// Assuming your assets folder is one level up from the current component file:
// If this file is in `src/pages/Arbitration.jsx` and the image is in `src/assets/arbitration-hero.jpg`, 
// you should use: import arbitrationHero from '../assets/arbitration-hero.jpg'; 
// Since I cannot know your exact file structure, I will keep the alias but advise you to check it first.
import arbitrationHero from "@/assets/arbitration-hero.jpg"; 

import React, { useState, useEffect, useRef } from "react"; 

// ======================================================================
// REUSABLE HOOK FOR SCROLL ANIMATION (Essential for fade-in on scroll)
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


const Arbitration = () => {
  // 🔥 SCROLL FIX IMPLEMENTATION: Forces the page to scroll to the top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  // 2. Hooks for Intersection Observer for scroll animations
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [advantagesRef, advantagesInView] = useInView({ threshold: 0.1 });
  const [processRef, processInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });
  const [typesRef, typesInView] = useInView({ threshold: 0.1 });
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });


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
      {/* MODIFIED Hero Section to place text below the image for better contrast and layout */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="container mx-auto px-6">
          
          {/* Back Button and Badge/Image */}
          <div className="flex flex-col items-center justify-center">
            {/* Back Button */}
            <Button asChild variant="outline" className="mb-8 border-navy text-navy hover:bg-navy/10 hover:text-navy self-start md:self-center">
              <Link to="/#expertise" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Expertise</span>
              </Link>
            </Button>

            {/* Image Placeholder - Now the main visual element */}
            <div className="w-full max-w-5xl mx-auto mb-10 shadow-2xl rounded-xl overflow-hidden">
                {/* Use the imported image as a regular <img> tag */}
                {/* If the app is still black, check the console for a 404 error on this image path! */}
                <img 
                    src={arbitrationHero} 
                    alt="Two lawyers discussing an arbitration case"
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Text Content - Now placed clearly BELOW the image */}
            <div className="relative z-10 text-center px-6">
              <Badge className="mb-4 bg-gold text-navy">80+ Cases Arbitrated</Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-navy">
                Arbitration
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
                Alternative dispute resolution through arbitration to achieve **faster, cost-effective conflict settlements** outside traditional court systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Overview (Applying animation) */}
            <div 
                ref={overviewRef}
                className={`text-center mb-16 transition-all duration-1000 ${
                  overviewInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-gold">Expert Arbitration Services</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Our arbitration practice facilitates alternative dispute resolution through arbitration to achieve faster and cost-effective conflict settlements. We provide clients with an efficient conflict management mechanism beyond conventional courts, specializing in commercial and contractual disputes.
              </p>
            </div>

            {/* Services Grid (Applying animation and hover) */}
            <div 
                ref={servicesRef}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            >
              {services.map((service, index) => (
                <Card 
                    key={service.title} 
                    className={`card-elegant border-border hover:border-gold/50 transition-all duration-1000 hover:scale-[1.02] ${
                        servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: servicesInView ? `${index * 100}ms` : "0ms" }} // Staggering effect
                >
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

            {/* Advantages (Applying animation and staggering) */}
            <div 
                ref={advantagesRef}
                className="mb-16"
            >
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Advantages of Arbitration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {advantages.map((advantage, index) => (
                  <Card 
                    key={advantage.title} 
                    className={`card-elegant border-border text-center transition-all duration-1000 hover:shadow-gold/30 hover:shadow-lg ${
                      advantagesInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                    style={{ transitionDelay: advantagesInView ? `${index * 150}ms` : "0ms" }} // Staggering effect
                  >
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

            {/* Process Steps (Applying animation and staggering) */}
            <div 
                ref={processRef}
                className="mb-16"
            >
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Our Arbitration Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <Card 
                    key={step.step} 
                    className={`card-elegant border-border text-center transition-all duration-1000 ${
                      processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: processInView ? `${index * 150}ms` : "0ms" }} // Staggering effect
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

            {/* Statistics (Applying animation and scale effect) */}
            <div 
                ref={statsRef}
                className={`card-elegant p-8 mb-16 transition-all duration-1000 ${
                  statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Our Arbitration Track Record</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { value: "80+", label: "Arbitration Cases" },
                    { value: "85%", label: "Successful Resolution Rate" },
                    { value: "6 Months", label: "Average Resolution Time" },
                    { value: "100%", label: "Confidentiality Maintained" }
                ].map((item, index) => (
                    <div key={item.label} className="text-center">
                        <div className={`text-3xl font-bold text-gold mb-2 transition-all duration-1000 ${
                            statsInView ? "scale-100" : "scale-50"
                        }`}
                        style={{ transitionDelay: statsInView ? `${index * 150}ms` : "0ms" }} // Staggered scale effect
                        >
                            {item.value}
                        </div>
                        <p className="text-muted-foreground">{item.label}</p>
                    </div>
                ))}
              </div>
            </div>

            {/* Types of Disputes (Applying animation and hover) */}
            <div 
                ref={typesRef}
                className={`card-elegant p-8 mb-12 transition-all duration-1000 ${
                  typesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h3 className="text-2xl font-bold text-gold mb-6">Types of Disputes We Handle</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "✓ Commercial Contracts", desc: "Breach of contract, supply agreements, and business partnerships" },
                  { title: "✓ Construction Disputes", desc: "Project delays, quality issues, and payment disputes" },
                  { title: "✓ Employment Disputes", desc: "Wrongful termination, compensation, and workplace conflicts" },
                  { title: "✓ International Trade", desc: "Cross-border commercial disputes and trade conflicts" }
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

            {/* Why Choose Us (Applying animation and hover) */}
            <div 
                ref={whyChooseRef}
                className={`card-elegant p-8 transition-all duration-1000 ${
                  whyChooseInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h3 className="text-2xl font-bold text-gold mb-6">Why Choose Our Arbitration Services?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "✓ Experienced Arbitrators", desc: "Access to qualified arbitrators with industry expertise" },
                  { title: "✓ Strategic Approach", desc: "Tailored arbitration strategies for optimal outcomes" },
                  { title: "✓ Efficient Process", desc: "Streamlined procedures to minimize time and costs" },
                  { title: "✓ Enforcement Support", desc: "Complete assistance with award enforcement and compliance" }
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

            {/* Call To Action (Added for engagement) */}
            <div 
                ref={ctaRef}
                className={`text-center mt-16 transition-all duration-1000 ${
                    ctaInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
              <Button asChild className="bg-gold text-navy px-12 py-4 rounded-full font-semibold text-lg hover:bg-gold/90 transform transition-transform duration-300 hover:scale-105">
                <a href="tel:+919437147208" className="block">
                  Schedule a Free Consultation
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Arbitration;