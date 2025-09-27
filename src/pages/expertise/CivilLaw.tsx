import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Scale, Gavel, Users, DollarSign, Clock, FileText, Landmark, Building } from "lucide-react"; 
import { Link } from "react-router-dom";
// CRITICAL FIX: Use simple relative path for robust image loading
import civilLawHero from '@/assets/civil-law-hero.jpg'; 

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

// ======================================================================
// STATIC CONTENT ARRAYS
// ======================================================================
const services = [
  {
    icon: Gavel,
    title: "Trial Litigation & Appeals",
    description: "Aggressive and strategic representation in all tiers of civil courts for complex disputes."
  },
  {
    icon: FileText,
    title: "Contract & Commercial Law",
    description: "Expert handling of breach of contract, commercial agreements, and business-to-business conflicts."
  },
  {
    icon: Building,
    title: "Property & Real Estate",
    description: "Specialized advocacy for property disputes, title issues, and landlord-tenant litigation."
  },
  {
    icon: Scale,
    title: "Tort Claims & Damages",
    description: "Representation in cases involving negligence, personal injury, defamation, and compensation recovery."
  }
];

const advantages = [
  {
    icon: Landmark,
    title: "Binding Authority",
    description: "Court judgments provide definitive, legally enforceable resolutions"
  },
  {
    icon: Clock,
    title: "Rigorous Discovery",
    description: "Full legal power to compel evidence and information from opposing parties"
  },
  {
    icon: DollarSign,
    title: "Full Compensation",
    description: "Ability to claim comprehensive damages, injunctions, and specific remedies"
  },
  {
    icon: Users,
    title: "Strategic Advocacy",
    description: "Seasoned litigators skilled in courtroom procedure and evidence presentation"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Initial Assessment",
    description: "Evaluate case merits, identify legal grounds, and define litigation strategy"
  },
  {
    step: "2",
    title: "Pleadings & Discovery",
    description: "File complaint/response and gather evidence via interrogatories and depositions"
  },
  {
    step: "3",
    title: "Pre-Trial & Settlement",
    description: "Attend hearings, mediate, and argue motions before the trial phase"
  },
  {
    step: "4",
    title: "Trial & Judgment",
    description: "Present case in court to obtain a favorable verdict and enforce judgment"
  }
];

// DATA ADDED BACK
const testimonials = [
    {
      client: "Rahul Sharma",
      feedback: "Highly professional and dedicated team. They won my property dispute with great expertise and care.",
    },
    {
      client: "Sunita Das",
      feedback: "Excellent handling of my contract case. The lawyers were empathetic and efficient.",
    },
    {
      client: "Avinash Kumar",
      feedback: "Resolved my commercial dispute swiftly while keeping me updated throughout the process.",
    },
];
// ======================================================================


const CivilLaw = () => {
  // Forces the page to scroll to the top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  // Hooks for Intersection Observer for scroll animations (Matching Arbitration structure)
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [advantagesRef, advantagesInView] = useInView({ threshold: 0.1 });
  const [processRef, processInView] = useInView({ threshold: 0.1 });
  // HOOKS ADDED BACK for Testimonials
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1 });
  // HOOKS ADDED BACK for Strengths (using statsRef for consistency)
  const [statsRef, statsInView] = useInView({ threshold: 0.1 }); 
  const [typesRef, typesInView] = useInView({ threshold: 0.1 });
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section (Structure maintained) */}
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
                    src={civilLawHero} 
                    alt="Image representing civil litigation in court"
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Text Content */}
            <div className="relative z-10 text-center px-6">
              <Badge className="mb-4 bg-gold text-navy">200+ Cases Resolved</Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-navy">
                Civil Law
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
                Comprehensive civil litigation covering **property disputes, contract breaches, and tort claims** with expert representation in civil courts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Overview */}
            <div 
                ref={overviewRef}
                className={`text-center mb-16 transition-all duration-1000 ${
                  overviewInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-gold">Strategic Civil Law & Litigation</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Our civil law practice provides robust legal defense and prosecution for a wide range of non-criminal disputes. We are committed to securing justice for our clients through meticulous preparation, aggressive advocacy, and deep knowledge of court procedures.
              </p>
            </div>

            {/* Services Grid */}
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
                        style={{ transitionDelay: servicesInView ? `${index * 100}ms` : "0ms" }} // Staggering effect
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

            {/* TESTIMONIALS SECTION (ADDED BACK) */}
            <div 
                ref={testimonialsRef}
                className={`mb-16 card-elegant p-8 transition-all duration-1000 ${
                    testimonialsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">
                Client Testimonials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map(({ client, feedback }, index) => (
                    <Card 
                        key={client} 
                        className={`p-4 transition-all duration-500 hover:shadow-lg ${
                            testimonialsInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                        }`}
                        style={{ transitionDelay: testimonialsInView ? `${index * 100}ms` : "0ms" }}
                    >
                        <blockquote className="italic text-muted-foreground text-sm">
                            &ldquo;{feedback}&rdquo;
                        </blockquote>
                        <footer className="mt-4 text-right text-xs font-semibold text-gold">
                            - {client}
                        </footer>
                    </Card>
                ))}
              </div>
            </div>
            {/* END TESTIMONIALS SECTION */}

            {/* Advantages */}
            <div 
                ref={advantagesRef}
                className="mb-16"
            >
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Key Benefits of Civil Litigation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {advantages.map((advantage, index) => {
                    const Icon = advantage.icon;
                    return (
                        <Card 
                            key={advantage.title} 
                            className={`card-elegant border-border text-center transition-all duration-1000 hover:shadow-gold/30 hover:shadow-lg ${
                              advantagesInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            }`}
                            style={{ transitionDelay: advantagesInView ? `${index * 150}ms` : "0ms" }} // Staggering effect
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

            {/* Process Steps */}
            <div 
                ref={processRef}
                className="mb-16"
            >
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Our Civil Litigation Process</h3>
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

            {/* STATISTICS / KEY STRENGTHS (4-item layout maintained, but content modified) */}
            <div 
                ref={statsRef}
                className={`card-elegant p-8 mb-16 transition-all duration-1000 ${
                  statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Our Civil Law Track Record</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    // Data from previous Key Strengths and original stats merged:
                    { value: "200+", label: "Cases Successfully Resolved" },
                    { value: "15+", label: "Years of Experience" },
                    { value: "90%", label: "Favorable Outcome Rate" },
                    { value: "95%", label: "Client Satisfaction Rate" }
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

            {/* Types of Disputes */}
            <div 
                ref={typesRef}
                className={`card-elegant p-8 mb-12 transition-all duration-1000 ${
                  typesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h3 className="text-2xl font-bold text-gold mb-6">Key Civil Practice Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "✓ Breach of Contract", desc: "Disputes over contractual obligations, non-performance, and remedies" },
                  { title: "✓ Property Litigation", desc: "Real estate disputes, landlord-tenant issues, and boundary conflicts" },
                  { title: "✓ Commercial Torts", desc: "Interference with business, unfair competition, and fraud claims" },
                  { title: "✓ Personal Injury Claims", desc: "Negligence claims, professional malpractice, and wrongful death cases" }
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

            {/* Why Choose Us */}
            <div 
                ref={whyChooseRef}
                className={`card-elegant p-8 transition-all duration-1000 ${
                  whyChooseInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h3 className="text-2xl font-bold text-gold mb-6">Why Choose Our Civil Litigation Team?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "✓ Trial-Ready Approach", desc: "We prepare every case as if it's going to trial, ensuring maximum leverage." },
                  { title: "✓ Dedicated Advocacy", desc: "Relentless pursuit of our clients' interests both in and out of the courtroom." },
                  { title: "✓ Efficient Process", desc: "Streamlined procedures to minimize time and costs where possible." },
                  { title: "✓ Complete Case Support", desc: "From initial filing through judgment enforcement, we handle all legal aspects." }
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

            {/* Call To Action */}
            <div 
                ref={ctaRef}
                className={`text-center mt-16 transition-all duration-1000 ${
                    ctaInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
              <Button asChild className="bg-gold text-navy px-12 py-4 rounded-full font-semibold text-lg hover:bg-gold/90 transform transition-transform duration-300 hover:scale-105">
                <a href="tel:+919437147208" className="block">
                  Discuss Your Civil Case
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CivilLaw;