import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, Users, DollarSign, Home, Scale, HandHeart, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import familyLawHero from "@/assets/family-law-hero.jpg";
import maintenanceAlimony from "@/assets/maintenance-alimony.jpg";
import childCustody from "@/assets/child-custody.jpg";
import assetDivision from "@/assets/asset-division.jpg";
import judicialSeparation from "@/assets/judicial-separation.jpg";
import mediationServices from "@/assets/mediation-services.jpg";
import domesticViolence from "@/assets/domestic-violence.jpg";

const FamilyLaw = () => {
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${familyLawHero})` }}
        />
        <div className="absolute inset-0 bg-navy/70" />
        
        <div className="relative z-10 text-center text-white px-6">
          <Button asChild variant="outline" className="mb-6 border-white text-white hover:bg-white hover:text-navy">
            <Link to="/#expertise" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Expertise</span>
            </Link>
          </Button>
          
          <Badge className="mb-4 bg-gold text-navy">150+ Family Law Cases</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Family & Divorce Law
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Divorce cases are a rollercoaster ride of unpredictable twists and turns. Even a seemingly simple divorce can turn into a high-stakes matter, which is why having expert divorce lawyers by your side is essential.
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
                <span className="text-gradient-gold">Comprehensive Family Law Services</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Our comprehensive family law practice covers all aspects of matrimonial disputes with sensitivity, expertise, and dedication to achieving the best outcomes for our clients and their families. We provide expert divorce lawyers with in-depth expertise and powerful capabilities in family and divorce law.
              </p>
            </div>

            {/* Services Grid */}
            <div className="space-y-12">
              {subServices.map((service, index) => (
                <Card key={service.title} className={`card-elegant border-border overflow-hidden fade-in-up delay-${index * 100}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="order-2 lg:order-1">
                      <CardHeader>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="p-3 bg-gold/10 rounded-lg">
                            <service.icon className="h-6 w-6 text-gold" />
                          </div>
                          <CardTitle className="text-xl text-gold">{service.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Key Services:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.highlights.map((highlight, idx) => (
                              <Badge key={idx} variant="outline" className="border-gold/30 text-gold">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                    <div className="order-1 lg:order-2">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Statistics */}
            <div className="card-elegant p-8 mt-16 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Our Family Law Track Record</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">150+</div>
                  <p className="text-muted-foreground">Family Law Cases</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">95%</div>
                  <p className="text-muted-foreground">Success Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">15+</div>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">100%</div>
                  <p className="text-muted-foreground">Client Confidentiality</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="card-elegant p-8 mt-12 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-6">Why Choose Our Family Law Practice?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Sensitive Handling</h4>
                  <p className="text-muted-foreground text-sm mb-4">Compassionate approach to sensitive family matters</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Child-Focused Solutions</h4>
                  <p className="text-muted-foreground text-sm mb-4">Prioritizing children's welfare in all proceedings</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Financial Expertise</h4>
                  <p className="text-muted-foreground text-sm mb-4">Comprehensive financial analysis and planning</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Alternative Resolution</h4>
                  <p className="text-muted-foreground text-sm mb-4">Mediation and amicable settlement options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FamilyLaw;