import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import ContactDetails from './Component/ContactDetails';
import User from './Component/User.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/contact/details' element={<ContactDetails/>}/>
      <Route path='/contact/:id' element={<User/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
