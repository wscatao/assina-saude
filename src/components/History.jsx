import React from 'react';
import PropTypes from 'prop-types';

const History = (props) => {
  const { handleChange } = props;

  return (
    <div>
      <label htmlFor="history">
        Histórico da Moléstia
        <textarea
          name="history"
          onChange={(e) => handleChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default History;

History.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
