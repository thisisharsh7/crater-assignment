import Header from './Components/Header'
import Hero from './Components/Hero'
import Platforms from './Components/Platforms'
import About from './Components/About'
import Why from './Components/Why'
import Community from './Components/Community'
import Faq from './Components/Faq'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div className='max-w-[1530px] mx-auto bg-[#0f1711] bg-[url("https://www.thecrater.co/static/media/background.e63d2419d9d71ce60cec.jpg")] bg-cover font-[Roboto] min-w-[280px]'>
      <Header />
      <Hero />
      <Platforms />
      <About />
      <Why />
      <Community />
      <Faq />
      <Footer />
    </div>
  )
}