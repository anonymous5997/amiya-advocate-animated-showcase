// src/components/CourtPracticeHero.jsx

import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react"; 
import { Link } from "react-router-dom";

const CourtPracticeHero = ({
  highCourtImage, 
  supremeCourtImage, 
  casesResolved,
  title,
  subtitle,
  linkBackTo
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <div className="flex flex-col items-center justify-center">
          <Button asChild variant="outline" className="mb-8 border-navy text-navy hover:bg-navy/10 hover:text-navy self-start md:self-center">
            <Link to={linkBackTo} className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Expertise</span>
            </Link>
          </Button>

          {/* Dual Image Display - Text overlays removed */}
          <div className="w-full max-w-5xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-2 gap-4 shadow-2xl rounded-xl overflow-hidden">
            <div className="relative h-64 md:h-80 lg:h-96 w-full">
              {highCourtImage && (
                <img
                  src={highCourtImage}
                  alt="High Court of Odisha" // Alt text still provides context
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              )}
              {/* Removed text overlay div for High Court */}
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 w-full">
              {supremeCourtImage && (
                <img
                  src={supremeCourtImage}
                  alt="Supreme Court of India" // Alt text still provides context
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              )}
              {/* Removed text overlay div for Supreme Court */}
            </div>
          </div>

          {/* Text Content */}
          <div className="relative z-10 text-center px-6">
            <Badge className="mb-4 bg-gold text-navy">{casesResolved}</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-navy">
              {title}
            </h1>
            <span className="text-2xl md:text-4xl font-extrabold mb-4 text-gold block">{subtitle}</span>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-muted-foreground">
              Expert representation in High Court and Supreme Court of India with specialized chambers in New Delhi for complex legal matters, constitutional issues, and appellate practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourtPracticeHero;