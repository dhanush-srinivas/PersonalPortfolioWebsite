import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import RecommendationsSection from "@/components/recommendations-section";
import LeadershipSection from "@/components/leadership-section";
import AwardsSection from "@/components/awards-section";
import CertificationsSection from "@/components/certifications-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <HeroSection />
      <RecommendationsSection />
      <ProjectsSection />
      <LeadershipSection />
      <AwardsSection />
      <CertificationsSection />
      <SkillsSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
}
