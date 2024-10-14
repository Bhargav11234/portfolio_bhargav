import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Project from "../Project";
import MySkills from "../MySkills";



export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Project />
      <ContactMe />
      <Footer />
    </>
  );
}
