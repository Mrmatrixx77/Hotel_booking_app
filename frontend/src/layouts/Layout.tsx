import Footer from "@/components/comps/Footer"
import Header from "@/components/comps/Header"
import Hero from "@/components/comps/Hero"

interface props{
  children : React.ReactNode;
}

const Layout = ({children} : props) => {
  return (
    <div>
      <Header/>
      <Hero/>
      <div className="container mx-auto py-10 flex-1">{children}</div>
      <Footer/>
    </div>
  )
}

export default Layout