import React from 'react';
const Step1 = ({ formData, handleChange, errors }) => {
    return (
      <div>
        <h2>Step 1: Personal Information</h2>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span>{errors.phone}</span>}
        </div>
      </div>
    );
  };

export default Step1;
