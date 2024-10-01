import AboutSection from "./components/About";
import BannerSection from "./components/Banner";
import JadwalSection from "./components/Jadwal";
import LombaSection from "./components/Lomba";
import SponsorSection from "./components/Sponsor";

export default function Home() {
  return (
    <>
      <BannerSection />
      <JadwalSection />
      <AboutSection />
      <LombaSection />
      <SponsorSection />
    </>
  );
}
