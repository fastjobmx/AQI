import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedExperiences from "@/components/FeaturedExperiences";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";
import Innovation from "@/components/Innovation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div id="categories">
      <Categories />
      </div>
      <FeaturedExperiences />
      <Mission />
      <Vision />
      <Innovation />
      <Footer />
    </div>
  );
};

export default Index;
