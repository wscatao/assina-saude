import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const History = (props) => {
  const { handleChange } = props;
  return (
    <div>
      <TextField
        label="Histórico da Moléstia"
        onChange={(e) => handleChange(e.target.value)}
        multiline
        rows={6}
        fullWidth
      />
    </div>
  );
};

export default History;

History.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
