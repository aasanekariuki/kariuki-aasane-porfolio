import { Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Thesis from './components/Thesis'
import About from './components/About'
import FeaturedProject from './components/FeaturedProject'
import OtherProjects from './components/OtherProjects'
import Experience from './components/Experience'
import CurrentlyBuilding from './components/CurrentlyBuilding'
import Framework from './components/Framework'
import Capital from './components/Capital'
import Writing from './components/Writing'
import ResumeCTA from './components/ResumeCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectNairobiKonnekt from './components/ProjectNairobiKonnekt'


export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink font-sans">
      <Nav />
      <main>
        <Hero />
        
        <Thesis />
        <About />
        <FeaturedProject />
        <OtherProjects />
        <Experience />
        <CurrentlyBuilding />
        <Framework />
        <Capital />
        <Writing />
        <ResumeCTA />
        <Contact />
 <Routes>
        
          <Route path="/projects/nairobikonnekt" element={<ProjectNairobiKonnekt />} />
        </Routes>      </main>
      <Footer />
    </div>
  )
}
