import { Field, Formik, Form, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import './Signup.style.css';
import Navbar from '../../Navbar';
import Heros from './Heros';

export default function Signup() {
  
  const Newvalidation = Yup.object({
    firstName: Yup.string().min(3).max(15).required('Must enter first name'),
    lastName: Yup.string().min(3).max(15).required('Must enter last name'),
    phoneNumber: Yup.string().matches(/^[0-9]+$/, 'Enter only digits').min(10, 'Enter valid phone number').required('Must enter phone number'),
    dateOfBirth: Yup.date().required('Must enter date of birth'),
    email: Yup.string().required('Email is must').email('Enter valid email'),
    password: Yup.string()
      .required('Password is must')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/,
        'Enter strong password'
      ),
    confirmPassword: Yup.string()
      .required('Confirm Password')
      .oneOf([Yup.ref('password'), null], 'Both password must be same'),
  });
  
  const [disp, setDisp] = useState({});
  
  return (
    <div className="form-wrapper">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phoneNumber: '',
          dateOfBirth: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Newvalidation}
        onSubmit={(values) => {
          console.log(values);
          setDisp(values);
        }}
      >
        <div className="form-container">
          <Navbar />

          <Heros 
        cName="heroabout"
        hclass="hero-text"
        
        heroImg="https://st2.depositphotos.com/34641548/43100/v/600/depositphotos_431003208-stock-illustration-image-illustration-man-working-office.jpg"
        
        btnclass="hide"

    />
          <br />
          <br />
          <h1>Sign Up</h1>
          <Form>
            <div className="form-group">
              <Field type="text" name="firstName" id="firstName" placeholder='Enter First Name' />
              <ErrorMessage name="firstName" />
            </div>
            <div className="form-group">
              <Field type="text" name="lastName" id="lastName" placeholder='Enter Last Name' />
              <ErrorMessage name="lastName" />
            </div>
            <div className="form-group">
              <Field type="text" name="phoneNumber" id="phoneNumber" placeholder='Enter Phone Number' />
              <ErrorMessage name="phoneNumber" />
            </div>
            <div className="form-group">
              <Field type="date" name="dateOfBirth" id="dateOfBirth" placeholder='Enter Date of Birth' />
              <ErrorMessage name="dateOfBirth" />
            </div>
            <div className="form-group">
              <Field type="email" name="email" id="email" placeholder='Enter Email' />
              <ErrorMessage name="email" />
            </div>
            <div className="form-group">
              <Field type="password" name="password" id="password" placeholder='Enter Password' />
              <ErrorMessage name="password" />
            </div>
            <div className="form-group">
              <Field type="password" name="confirmPassword" id="confirmPassword" placeholder='Enter Confirm Password' />
              <ErrorMessage name="confirmPassword" />
            </div>
            <button type="submit">Signup</button>
          </Form>
        </div>
      </Formik>
{/* <h1>Name:{disp.name}</h1>
<h1>Age:{disp.number}</h1> */}
</div>
);
}
