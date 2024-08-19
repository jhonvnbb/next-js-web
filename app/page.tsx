import AboutSection from "./components/About";
import BannerSection from "./components/Banner";
import FooterSection from "./components/Footer";
import JadwalSection from "./components/Jadwal";
import LombaSection from "./components/Lomba";
import NavigationBar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <BannerSection />
      <JadwalSection />
      <AboutSection />
      <LombaSection />
      <FooterSection />
    </>
  );
}
