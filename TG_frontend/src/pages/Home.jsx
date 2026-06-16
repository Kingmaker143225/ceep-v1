import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/home/Hero";
import Ticker from "@/components/home/Ticker";
// import QuickActions from "@/components/home/QuickActions";
// import AboutSection from "@/components/home/AboutSection";
import LatestUpdates from "@/components/home/LatestUpdates";
// import StatsCounter from "@/components/home/StatsCounter";
import UpcomingDates from "@/components/home/UpcomingDates";
import CoursesPreview from "@/components/home/CoursesPreview";
import NewsPreview from "@/components/home/NewsPreview";
import FaqTeaser from "@/components/home/FaqTeaser";
import WelcomeSection from "@/components/home/WelcomeSection";

export default function Home() {
  return (
    <SiteLayout>
      <Ticker />
      <Hero />
      {/* <QuickActions />
      <WelcomeSection />
      <AboutSection /> */}
      <LatestUpdates />
      {/* <StatsCounter /> */}
      {/* <UpcomingDates /> */}
      {/* <CoursesPreview /> */}
      {/* <NewsPreview /> */}
      {/* <FaqTeaser /> */}
    </SiteLayout>
  );
}