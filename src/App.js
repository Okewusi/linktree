import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/contact' element= { <Contact />}/>
        </Routes>
        <Footer />
      </div>  
    </BrowserRouter>
    
  );
}

export default App;
