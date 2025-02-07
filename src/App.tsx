import { DiamondPercent } from 'lucide-react'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Whatsapp } from './components/whatsapp'
import './global.css'
import { HomePage } from './pages/homePage'

function App() {
  return (
    <>
      <div className='h-full'>
        <div className='flex items-center justify-center gap-2 bg-red-600 bg-opacity-50 text-center py-1'>
          <DiamondPercent size={18} strokeWidth={2}/>
          <p className='text-[14px]'><strong>Apenas hoje</strong> de R$ 200 por <strong>R$ 99,90</strong></p>
        </div>
        <div className='px-4 h-full'>
          <Header />
        </div>
        <div className='relative h-full max-w-[1024px] px-4 m-auto'>
          <HomePage />
          <Whatsapp />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
