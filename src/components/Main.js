import Banner from "./banner/Banner";
import Contact from "./contact/Contact";
import Expertise from "./expertise/Expertise";
import Footer from "./footer/Footer";
import Projects from "./projects/Projects";
import Resume from "./resume/Resume";
import Testimonial from "./tesimonial/Testimonial";
import Navbar from "./navbar/Navbar";
import FooterBottom from "./footer/FooterBottom";
import Experiences from "./experiences/Experiences"


const Main = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText font-bodyFont"> {/** px-4 */}
      <Navbar />
      <div className="relative max-w-screen-xl mx-auto pt-24 px-5">
        <Banner />
        <Experiences />
        <Expertise />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        {/* <Footer /> */}
        <FooterBottom />
      </div>
    </div>
  );
}

export default Main