import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const FormSelect = (props) => {
  const { arrData, handleChange, label, helperText } = props;

  return (
    <div>
      <TextField
        label={label}
        helperText={helperText}
        onChange={handleChange}
        fullWidth
        select
        defaultValue=""
      >
        {arrData.map((element) => (
          <MenuItem key={element.id} value={element}>
            {element.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default FormSelect;

FormSelect.propTypes = {
  arrData: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
};
