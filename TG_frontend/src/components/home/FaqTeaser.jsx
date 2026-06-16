
import { Link } from "wouter";
import { ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faqs";

export default function FaqTeaser() {
  const popularFaqs = faqs.flatMap((cat) => cat.questions).slice(0, 4);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-4xl px-4">

        {/* Header */}
        <div className="text-center mb-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>

          <SectionTitle title="Frequently Asked Questions" centered />

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about the  application,
            examination, and admission process.
          </p>
        </div>

        {/* Accordion Replacement */}
        <div className="w-full bg-card rounded-xl border shadow-sm px-6 py-2">
          {popularFaqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={i} className="border-b last:border-0">

                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center py-4 text-left font-semibold text-[15px] hover:text-primary transition-colors"
                >
                  {faq.q}

                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="pb-4 text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <Link href="/faq">
            <div className="flex items-center text-sm font-bold text-secondary bg-secondary/10 hover:bg-secondary/20 transition-colors cursor-pointer px-6 py-3 rounded-full">
              View all FAQs
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}