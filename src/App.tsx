import { Header } from './components/header'
// import { Whatsapp } from './components/whatsapp'
import './global.css'
import { HomePage } from './pages/homePage'

function App() {
  return (
    <>
      <div className='h-full'>
        <Header />
        <div className='relative h-full max-w-[1024px] px-4'>
          <HomePage />
          {/* <Whatsapp /> */}
        </div>
      </div>
    </>
  )
}

export default App
