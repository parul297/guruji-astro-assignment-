// import React from 'react'

// export default function App() {
//   return (
//     <div>
      
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react';
import Step1 from './Components/step1';
import Step2 from './Components/step2';
import Step3 from './Components/step3';
import Navigation from './Components/Nav';
import '../src/Components/App.css'

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = sessionStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const validateStep = (currentStep) => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.phone) newErrors.phone = 'Phone is required';
    } else if (currentStep === 2) {
      if (!formData.address1) newErrors.address1 = 'Address Line 1 is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zip) newErrors.zip = 'Zip Code is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateStep(2)) {
      alert('Form submitted successfully!');
      sessionStorage.removeItem('formData');
    }
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="App">
      {step === 1 && <Step1 formData={formData} handleChange={handleChange} errors={errors} />}
      {step === 2 && <Step2 formData={formData} handleChange={handleChange} errors={errors} />}
      {step === 3 && <Step3 formData={formData} />}
      <Navigation
        step={step}
        handleNext={handleNext}
        handleBack={handleBack}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};



export default App;

