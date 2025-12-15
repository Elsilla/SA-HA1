// import fotoGrupal from "./../assets/foto_grupal.png";
import LandscapeBanner from "@/components/LandscapeBanner";
import AboutProject from "../components/AboutProject"
import Team from "../components/Team"
import DiscoverJewels from "@/components/DiscoverJewels";
import { teamMembers } from "@/lib/team";



const AboutUs = () => {
  return (
    <div className="container-aboutus container bg-background mx-auto px-6 md:px-12 py-20">
      <LandscapeBanner />
      <AboutProject />
      <Team teamMembers={teamMembers} />
      <DiscoverJewels />
    </div>
  );
};

export default AboutUs;