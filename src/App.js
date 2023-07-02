import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Router/Home';
import About from './components/Router/About';
import Contact from './components/Router/Contact';
import Service from './components/Router/Service';
import Login from './components/Router/Login';
import Signup from './components/Router/Signup';
import FormComponent from './components/Router/FormComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/FormComponent" element={<FormComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
