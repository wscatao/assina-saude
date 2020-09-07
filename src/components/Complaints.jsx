import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const Complaints = (props) => {
  const { arrComplaints, handleChange } = props;

  return (
    <div>
      <TextField
        label="Queixa Principal"
        helperText="Selecione a queixa"
        onChange={handleChange}
        fullWidth
        select
      >
        {arrComplaints.map((complaint) => (
          <MenuItem key={complaint.id} value={complaint.id}>
            {complaint.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default Complaints;

Complaints.propTypes = {
  arrComplaints: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};

{
  /* <label htmlFor="complaints">
        Queixa Principal
        <select id="complaints" onChange={handleChange}>
          <option value={0}>Selecione...</option>
          {arrComplaints.map((complaint) => (
            <option key={complaint.id} value={complaint.id}>
              {complaint.label}
            </option>
          ))}
        </select>
      </label> */
}
