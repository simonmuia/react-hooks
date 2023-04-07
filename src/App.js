import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import UseStatepage from './pages/UseStatepage';
import UseEffectpage from './pages/UseEffectpage';
import Footer from './components/footer/Footer';
import UseReducerPage from './pages/UseReducerPage';
import Home from './pages/Home';
import UseRefpage from './pages/UseRefpage';
import UseLayoutEffectPage from './pages/UseLayoutEffectPage';

function App() {
 
  return (
    <div className="App">
      {/* create navigation menu */}
      <div className='navigation'>
        <Navbar/>
       <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='/usestate' element={<UseStatepage/>}/>
        <Route path='/useeffect' element={<UseEffectpage/>}/>
        <Route path='/usereducer' element={<UseReducerPage/>}/>
        <Route path='/useref' element={<UseRefpage/>}/>
        <Route path='/uselayouteffect' element={<UseLayoutEffectPage/>}/>
       </Routes>
       <Footer/>
      </div>
    </div>
  );
}

export default App;
