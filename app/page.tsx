import BannerSection from "./components/Banner";
import FooterSection from "./components/Footer";
import JadwalSection from "./components/Jadwal";
import NavigationBar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <BannerSection />
      <JadwalSection />
      <FooterSection />
    </>
  );
}
