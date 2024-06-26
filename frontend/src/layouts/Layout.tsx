import Footer from "@/components/comps/Footer"
import Header from "@/components/comps/Header"
import Hero from "@/components/comps/Hero"
import { Toaster } from "@/components/ui/toaster"

interface props{
  children : React.ReactNode;
}

const Layout = ({children} : props) => {
  return (
    <div>
      <Header/>
      <Hero/>
      <div className="container mx-auto py-10 md:px-[10rem] px-[2rem] flex-1">{children}</div>
      <Toaster/>
      <Footer/>
    </div>
  )
}

export default Layout