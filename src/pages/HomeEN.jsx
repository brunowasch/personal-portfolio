import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Events from "../components/Events";
import Contact from "../components/Contact";
import ExperienceEducation from "../components/ExperienceEducation";

function HomeEN() {
  return (
    <main className="text-white">
      <Hero />
      <Technologies />
      <ExperienceEducation />
      <Projects />
      <Events />
      <Contact />
    </main>
  );
}

export default HomeEN;
