import { Field, Formik, Form, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import './Signup.style.css';
import Navbar from './Navbar';
import Heros from './Heros';

export default function Signup() {
  const validationSchema = Yup.object({
    firstName: Yup.string().min(3).max(15).required('Must enter first name'),
    lastName: Yup.string().min(3).max(15).required('Must enter last name'),
    phoneNumber: Yup.string().matches(/^[0-9]+$/, 'Enter only digits').min(10, 'Enter valid phone number').required('Must enter phone number'),
    dateOfBirth: Yup.date().required('Must enter date of birth'),
    email: Yup.string().required('Email is required').email('Enter valid email'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/,
        'Enter a strong password'
      ),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Both passwords must match'),
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:4500/api/v1/auth/signup', {
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
        dateOfBirth: values.dateOfBirth,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      });

      setSuccessMessage('Data submitted successfully.');
      setErrorMessage('');
      setResponseData(response.data);
      window.alert('SignUp successfully.');
    } catch (error) {
      console.error(error);
      setSuccessMessage('');
    
      if (error.response && (error.response.status === 400 || error.response.status === 500)) {
        const errorMessage = error.response.data.message || 'An error occurred while submitting the form.';
        setErrorMessage(errorMessage);
        setResponseData(error.response.data);
        
        // Extract specific error messages
      const firstNameError = error.response.data.firstName || '';
  const lastNameError = error.response.data.lastName || '';
  const emailError = error.response.data.email || '';
  const phoneNumberError = error.response.data.phoneNumber || '';
  const userDetailsError = error.response.data.userDetails || '';

  // Construct the final error message
  const errorResponseMessage = `${firstNameError} ${lastNameError} ${emailError} ${phoneNumberError} ${userDetailsError}`.trim();
  setErrorMessage(errorResponseMessage);
} else {
        const errorMessage = 'An error occurred while submitting the form.';
        setErrorMessage(errorMessage);
        setResponseData(null);
      }
      
      // Show the error message
      window.alert(successMessage || errorMessage);
    }
    
    
  };

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
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
              <Field type="text" name="firstName" id="firstName" placeholder="Enter First Name" />
              <ErrorMessage name="firstName" />
            </div>
            <div className="form-group">
              <Field type="text" name="lastName" id="lastName" placeholder="Enter Last Name" />
              <ErrorMessage name="lastName" />
            </div>
            <div className="form-group">
              <Field type="text" name="phoneNumber" id="phoneNumber" placeholder="Enter Phone Number" />
              <ErrorMessage name="phoneNumber" />
            </div>
            <div className="form-group">
              <Field type="date" name="dateOfBirth" id="dateOfBirth" placeholder="Enter Date of Birth" />
              <ErrorMessage name="dateOfBirth" />
            </div>
            <div className="form-group">
              <Field type="email" name="email" id="email" placeholder="Enter Email" />
              <ErrorMessage name="email" />
            </div>
            <div className="form-group">
              <Field type="password" name="password" id="password" placeholder="Enter Password" />
              <ErrorMessage name="password" />
            </div>
            <div className="form-group">
              <Field type="password" name="confirmPassword" id="confirmPassword" placeholder="Enter Confirm Password" />
              <ErrorMessage name="confirmPassword" />
            </div>
            <button type="submit">Signup</button>
          </Form>
          {successMessage && <div className="success-message">{successMessage}</div>}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {responseData && (
            <div className="response-data">
             
            </div>
          )}
        </div>
      </Formik>
    </div>
  );
}
