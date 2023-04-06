import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import UseStatepage from './pages/UseStatepage';
import UseEffectpage from './pages/UseEffectpage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <h1>React Hooks Explained</h1>

      {/* create navigation menu */}
      <div className='navigation'>
        <Navbar/>
       <Routes>
        <Route path='/usestate' element={<UseStatepage/>}/>
        <Route path='/useeffect' element={<UseEffectpage/>}/>
       </Routes>
       <Footer/>
      </div>
    </div>
  );
}

export default App;
