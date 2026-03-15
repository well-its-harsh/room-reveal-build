import HeroSection from "@/components/home/HeroSection";
import ValueProps from "@/components/home/ValueProps";
import Categories from "@/components/home/Categories";
import ShopStory from "@/components/home/ShopStory";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ARExplainer from "@/components/home/ARExplainer";
import InspirationSection from "@/components/home/InspirationSection";
import BrandPartners from "@/components/home/BrandPartners";
import Testimonials from "@/components/home/Testimonials";
import ContactStrip from "@/components/home/ContactStrip";

export default function Index() {
  return (
    <>
      <HeroSection />
      <ValueProps />
      <Categories />
      <ShopStory />
      <FeaturedProducts />
      <ARExplainer />
      <InspirationSection />
      <BrandPartners />
      <Testimonials />
      <ContactStrip />
    </>
  );
}
