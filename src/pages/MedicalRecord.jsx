import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import MedicalContext from '../context/MedicalContext';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const MedicalRecord = () => {
  const { medicalRecords } = useContext(MedicalContext);

  const dateTreatment = (arrRecords) => {
    console.log('lista de prontuários', arrRecords);
    // Função criada para separar data e hora utilizando Regex e criar um novo array de prontuários com data e hora separado.
    const createdAt = arrRecords.map((dates) => dates.created_at);
    const dateRegex = /[0-9]+-[0-9]+-[0-9]+/g;
    const timeRegex = /[0-9]+:[0-9]+:[0-9]+/g;
    const dates = [];
    const times = [];
    const newMedicalRecord = [];

    createdAt.forEach((created) => {
      dates.push(created.match(dateRegex));
      times.push(created.match(timeRegex));
    });

    arrRecords.forEach((record, i) => {
      newMedicalRecord.push({
        historico: record.historico,
        queixa: record.queixa,
        doencas: [...record.doencas],
        date: dates[i],
        time: times[i],
      });
    });

    // Então é feito um map no novo array que retorna a lista de prontuários montada.
    const list = newMedicalRecord.map((record) => (
      <li key={`${record.queixa}+${record.i}`}>
        <p>
          Horário: {record.time[0]}
          Data: {record.date[0]}
          Anamese Queixa Principal: {record.queixa.label}
          Doenças Adulto: {record.doencas.map((doenca) => doenca.label)}
          Histórico da moléstia: {record.historico}
        </p>
      </li>
    ));

    return list;
  };

  return (
    <Container maxWidth="md">
      <div>
        <h1>Prontuário Eletrônico</h1>
        {medicalRecords.length === 0 ? (
          <p>Nenhum prontuário cadastrado</p>
        ) : (
          <ul>{dateTreatment(medicalRecords)}</ul>
        )}
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/cadastro"
        >
          Adicionar novo prontuário
        </Button>
      </div>
    </Container>
  );
};

export default MedicalRecord;
