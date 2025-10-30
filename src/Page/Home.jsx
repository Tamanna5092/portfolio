import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Career from "../components/Career";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto font-lora px-4 my-6">
      <Navbar></Navbar>
      <About></About>
      <Skills></Skills>
      <Career></Career>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
