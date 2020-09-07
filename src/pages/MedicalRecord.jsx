import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import moment from 'moment';

import MedicalContext from '../context/MedicalContext';

const MedicalRecord = () => {
  const { medicalRecords } = useContext(MedicalContext);

  const dateTreatment = (arrRecords) => {
    console.log(arrRecords)
    if (arrRecords[0] === Error) return <li>Houve um erro</li>;
    // Função criada para separar data e hora utilizando Regex e criar um novo array de prontuários com data e hora separado.
    const createdAt = arrRecords.map((dates) => dates.created_at);
    const dateRegex = /[0-9]+-[0-9]+-[0-9]+/g;
    const timeRegex = /[0-9]+:[0-9]+:[0-9]+/g;
    const dates = [];
    const times = [];
    const newMedicalRecord = [];

    const teste = arrRecords[0].created_at.match(dateRegex);
      console.log('antes de passar no moment', teste[0])
      console.log('tipo de teste', typeof(teste[0]))
    const newteste = teste.split('-');
      console.log('depois de passar no moment com parser', newteste)

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
          fullWidth
        >
          Adicionar novo prontuário
        </Button>
      </div>
    </Container>
  );
};

export default MedicalRecord;
