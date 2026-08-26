import About from "@/components/About"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Services from "@/components/Services"
import Values from "@/components/Values"
import Testimonials from "./Testimonials/page"
import CallToAction from "@/components/CallToAction"
import Footer from "@/components/Footer"

const Home =()=>{
  return(
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <Services/>
   <Values/>
   <Testimonials/>
   <CallToAction/>
   <Footer/>
   </>
  )
}
export default Home