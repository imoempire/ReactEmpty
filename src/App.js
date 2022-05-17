import './App.css';
import AllProduct from './components/All/AllProduct';
import Hero from './components/Hero/Hero';
import NewProduct from './components/Hero/NewProduct';
import Letter from './components/Letter/Letter';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='hero' >
      <Navbar/>
      <Hero/>
      <NewProduct/>
      <Letter/>
      <AllProduct/>
    </div>
  );
}

export default App;
