"use client";
import { Header } from "@/components/header";
import { CompanyHero } from "@/components/company-hero";
import { AboutSection } from "@/components/about-section";
import { VisionMissionSection } from "@/components/vision-mission-section";
import { CompanyValuesSection } from "@/components/company-values-section";
import { ResearchDevelopmentSection } from "@/components/research-development-section";
import { QualityControlSection } from "@/components/quality-control-section";
import { ManufacturingSection } from "@/components/manufacturing-section";
import { ProductsShowcaseSection } from "@/components/products-showcase-section";
import { BusinessPartnersSection } from "@/components/business-partners-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <CompanyHero />
      <AboutSection />
      <VisionMissionSection />
      <CompanyValuesSection />
      <ResearchDevelopmentSection />
      <QualityControlSection />
      <ManufacturingSection />
      <ProductsShowcaseSection />
      <BusinessPartnersSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
