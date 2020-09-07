import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const Disease = (props) => {
  const { arrDiseases, handleChange } = props;

  return (
    <div>
      <TextField
        label="Doenças Adulto"
        helperText="Selecione a doença"
        onChange={handleChange}
        fullWidth
        select
      >
        {arrDiseases.map((disease) => (
          <MenuItem key={disease.id} value={disease}>
            {disease.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default Disease;

Disease.propTypes = {
  arrDiseases: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};
