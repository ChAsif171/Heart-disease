import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import './Form.css';
import Footer from './Footer';

import {
  setUserAge,
  setUserSex,
  setC,
  setTrestbps,
  setChol,
  setFbs,
  setRestecg,
  setThalach,
  setExang,
  setOldpeak,
  setSlope,
  setCa,
  setThal,
  setTes,
  setTarget
} from '../../store/slices/Userslice';

const FormComponent = () => {
  const dispatch = useDispatch();
  const {
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
    tes,
    target
  } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
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
      tes,
      target
    });
  };

  return (
    <div>
      <Navbar />
      <h2 className="as">Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => dispatch(setUserAge(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="sex">Sex:</label>
            <select
              id="sex"
              value={sex}
              onChange={(e) => dispatch(setUserSex(e.target.value))}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="mix">Mix</option>
            </select>
          </div>
          <div>
            <label htmlFor="c">c:</label>
            <select id="c" value={c} onChange={(e) => dispatch(setC(e.target.value))}>
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
            <label htmlFor="trestbps">trestbps:</label>
            <input
              type="text"
              id="trestbps"
              value={trestbps}
              onChange={(e) => dispatch(setTrestbps(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="chol">chol:</label>
            <input
              type="text"
              id="chol"
              value={chol}
              onChange={(e) => dispatch(setChol(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="fbs">fbs:</label>
            <select id="fbs" value={fbs} onChange={(e) => dispatch(setFbs(e.target.value))}>
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
            <label htmlFor="restecg">restecg:</label>
            <input
              type="text"
              id="restecg"
              value={restecg}
              onChange={(e) => dispatch(setRestecg(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="thalach">thalach:</label>
            <input
              type="text"
              id="thalach"
              value={thalach}
              onChange={(e) => dispatch(setThalach(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="exang">exang:</label>
            <input
              type="text"
              id="exang"
              value={exang}
              onChange={(e) => dispatch(setExang(e.target.value))}
            />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="oldpeak">oldpeak:</label>
            <input
              type="text"
              id="oldpeak"
              value={oldpeak}
              onChange={(e) => dispatch(setOldpeak(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="slope">slope:</label>
            <input
              type="text"
              id="slope"
              value={slope}
              onChange={(e) => dispatch(setSlope(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="ca">ca:</label>
            <select id="ca" value={ca} onChange={(e) => dispatch(setCa(e.target.value))}>
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
            <label htmlFor="thal">thal:</label>
            <select id="thal" value={thal} onChange={(e) => dispatch(setThal(e.target.value))}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div>
            <label htmlFor="tes">Tes:</label>
            <input
              type="text"
              id="tes"
              value={tes}
              onChange={(e) => dispatch(setTes(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="target">Target:</label>
            <input
              type="text"
              id="target"
              value={target}
              onChange={(e) => dispatch(setTarget(e.target.value))}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn"
          onClick={() => alert('Your Data Inserted Successfully')}
        >
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default FormComponent;
