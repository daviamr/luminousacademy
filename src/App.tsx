import { Footer } from './components/footer'
import { NewHeader } from './components/new-components/n_header'
import { NewHomePage } from './components/new-components/n_home'
import { Whatsapp } from './components/whatsapp'
import './global.css'

function App() {
  return (
    <>
      <div className='relative overflow-x-hidden'>
        <NewHeader/>

        {/* main */}
        <div className='px-4'>
          <NewHomePage/>
        </div>
        <Whatsapp/>
        <Footer/>
      </div>
    </>
  )
}

export default App
