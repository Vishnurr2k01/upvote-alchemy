import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import DemoSection from "@/components/DemoSection";
import ResultsSection from "@/components/ResultsSection";
import ValueSection from "@/components/ValueSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showResults, setShowResults] = useState(false);
  const [resultsData, setResultsData] = useState<any>(null);

  const handleAnalyze = (data: any) => {
    console.log("Analyzing:", data);
    setResultsData(data);
    setShowResults(true);
    // Scroll to results
    setTimeout(() => {
      const resultsSection = document.getElementById("results");
      resultsSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <DemoSection onAnalyze={handleAnalyze} />
      <div id="results">
        {showResults && resultsData && <ResultsSection data={resultsData} />}
      </div>
      <ValueSection />
      {/* <TestimonialSection /> */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
