import {Navbar} from "@/app/pageComponents/Navbar";
import HeroSection from "@/app/pageComponents/heroSection";
import AboutMe from "@/app/pageComponents/aboutMe";
// import Skills from "@/app/pageComponents/skills";
import ContactMe from "@/app/pageComponents/contactMe";

export default function Home() {
  return (
      <>
        <div className={"p-4"}>
            <Navbar/>
            <HeroSection/>
            <AboutMe/>
            {/* <Skills/> */}
            <ContactMe/>
        </div>
      </>
  );
}
