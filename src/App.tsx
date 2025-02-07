import { Footer } from './components/footer'
import { Header } from './components/header'
// import { Whatsapp } from './components/whatsapp'
import './global.css'
import { HomePage } from './pages/homePage'

function App() {
  return (
    <>
      <div className='h-full'>
        <div className='relative h-full max-w-[1024px] px-4'>
        <Header />
          <HomePage />
          {/* <Whatsapp /> */}
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
