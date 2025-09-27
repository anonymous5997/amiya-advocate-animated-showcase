import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, DollarSign, Home, Scale, HandHeart, Shield, CheckCircle } from "lucide-react"; 
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react"; 

// Assume these imports are correct based on your file structure
import familyLawHero from "@/assets/family-law-hero.jpg";
import maintenanceAlimony from "@/assets/maintenance-alimony.jpg";
import childCustody from "@/assets/child-custody.jpg";
import assetDivision from "@/assets/asset-division.jpg";
import judicialSeparation from "@/assets/judicial-separation.jpg";
import mediationServices from "@/assets/mediation-services.jpg";
import domesticViolence from "@/assets/domestic-violence.jpg";


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


const FamilyLaw = () => {
  // Forces the page to scroll to the top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  // Hooks for Intersection Observer for scroll animations
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [heroTextRef, heroTextInView] = useInView({ threshold: 0.1 }); 
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 }); 
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 }); 


  const subServices = [
    {
      icon: DollarSign,
      title: "Maintenance & Alimony",
      description: "Expert spousal maintenance & alimony attorneys dedicated to helping you secure your financial settlement and resolve maintenance payments. We offer reliable negotiation, compassionate client support, and effective resolution to ensure financial stability for affected spouses.",
      image: maintenanceAlimony,
      highlights: ["Financial Settlement Negotiation", "Spousal Support Planning", "Payment Resolution"]
    },
    {
      icon: Users,
      title: "Child Custody & Guardianship",
      description: "The most difficult aspect of separation is deciding custody and guardianship. We customize our services according to what is best for your children, whether you are a single parent or have joint legal custody. Our approach includes psychological insights and support for post-divorce child welfare.",
      image: childCustody,
      highlights: ["Single & Joint Custody", "Child Welfare Focus", "Psychological Support"]
    },
    {
      icon: Home,
      title: "Division of Matrimonial Assets",
      description: "Divorce assets division is never straightforward like 50:50 apportioning. It depends upon factors like earning capacity, living standard, children's responsibilities, marriage duration, etc. We assist with forensic financial analysis and legal strategies to achieve fair division.",
      image: assetDivision,
      highlights: ["Fair Asset Valuation", "Financial Analysis", "Equitable Distribution"]
    },
    {
      icon: Scale,
      title: "Judicial Separation",
      description: "If you want separation from your partner without terminating the marriage for genuine personal reasons, our separation lawyers can help you receive the decree of Judicial Separation from the Family Court with pre-litigation counseling and tailored legal strategies.",
      image: judicialSeparation,
      highlights: ["Legal Separation", "Court Representation", "Counseling Services"]
    },
    {
      icon: HandHeart,
      title: "Mediation & Alternative Disputes",
      description: "Mediation is an attempt to come to a mutually agreed resolution without involving the court. Our divorce lawyers act as professional mediators, representing client interests and promoting conflict resolution in a confidential and cost-effective manner.",
      image: mediationServices,
      highlights: ["Confidential Process", "Cost-Effective", "Mutual Resolution"]
    },
    {
      icon: Shield,
      title: "Dowry & Domestic Violence",
      description: "Domestic abuse can manifest in physical, psychological, biological, emotional, and financial forms. We handle domestic violence cases affecting men, women, and children of all ages, cultures, and backgrounds with urgent legal protection and ongoing support.",
      image: domesticViolence,
      highlights: ["Protection Orders", "Legal Shield", "Victim Support"]
    }
  ];

  const whyChooseUsData = [
    { title: "✓ Sensitive Handling", desc: "Compassionate approach to sensitive family matters" },
    { title: "✓ Child-Focused Solutions", desc: "Prioritizing children's welfare in all proceedings" },
    { title: "✓ Financial Expertise", desc: "Comprehensive financial analysis and planning" },
    { title: "✓ Alternative Resolution", desc: "Mediation and amicable settlement options" }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* NEW: Upper Header Section for "Back to Expertise" Button */}
      <section className="pt-8 pb-4">
        <div className="container mx-auto px-6">
          <div className="flex justify-start max-w-5xl mx-auto">
            <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted/50">
              <Link to="/#expertise" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Expertise</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Section (Image Banner with rounded corners and shadow) - Starts below the button */}
      <section className="relative overflow-hidden pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div 
            ref={heroRef}
            // Central container for the image, applying shadow/rounded corners
            className={`w-full max-w-5xl mx-auto mb-10 shadow-2xl rounded-xl overflow-hidden relative
              transition-all duration-1000 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >

            {/* Image Content */}
            <div className="relative h-64 md:h-80 lg:h-96 w-full"> {/* Fixed height for image */}
                <img 
                    src={familyLawHero} 
                    alt="Family Law"
                    className="w-full h-full object-cover" // Ensure image fills container
                />
            </div>
          </div>
        </div>
      </section>

      {/* Title and Tagline Section (Below the image, on black background) */}
      <section className="bg-background relative z-20 pb-16 -mt-16"> 
        <div className="container mx-auto px-6">
          <div 
            ref={heroTextRef}
            className={`text-center max-w-6xl mx-auto pt-16 transition-all duration-1000 ${
              heroTextInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Badge className="mb-4 bg-gold text-navy">150+ Family Law Cases</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Family & Divorce Law
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-muted-foreground">
              Divorce cases are a rollercoaster ride of unpredictable twists and turns. Even a seemingly simple divorce can turn into a high-stakes matter, which is why having expert divorce lawyers by your side is essential.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections (Starting immediately after the title block) */}
      <section className="py-20 pt-0">
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
                <span className="text-gradient-gold">Comprehensive Family Law Services</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Our comprehensive family law practice covers all aspects of matrimonial disputes with sensitivity, expertise, and dedication to achieving the best outcomes for our clients and their families. We provide expert divorce lawyers with in-depth expertise and powerful capabilities in family and divorce law.
              </p>
            </div>

            {/* Services Grid (Applied animations to each card) */}
            <div ref={servicesRef} className="space-y-12">
              {subServices.map((service, index) => (
                <Card 
                  key={service.title} 
                  className={`card-elegant border-border overflow-hidden transition-all duration-1000 hover:shadow-gold/30 hover:shadow-xl ${
                    servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: servicesInView ? `${index * 150}ms` : "0ms" }}
                >
                  <div className="flex flex-col"> 
                    
                    {/* 1. Header (Title) - Full width, top padding/no bottom padding */}
                    <CardHeader className="pt-6 px-6 pb-0 lg:pt-8 lg:px-8 lg:pb-0">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-gold/10 rounded-lg">
                          <service.icon className="h-6 w-6 text-gold" />
                        </div>
                        <CardTitle className="text-2xl text-gold font-bold">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    
                    {/* 2. Image (Full Width, with rounded corners and shadow) */}
                    <div className="relative w-full p-6 pt-4 lg:p-8 lg:pt-6">
                        {/* CRITICAL CHANGE HERE: 
                          1. Removed fixed height from this wrapper (h-auto or min-h-64 is better).
                          2. Changed object-cover to object-contain on the image.
                          3. Set a minimum height on the image container to ensure it maintains a visible block size.
                        */}
                        <div className="relative w-full **min-h-64** overflow-hidden rounded-xl shadow-lg bg-gray-900/50 flex items-center justify-center">
                            <img 
                                src={service.image} 
                                alt={service.title}
                                // **CHANGED:** object-contain makes the whole image visible, object-cover cuts it off.
                                className="w-full **h-auto** **object-contain** object-center py-4" 
                            />
                        </div>
                    </div>

                    {/* 3. Content (Text & Highlights) - Full width, bottom padding/no top padding */}
                    <CardContent className="pt-0 px-6 pb-6 lg:px-8 lg:pb-8">
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-xl text-foreground">Key Services:</h4>
                        <div className="flex flex-wrap gap-3">
                          {service.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="outline" className="border-gold/50 text-gold font-medium text-sm justify-start px-3 py-1">
                              <CheckCircle className="h-3.5 w-3.5 mr-2 fill-gold text-background" />
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Statistics (Applied animation to the container and staggered scale to items) */}
            <div 
              ref={statsRef}
              className={`card-elegant p-8 mt-16 transition-all duration-1000 ${
                statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Our Family Law Track Record</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { value: "150+", label: "Family Law Cases" },
                    { value: "95%", label: "Success Rate" },
                    { value: "15+", label: "Years Experience" },
                    { value: "100%", label: "Client Confidentiality" }
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

            {/* Why Choose Us (Applied animation) */}
            <div 
              ref={whyChooseRef}
              className={`card-elegant p-8 mt-12 transition-all duration-1000 ${
                whyChooseInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-bold text-gold mb-6">Why Choose Our Family Law Practice?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyChooseUsData.map((item, index) => (
                    <div key={index}>
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
                  Consult a Family Law Expert
                </a>
              </Button>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default FamilyLaw;