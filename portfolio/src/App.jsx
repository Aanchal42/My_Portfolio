import NavbarMain from './components/navBar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import HeroGradient from './components/heroSection/HeroGradient'
import SubHeroSection from './components/heroSection/SubHeroSection'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import HelperSection from './components/navBar/HelperSection'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'
import ProjectsMain from './components/projectSection/ProjectsMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'

function App() {
  return (
    <main className='font-body'>
       <NavbarMain/>
       <HeroMain/>
       <HeroGradient/>
       <SubHeroSection/>
       <AboutMeMain/>
       <SkillsMain/>
       <SubSkills/>
       <ProjectsMain/>
       <ContactMeMain/>
       <FooterMain/>
    </main>
  )
}

export default App
