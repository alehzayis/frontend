import About from "@/components/About"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Services from "@/components/Services"
import Values from "@/components/Values"
import Testimonials from "./Testimonials/page"
import Footer from "@/components/Footer"
import QuoteBanner from "@/components/CallToAction"
import TopbarHome from "@/components/home/TopbarHome"

const Home =()=>{
  return(
   <>
  <TopbarHome/>
   <Navbar/>
   <Hero/>
   <About/>
   <Services/>
   <Values/>
   <Testimonials/>
   <QuoteBanner/>
   <Footer/>
   </>
  )
}
export default Home