import React from 'react';

const SurveyField = ({ input, label, type, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} data-error="wrong" style={{ marginBottom: '5px' }} {...input} />
      {touched &&
        error && (
          <div className="red-text" style={{ marginBottom: '20px' }}>
            <i className="material-icons left" style={{ marginRight: '4px' }}>
              error
            </i>
            {error}
          </div>
        )}
    </div>
  );
};

export default SurveyField;
