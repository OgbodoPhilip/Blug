
import FeaturedProduct from "@/components/landing-page/featured-product";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-products";
import Explore from "./explore/page";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProduct />
      <RecentlyLaunchedProducts/> 
      <Explore />
    </div>
  );
}
