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

/* [{"historico":"Criando um post e armazenando no contexto","queixa":{"label":"Vômito","id":1},"doencas":[{"label":"Câncer","id":1}],"created_at":"2020-09-06T14:48:02.086Z","_id":"nRR9kDrN5aMSGGJA"},{"historico":"Criando um post e armazenando no contexto","queixa":{"label":"Vômito","id":1},"doencas":[{"label":"Câncer","id":1}],"created_at":"2020-09-06T14:48:10.247Z","_id":"INwzesfwvSGIZaGz"}] */