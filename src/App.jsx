import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Sociallink from './components/Sociallink'
import Navbar from './components/navbar'
import "./App.css"


function App() {


  return (
 
      <div className='wrapper'>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

        <Sociallink />
      </div>
  )
}

export default App
