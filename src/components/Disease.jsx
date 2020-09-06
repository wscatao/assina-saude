import React from 'react';
import PropTypes from 'prop-types';

const Disease = (props) => {
  const { arrDiseases, handleChange } = props;

  return (
    <div>
      <label htmlFor="diseases">
        Doenças Adulto
        <select id="diseases" onChange={handleChange}>
          <option value={0}>Selecione...</option>
          {arrDiseases.map((disease) => (
            <option key={disease.id} value={disease.id}>
              {disease.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Disease;

Disease.propTypes = {
  arrDiseases: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};
