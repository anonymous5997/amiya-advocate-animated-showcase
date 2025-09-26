import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Gavel, 
  Home, 
  Briefcase, 
  Users, 
  Shield, 
  FileText,
  Car,
  Heart
} from "lucide-react";
import familyLawImage from "@/assets/family-law-expertise.jpg";
import chequeDisImage from "@/assets/cheque-dishonour-expertise.jpg";
import alimonyImage from "@/assets/alimony-expertise.jpg";

const expertiseAreas = [
  {
    icon: Gavel,
    title: "Civil Law",
    description: "Handling disputes related to property, contracts, and personal legal matters with expert representation in civil courts",
    cases: "200+ Cases",
    details: "Comprehensive civil litigation covering property disputes, breach of contract, tort claims, and civil rights violations"
  },
  {
    icon: Heart,
    title: "Family & Divorce Law",
    description: "Expert divorce lawyers providing comprehensive family law services including child custody, alimony, and matrimonial asset division",
    cases: "150+ Cases",
    details: "Complete family law solutions: Child custody & guardianship, maintenance & alimony, division of matrimonial assets, judicial separation, financial settlements, dowry & domestic violence cases",
    image: familyLawImage,
    specializations: [
      "Child Custody & Guardianship",
      "Maintenance & Alimony",
      "Division of Matrimonial Assets", 
      "Judicial Separation",
      "Domestic Violence Cases",
      "Mutual Divorce Settlement"
    ]
  },
  {
    icon: FileText,
    title: "Section 138 N.I. Act (Cheque Dishonour)",
    description: "Specialized expertise in negotiable instruments law, cheque bounce cases, and effective recovery strategies",
    cases: "180+ Cases",
    details: "Expert representation in cheque dishonor cases under Section 138 of Negotiable Instruments Act with proven recovery track record",
    image: chequeDisImage,
    specializations: [
      "Cheque Bounce Cases",
      "Negotiable Instruments Law",
      "Recovery Proceedings",
      "Section 138 Litigation",
      "Settlement Negotiations"
    ]
  },
  {
    icon: Briefcase,
    title: "Corporate & Commercial Law",
    description: "Advising businesses on compliance, contracts, mergers, acquisitions, and dispute resolution. Notable client: Bridge & Roof Company",
    cases: "800+ Cases",
    details: "Complete business legal solutions including contract drafting, regulatory compliance, and commercial dispute resolution. Serving Bridge & Roof Company and other corporate clients"
  },
  {
    icon: Shield,
    title: "Arbitration",
    description: "Facilitating alternative dispute resolution through arbitration to achieve faster, cost-effective conflict settlements",
    cases: "80+ Cases",
    details: "Private dispute resolution outside traditional court systems for commercial and contractual conflicts"
  },
  {
    icon: Gavel,
    title: "High Court Practice",
    description: "Extensive experience in High Court litigation across various legal domains with proven track record",
    cases: "300+ Cases",
    details: "Comprehensive High Court representation in civil, criminal, constitutional, and commercial matters"
  },
  {
    icon: Users,
    title: "Supreme Court Practice",
    description: "Specialized practice in Supreme Court of India with chamber in New Delhi for complex legal matters",
    cases: "50+ Cases",
    details: "Expert handling of appeals, constitutional matters, and special leave petitions at the apex court"
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 text-gold border-gold">
            15 Years of Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Legal Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive legal services across multiple practice areas with a commitment to excellence and client satisfaction
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <Card 
              key={area.title}
              className={`group card-elegant border-border hover:border-gold/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl fade-in-up delay-${index * 100} overflow-hidden`}
            >
              {/* Premium Image Header for featured areas */}
              {area.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="p-2 bg-gold/20 backdrop-blur-sm rounded-lg border border-gold/30">
                        <area.icon className="h-6 w-6 text-gold" />
                      </div>
                      <Badge variant="secondary" className="bg-gold/90 text-black border-0 font-semibold">
                        {area.cases}
                      </Badge>
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight">{area.title}</h3>
                  </div>
                </div>
              )}
              
              {/* Standard Header for areas without images */}
              {!area.image && (
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gold/10 rounded-lg w-fit group-hover:bg-gold/20 transition-colors">
                    <area.icon className="h-8 w-8 text-gold" />
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-gold transition-colors">{area.title}</CardTitle>
                </CardHeader>
              )}
              
              <CardContent className={`${area.image ? 'pt-4' : 'text-center'}`}>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {area.description}
                </p>
                
                {/* Show specializations for premium areas */}
                {area.specializations && (
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gold mb-2 uppercase tracking-wide">Key Specializations:</h4>
                    <div className="flex flex-wrap gap-1">
                      {area.specializations.slice(0, 3).map((spec, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-gold/30 text-muted-foreground">
                          {spec}
                        </Badge>
                      ))}
                      {area.specializations.length > 3 && (
                        <Badge variant="outline" className="text-xs border-gold/30 text-gold">
                          +{area.specializations.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Cases badge for areas without images */}
                {!area.image && (
                  <Badge variant="secondary" className="bg-gold/20 text-gold border-0 group-hover:bg-gold/30 transition-colors">
                    {area.cases}
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 fade-in-up">
          <div className="card-elegant p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gold mb-4">Why Choose Our Firm?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2">✓ Proven Track Record</h4>
                <p className="text-muted-foreground text-sm">15 years of successful legal practice</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">✓ Client-Centric Approach</h4>
                <p className="text-muted-foreground text-sm">Personalized attention to every case</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">✓ Expert Knowledge</h4>
                <p className="text-muted-foreground text-sm">Deep understanding of legal complexities</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">✓ Ethical Practice</h4>
                <p className="text-muted-foreground text-sm">Highest standards of legal ethics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;