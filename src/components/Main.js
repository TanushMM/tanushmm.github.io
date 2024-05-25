import Banner from "./banner/Banner";
import Contact from "./contact/Contact";
import Features from "./features/Features";
import Footer from "./footer/Footer";
import Projects from "./projects/Projects";
import Resume from "./resume/Resume";
import Testimonial from "./tesimonial/Testimonial";
import Navbar from "./navbar/Navbar";



const Main = () => {
    return (
        <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
            <Banner />
            <Features />
            <Projects />
            <Resume />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
        </div>
    );
  }
  
  export default Main