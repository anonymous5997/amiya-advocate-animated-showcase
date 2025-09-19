import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about-firm" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 text-gold border-gold">
            Trusted Legal Partner
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">About Our Firm</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Amiya Kumar Behera is a dedicated legal professional committed to delivering practical and efficient legal services across various domains of law.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 fade-in-left">
            <Card className="card-elegant border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-gold text-xl">
                  <Shield className="mr-3 h-6 w-6" />
                  Our Commitment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We focus on personalized, cost-effective solutions while maintaining the highest ethical standards in legal practice. Our client-centric approach ensures clear communication and results-driven strategies.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6 fade-in-right">
            <Card className="card-elegant border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-gold text-xl">
                  <Users className="mr-3 h-6 w-6" />
                  Why Choose Us?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Personalized Attention</h4>
                      <p className="text-sm text-muted-foreground">Deep legal knowledge with transparent fees and commitment to favorable outcomes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Proven Excellence</h4>
                      <p className="text-sm text-muted-foreground">Trustworthy, professional, and proactive legal support tailored to individual needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Ethical Practice</h4>
                      <p className="text-sm text-muted-foreground">Highest standards of legal ethics with dedicated support through every step</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center fade-in-up">
          <Card className="card-elegant p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gold mb-6">Client Support & Accessibility</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Available for consultations in Bhubaneswar with prompt responsiveness to client queries. Our goal is to guide clients clearly through every legal step with dedicated support and practical solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">✓ 24/7 Emergency Support</h4>
                <h4 className="font-semibold text-foreground">✓ Multi-location Presence</h4>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">✓ Clear Communication</h4>
                <h4 className="font-semibold text-foreground">✓ Results-Driven Approach</h4>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;