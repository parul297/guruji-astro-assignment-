import React from 'react';
const Navigation = ({ step, handleNext, handleBack, handleSubmit }) => {
  return (
    <div>
      {step > 1 && (
        <button onClick={handleBack}>
          Back
        </button>
      )}
      {step < 3 ? (
        <button onClick={handleNext}>
          Next
        </button>
      ) : (
        <button onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};
export default Navigation;
