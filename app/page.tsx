
import Icons from "./components/Icons/Icons"
import HeroSection from "./components/HeroSection/HeroSection"
import AboutSection from "./components/AboutSection/AboutSection"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"

export default function page() {
return (
    <main className="relative w-full left-0 md:w-full lg:w-[calc(100%-20rem)] lg:left-80 bg-fixed px-5 md:px-12 lg:px-16">
        <Icons />
        <HeroSection />
        <AboutSection />
        <Projects />
        <Contact/>
    </main>
)
}
