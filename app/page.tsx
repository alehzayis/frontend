import About from "@/components/About"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Services from "@/components/Services"
import Values from "@/components/Values"

const Home =()=>{
  return(
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <Services/>
   <Values/>
   </>
  )
}
export default Home