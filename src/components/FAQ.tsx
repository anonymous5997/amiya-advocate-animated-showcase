import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Scale, Heart, FileText, Briefcase, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    category: "Civil Law",
    icon: Scale,
    questions: [
      {
        question: "What types of cases fall under civil law?",
        answer: "Civil law covers disputes involving contracts, property, personal rights, and family matters that require resolution through civil courts."
      },
      {
        question: "How long does a civil case usually take?",
        answer: "The duration depends on the case complexity and court schedules, but many cases can take several months to a few years. Amiya Kumar Behera focuses on efficient case handling to minimize delays."
      }
    ]
  },
  {
    category: "Divorce Law",
    icon: Heart,
    questions: [
      {
        question: "What are the grounds for filing a divorce?",
        answer: "Grounds include mutual consent, cruelty, desertion, adultery, and other legally recognized reasons. Legal guidance is crucial to choose the right approach for your situation."
      },
      {
        question: "How is child custody decided in divorce cases?",
        answer: "Custody is determined prioritizing the child's welfare, with courts considering factors like parental capability and the child's best interests."
      }
    ]
  },
  {
    category: "Section 138 N I Act",
    icon: FileText,
    questions: [
      {
        question: "What is Section 138 N I Act about?",
        answer: "This law deals with cheque bounce cases where a cheque is dishonored due to insufficient funds or other issues, protecting the payee's rights."
      },
      {
        question: "How are cheque bounce disputes resolved?",
        answer: "Resolution may involve legal notices, negotiations, and court proceedings to recover the owed amount or seek penalties."
      }
    ]
  },
  {
    category: "Corporate and Commercial Law",
    icon: Briefcase,
    questions: [
      {
        question: "What corporate services can Amiya Kumar Behera provide?",
        answer: "Services include contract drafting, business compliance, mergers and acquisitions support, dispute resolution, and advisory for regulatory adherence."
      },
      {
        question: "How important is legal compliance for businesses?",
        answer: "Compliance reduces risks of penalties and legal disputes, ensuring smooth business operations and long-term success."
      }
    ]
  },
  {
    category: "Arbitration",
    icon: Gavel,
    questions: [
      {
        question: "What is arbitration and when is it used?",
        answer: "Arbitration is a private, alternative dispute resolution process used to settle commercial or contractual conflicts faster and more cost-effectively than courts."
      },
      {
        question: "Can arbitration decisions be challenged?",
        answer: "Arbitration awards are generally final and binding, but under specific circumstances, courts may review or set aside awards."
      }
    ]
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <Badge variant="outline" className="mb-4 text-gold border-gold">
            Common Questions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about our legal services and expertise
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {faqData.map((category, categoryIndex) => (
            <Card key={category.category} className={`card-elegant border-border fade-in-up delay-${categoryIndex * 100}`}>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-gold text-xl">
                  <category.icon className="mr-3 h-6 w-6" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.questions.map((item, index) => {
                  const itemId = `${category.category}-${index}`;
                  const isOpen = openItems.includes(itemId);
                  
                  return (
                    <div key={itemId} className="border border-border/50 rounded-lg overflow-hidden">
                      <Button
                        variant="ghost"
                        className="w-full p-4 text-left justify-between hover:bg-muted/50 h-auto"
                        onClick={() => toggleItem(itemId)}
                      >
                        <span className="font-medium text-foreground pr-4">{item.question}</span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-gold flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gold flex-shrink-0" />
                        )}
                      </Button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-0">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 fade-in-up">
          <Card className="card-elegant p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Don't see your question here? Contact us directly for personalized legal advice and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gold hover:bg-gold-light text-navy font-semibold">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">
                Call +91 9437147208
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;