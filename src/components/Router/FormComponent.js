import React, { useState } from 'react';
import Navbar from './Navbar';
import './Form.css';
import Footer from './Footer';
import axios from 'axios';

const FormComponent = () => {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('0');
  const [cp, setC] = useState('0');
  const [trestbps, setTrestbps] = useState('');
  const [chol, setChol] = useState('');
  const [fbs, setFbs] = useState('0');
  const [restecg, setRestecg] = useState('');
  const [thalach, setThalach] = useState('');
  const [exang, setExang] = useState('');
  const [oldpeak, setOldpeak] = useState('');
  const [slope, setSlope] = useState('');
  const [ca, setCa] = useState('0');
  const [thal, setThal] = useState('0');

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      age: Number(age),
      sex: Number(sex),
      cp: Number(cp),
      trestbps: Number(trestbps),
      chol: Number(chol),
      fbs: Number(fbs),
      restecg: Number(restecg),
      thalach: Number(thalach),
      exang: Number(exang),
      oldpeak: Number(oldpeak),
      slope: Number(slope),
      ca: Number(ca),
      thal: Number(thal)
    };

    try {
      const response = await axios.post('/api/v1/heart/disease', formData);
      console.log(response.data.results.results);
      if(response.data.results.results==0){
        setSuccessMessage("No Great news, you don't have heart disease")
        setErrorMessage('');
        setResponseData(response.data);
        window.alert("Great news, you don't have heart disease.");
      }
      if(response.data.results.results==1){
        setSuccessMessage('Bad news, you have heart disease. ');
      setErrorMessage('');
      setResponseData(response.data);
      window.alert('Bad news, you have heart disease.');
      }
  
  } catch (error) {
    console.error(error);
    setSuccessMessage('');
    setErrorMessage('An error occurred. Please try again.'); 
  }
  

    
  };

  return (
    <div>
      <Navbar />
      <h2 className="as">Prediction</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <div>
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            <label htmlFor="sex">Sex:</label>
            <select id="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
              <option value="0">Male</option>
              <option value="1">Female</option>
              <option value="0">Mix</option>
            </select>
          </div>
          <div>
            <label htmlFor="c">CP:</label>
            <select id="c" value={cp} onChange={(e) => setC(e.target.value)}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="trestbps">Trestbps:</label>
            <input type="text" id="trestbps" value={trestbps} onChange={(e) => setTrestbps(e.target.value)} />
          </div>
          <div>
            <label htmlFor="chol">Chol:</label>
            <input type="text" id="chol" value={chol} onChange={(e) => setChol(e.target.value)} />
          </div>
          <div>
            <label htmlFor="fbs">Fbs:</label>
            <select id="fbs" value={fbs} onChange={(e) => setFbs(e.target.value)}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="restecg">Restecg:</label>
            <input type="text" id="restecg" value={restecg} onChange={(e) => setRestecg(e.target.value)} />
          </div>
          <div>
            <label htmlFor="thalach">Thalach:</label>
            <input type="text" id="thalach" value={thalach} onChange={(e) => setThalach(e.target.value)} />
          </div>
          <div>
            <label htmlFor="exang">Exang:</label>
            <input type="text" id="exang" value={exang} onChange={(e) => setExang(e.target.value)} />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="oldpeak">Oldpeak:</label>
            <input type="text" id="oldpeak" value={oldpeak} onChange={(e) => setOldpeak(e.target.value)} />
          </div>
          <div>
            <label htmlFor="slope">Slope:</label>
            <input type="text" id="slope" value={slope} onChange={(e) => setSlope(e.target.value)} />
          </div>
          <div>
            <label htmlFor="ca">Ca:</label>
            <select id="ca" value={ca} onChange={(e) => setCa(e.target.value)}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="thal">Thal:</label>
            <select id="thal" value={thal} onChange={(e) => setThal(e.target.value)}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="btn"
          onClick={() => alert('Your Data Inserted Successfully After Preprocessing Please wait few Seconds')}
        >
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default FormComponent;
