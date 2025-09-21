import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Get in Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Schedule a consultation today and let us help you navigate your legal challenges with confidence
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-left">
            <Card className="card-elegant border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-gold">
                  <MapPin className="mr-3 h-6 w-6" />
                  Office Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Bhubaneswar Office</h4>
                  <p className="text-muted-foreground mb-3">
                    Plot-360, Damana Square<br />
                    Bhubaneswar - 752021<br />
                    Odisha, India
                  </p>
                  <div className="w-full h-48 rounded-lg overflow-hidden border border-gold/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.6!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a0b0b0b0b0b%3A0x0!2sDamana%20Square%2C%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Delhi Office</h4>
                  <p className="text-muted-foreground mb-3">
                    Chamber No. 28<br />
                    Supreme Court of India<br />
                    New Delhi, India
                  </p>
                  <div className="w-full h-48 rounded-lg overflow-hidden border border-gold/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.3!2d77.2378!3d28.6258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd456c56c56c%3A0x0!2sSupreme%20Court%20of%20India!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-elegant border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-gold">
                  <Phone className="mr-3 h-6 w-6" />
                  Contact Numbers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Primary:</span>
                  <a href="tel:+919437147208" className="text-foreground hover:text-gold transition-colors">
                    +91 94371 47208
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">WhatsApp:</span>
                  <a href="https://wa.me/919437147208" className="text-foreground hover:text-gold transition-colors">
                    +91 94371 47208
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form Area */}
          <div className="space-y-8 fade-in-right">
            <Card className="card-elegant border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-gold">
                  <Mail className="mr-3 h-6 w-6" />
                  Email & Online
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">General:</span>
                  <a href="mailto:amiyakumarBehera1@gmail.com" className="text-foreground hover:text-gold transition-colors text-sm">
                    amiyakumarBehera1@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Legal:</span>
                  <a href="mailto:amiyakumarBehera1@gmail.com" className="text-foreground hover:text-gold transition-colors text-sm">
                    amiyakumarBehera1@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Urgent:</span>
                  <a href="mailto:amiyakumarBehera1@gmail.com" className="text-foreground hover:text-gold transition-colors text-sm">
                    amiyakumarBehera1@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-elegant border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-gold">
                  <Clock className="mr-3 h-6 w-6" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Monday - Saturday:</span>
                  <span className="text-foreground">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Sunday:</span>
                  <span className="text-foreground">9:00 AM - 2:00 PM</span>
                </div>
                <div className="pt-4 border-t border-gold/20">
                  <div className="text-center mb-3">
                    <div className="text-lg font-semibold text-gold">Free Consultation Policy</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-green-400">
                      <span className="mr-2">✓</span>
                      <span>Free consultation via Email & Phone</span>
                    </div>
                    <div className="flex items-center text-amber-400">
                      <span className="mr-2">⚠</span>
                      <span>Physical meetings are chargeable</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="flex-1 bg-gold hover:bg-gold-light text-navy font-semibold py-3 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.location.href = 'tel:+919437147208'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +91 94371 47208
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-gold text-gold hover:bg-gold/10 py-3 transition-all duration-300"
                onClick={() => window.open('https://maps.google.com/?q=Plot-360,+Damana+Square,+Bhubaneswar,+752021,+Odisha,+India', '_blank')}
              >
                <Navigation className="mr-2 h-5 w-5" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;