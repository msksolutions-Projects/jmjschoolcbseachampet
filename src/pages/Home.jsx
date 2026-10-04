import HomeBanner from "../components/HomeBanner";
import EventSection from "../components/EventSection";

import GallerySection from "../components/GallerySection";
import GetInTouch from "../components/GetInTouch";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <HomeBanner />
      <EventSection />
      <GallerySection />
      <GetInTouch />
    </main>
  );
};

export default Home;
