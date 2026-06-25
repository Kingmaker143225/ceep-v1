import { Link } from "wouter";
import SectionTitle from "./SectionTitle";
import { notifications } from "@/data/notifications";

export default function NewsPreview() {
  const latestNews = notifications.slice(0, 3);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-end mb-8">
          <SectionTitle title="Latest Notifications" />

          <Link href="/notifications">
            <div className="hidden sm:flex items-center text-sm font-semibold text-primary hover:text-secondary transition-colors cursor-pointer mb-4">
              View all notifications
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {latestNews.map((news) => (
            <div
              key={news.id}
              className="group hover:border-primary/50 transition-all hover:shadow-md bg-card border border-border rounded-xl"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`px-3 py-1 text-xs font-bold rounded-full ${
                      news.isNew
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {news.category}
                  </div>

                  <div className="flex items-center text-xs text-muted-foreground">
                    <svg className="w-3 h-3 mr-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
                    </svg>
                    {news.date}
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-3 text-primary group-hover:text-secondary transition-colors line-clamp-2">
                  {news.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                  {news.summary}
                </p>

                <Link href="/notifications">
                  <div className="text-sm font-semibold text-primary flex items-center gap-1 hover:text-secondary transition-colors cursor-pointer mt-auto pt-2 border-t border-border">
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:hidden flex justify-center">
          <Link href="/notifications">
            <div className="flex items-center text-sm font-semibold text-primary hover:text-secondary transition-colors cursor-pointer border border-primary/20 px-4 py-2 rounded-full">
              View all notifications
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}