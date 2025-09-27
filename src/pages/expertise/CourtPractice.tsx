import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Scale, Building, FileText, Users, Gavel, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import courtPracticeHero from "@/assets/court-practice-hero.jpg";

const CourtPractice = () => {
  const practices = [
    {
      icon: Building,
      title: "High Court Practice",
      description: "Extensive experience in High Court litigation across various legal domains including civil, criminal, constitutional, and commercial matters.",
      cases: "300+ Cases",
      highlights: ["Civil Appeals", "Criminal Appeals", "Writ Petitions", "Commercial Disputes"]
    },
    {
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
      icon: Building
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${courtPracticeHero})` }}
        />
        <div className="absolute inset-0 bg-navy/70" />
        
        <div className="relative z-10 text-center text-white px-6">
          <Button asChild variant="outline" className="mb-6 border-white text-white hover:bg-white hover:text-navy">
            <Link to="/#expertise" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Expertise</span>
            </Link>
          </Button>
          
          <Badge className="mb-4 bg-gold text-navy">350+ Superior Court Cases</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            High Court & Supreme Court
            <br />
            <span className="text-gold">Practice</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Expert representation in High Court and Supreme Court of India with specialized chambers in New Delhi for complex legal matters, constitutional issues, and appellate practice.
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
                <span className="text-gradient-gold">Superior Court Legal Practice</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                With extensive experience in High Court litigation and specialized practice in the Supreme Court of India, we provide authoritative representation across various legal domains including constitutional law, appeals, and complex litigation matters.
              </p>
            </div>

            {/* Court Practices */}
            <div className="space-y-12 mb-16">
              {practices.map((practice, index) => (
                <Card key={practice.title} className={`card-elegant border-border overflow-hidden fade-in-up delay-${index * 200}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="p-4 bg-gold/10 rounded-lg">
                          <practice.icon className="h-8 w-8 text-gold" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-gold">{practice.title}</CardTitle>
                          <Badge variant="secondary" className="bg-gold/20 text-gold border-0 mt-2">
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
                            <Badge key={idx} variant="outline" className="justify-start border-gold/30 text-gold">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-gold/10 to-navy/10 p-8 flex items-center justify-center">
                      <div className="text-center">
                        <practice.icon className="h-24 w-24 text-gold mx-auto mb-4 opacity-50" />
                        <h3 className="text-xl font-bold text-gold">{practice.title}</h3>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
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

            {/* Achievements */}
            <div className="mb-16 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Key Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={achievement.title} className={`card-elegant border-border text-center fade-in-up delay-${index * 150}`}>
                    <CardHeader>
                      <div className="mx-auto mb-4 p-4 bg-gold/10 rounded-lg w-fit">
                        <achievement.icon className="h-8 w-8 text-gold" />
                      </div>
                      <CardTitle className="text-lg text-gold">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="card-elegant p-8 mb-16 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-8 text-center">Superior Court Track Record</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">350+</div>
                  <p className="text-muted-foreground">Superior Court Cases</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">15+</div>
                  <p className="text-muted-foreground">Years of Practice</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">90%</div>
                  <p className="text-muted-foreground">Success Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">100+</div>
                  <p className="text-muted-foreground">Constitutional Cases</p>
                </div>
              </div>
            </div>

            {/* Case Types */}
            <div className="card-elegant p-8 mb-12 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-6">Types of Superior Court Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Constitutional Law</h4>
                  <p className="text-muted-foreground text-sm mb-4">Fundamental rights, constitutional interpretation, and public interest litigation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Civil Appeals</h4>
                  <p className="text-muted-foreground text-sm mb-4">Property disputes, contract appeals, and civil rights matters</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Criminal Appeals</h4>
                  <p className="text-muted-foreground text-sm mb-4">Criminal law appeals and bail applications in superior courts</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Commercial Disputes</h4>
                  <p className="text-muted-foreground text-sm mb-4">High-value commercial disputes and corporate law matters</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="card-elegant p-8 fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-6">Why Choose Our Superior Court Practice?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Strategic Advocacy</h4>
                  <p className="text-muted-foreground text-sm mb-4">Expert advocacy with deep understanding of superior court procedures</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Constitutional Expertise</h4>
                  <p className="text-muted-foreground text-sm mb-4">Specialized knowledge in constitutional law and fundamental rights</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Appellate Experience</h4>
                  <p className="text-muted-foreground text-sm mb-4">Extensive experience in appellate practice and case strategy</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✓ Delhi Chamber</h4>
                  <p className="text-muted-foreground text-sm mb-4">Dedicated chamber in New Delhi for Supreme Court matters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourtPractice;