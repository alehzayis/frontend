import About from "@/components/About"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Services from "@/components/Services"
import Values from "@/components/Values"
import Testimonials from "./Testimonials/page"

const Home =()=>{
  return(
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <Services/>
   <Values/>
   <Testimonials/>
   </>
  )
}
export default Home