import React, { useState } from 'react';
import Navbar from '../../Navbar';
import './Form.css';
import Footer from '../Footer'

const FormComponent = () => {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [c, setC] = useState('');
  const [trestbps, setTrestbps] = useState('');
  const [chol, setChol] = useState('');
  const [fbs, setFbs] = useState('');
  const [restecg, setRestecg] = useState('');
  const [thalach, setThalach] = useState('');
  const [exang, setExang] = useState('');
  const [oldpeak, setOldpeak] = useState('');
  const [slope, setSlope] = useState('');
  const [ca, setCa] = useState('');
  const [thal, setThal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // You can access the values of the input fields here
    // and perform any necessary operations or API calls
    console.log({
      age,
      sex,
      c,
      trestbps,
      chol,
      fbs,
      restecg,
      thalach,
      exang,
      oldpeak,
      slope,
      ca,
      thal,
    });
  };

  return (
    <div>
      <Navbar />
      
      <h2 className='as'>Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', marginBottom: '10px' ,justifyContent:'space-evenly'}}>
          <div>
            <label htmlFor="age">Age:</label>
            <input
            
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="sex">Sex:</label>
            <input
              type="text"
              id="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="c">C:</label>
            <select id="c" value={c} onChange={(e) => setC(e.target.value)} style={{width:'180px'}}>
              <option value="">Select</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </select>
          </div>
        </div>
        <div style={{display: 'flex', marginBottom: '10px' ,justifyContent:'space-evenly'}}>
          <div>
            <label htmlFor="trestbps">Trestbps:</label>
            <input 
              type="text"
              id="trestbps"
              value={trestbps}
              onChange={(e) => setTrestbps(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="chol">Chol:</label>
            <input   
              type="text"
              id="chol"
              value={chol}
              onChange={(e) => setChol(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="fbs">FBS:</label>
            <input
              type="text"
              id="fbs"
              value={fbs}
              onChange={(e) => setFbs(e.target.value)}
            />
          </div>
        </div>
        <div style={{ display: 'flex', marginBottom: '10px' ,justifyContent:'space-evenly'}}>
          <div>
            <label htmlFor="restecg">Restecg:</label>
            <select id="restecg" value={restecg} onChange={(e) => setRestecg(e.target.value)} style={{width:'180px'}}>
              <option value="">Select</option>
              <option value="0">Option 0</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>
          <div>
            <label htmlFor="thalach">Thalach:</label>
            <input
              type="text"
              id="thalach"
              value={thalach}
              onChange={(e) => setThalach(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="exang">Exang:</label>
            <input
              type="text"
              id="exang"
              value={exang}
              onChange={(e) => setExang(e.target.value)}
            />
          </div>
        </div>
        <div style={{ display: 'flex', marginBottom: '10px' ,justifyContent:'space-evenly' }}>
          <div>
            <label htmlFor="oldpeak">Oldpeak:</label>
            <input
              type="text"
              id="oldpeak"
              value={oldpeak}
              onChange={(e) => setOldpeak(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="slope">Slope:</label>
            <input
              type="text"
              id="slope"
              value={slope}
              onChange={(e) => setSlope(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="ca">CA:</label>
            <select id="ca" value={ca} onChange={(e) => setCa(e.target.value)} style={{width:'180px'}}>
              <option value="">Select</option>
              <option value="0">Option 0</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
        </div>
        <div style={{ display: 'flex', marginBottom: '10px' ,justifyContent:'space-evenly'}} >
          <div>
            <label htmlFor="thal">Thal:</label>
            <select id="thal" value={thal} onChange={(e) => setThal(e.target.value)} style={{width:'180px'}}>
              <option value="">Select</option>
              <option value="0">Option 0</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn" onClick={() => alert("Data entered")}>
  Submit
</button>
<Footer/>

      </form>
    </div>
    
  );
};

export default FormComponent;

