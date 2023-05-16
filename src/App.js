
import './App.css';

import Home from './components/Router/Home';
import About from './components/Router/About';
import Contact from './components/Router/Contact';
import Service from './components/Router/Service';
import Login from './components/Router/Hero/Login';
import Signup from './components/Router/Hero/Signup';
import FormComponent from './components/Router/Hero/FormComponent';
import {Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
   

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/service' element={<Service/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/FormComponent' element={<FormComponent/>}/>
</Routes>
    </div>
  );
}

export default App;
