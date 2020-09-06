import React from 'react';
import PropTypes from 'prop-types';

const Complaints = (props) => {
  const { arrComplaints, handleChange } = props;

  return (
    <div>
      <label htmlFor="complaints">
        Queixa Principal
        <select id="complaints" onChange={handleChange}>
          <option value={0}>Selecione...</option>
          {arrComplaints.map((complaint) => (
            <option key={complaint.id} value={complaint.id}>
              {complaint.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Complaints;

Complaints.propTypes = {
  arrComplaints: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};
