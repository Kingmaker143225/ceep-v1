import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import { Search, ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";
import { useState } from "react";

export default function Faq() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(faqs[0].category);
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqs
    .map((cat) => ({
      ...cat,
      questions: cat.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(search.toLowerCase()) ||
          q.a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((c) => c.questions.length > 0);

  return (
    <SiteLayout>
      <PageBanner title="Frequently Asked Questions" crumbs={[{ label: "FAQ" }]} />

      <div className="container mx-auto max-w-4xl py-6 px-4 space-y-8">

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

          <input
            placeholder="Search for questions..."
            className="w-full pl-12 h-14 text-lg bg-card shadow-sm border rounded-md px-3 outline-none focus:ring-2 focus:ring-primary/30"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* SEARCH MODE */}
        {search ? (
          <div className="bg-card rounded-xl border shadow-sm p-6">
            <h3 className="font-semibold mb-4 text-muted-foreground">
              Search Results
            </h3>

            {filteredFaqs.length === 0 ? (
              <p className="text-center py-8">No results found.</p>
            ) : (
              filteredFaqs.flatMap((cat) =>
                cat.questions.map((faq, i) => {
                  const isOpen = openIndex === i;

                  return (
                    <div key={i} className="border-b">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="w-full flex justify-between items-center py-4 text-left font-semibold hover:text-primary"
                      >
                        {faq.q}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="pb-4 text-muted-foreground">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })
              )
            )}
          </div>
        ) : (
          <>
            {/* Tabs Replacement */}
            <div className="flex flex-wrap gap-2 bg-muted/50 p-2 rounded-lg">
              {faqs.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => {
                    setActiveCategory(cat.category);
                    setOpenIndex(null);
                  }}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    activeCategory === cat.category
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="bg-card rounded-xl border shadow-sm px-6 py-2">
              {faqs
                .find((c) => c.category === activeCategory)
                ?.questions.map((faq, i) => {
                  const isOpen = openIndex === i;

                  return (
                    <div key={i} className="border-b last:border-0">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="w-full flex justify-between items-center py-4 text-left font-semibold hover:text-primary"
                      >
                        {faq.q}

                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="pb-4 text-muted-foreground">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </SiteLayout>
  );
}