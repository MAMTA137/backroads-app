import Hero from './components/hero';
import About from "./components/about"; //arrow function name amd import should be same 
import Navbar from "./components/navbar";
import Tours from "./components/tours";
import Services from "./components/services";
import Footer from "./components/footer";

function App() {
  
  console.log('hello');
  return(
    <>
    <Navbar/>
    <Hero/>  
    <About/>
    <Services/>
    <Tours/>
    <Footer/>
    
    </>
  )
};

export default App;
