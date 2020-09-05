import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MedicalContext from './MedicalContext';

const MedicalProvider = ({ children }) => {
  const [complaints, setComplaints] = useState([]);
  const [diseases, setDiseases] = useState([]);
  const [medicalRecords, setMedicationRecords] = useState([]);

  const contextValue = {
    complaints,
    setComplaints,
    diseases,
    setDiseases,
    medicalRecords,
    setMedicationRecords,
  };

  return (
    <MedicalContext.Provider value={contextValue}>
      {children}
    </MedicalContext.Provider>
  );
};

MedicalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MedicalProvider;
