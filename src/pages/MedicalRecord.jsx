import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import MedicalContext from '../context/MedicalContext';

const MedicalRecord = () => {
  const { medicalRecords } = useContext(MedicalContext);

  return (
    <div>
      <h1>Prontuário Eletrônico</h1>
      {medicalRecords.length === 0 ? (
        <p>Nenhum prontuário cadastrado</p>
      ) : (
        <p>Renderizar componente </p>
      )}
      <Link to="/cadastro">Adicionar novo prontuário</Link>
    </div>
  );
};

export default MedicalRecord;
