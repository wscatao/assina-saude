import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import MedicalContext from '../context/MedicalContext';

const MedicalRecord = () => {
  const { medicalRecords } = useContext(MedicalContext);

  const dateTreatment = (arrRecords) => {
    // Função criada para separar data e hora utilizando Regex e criar um novo array de prontuários.
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

    return newMedicalRecord;
  };

  return (
    <div>
      <h1>Prontuário Eletrônico</h1>
      {medicalRecords.length === 0 ? (
        <p>Nenhum prontuário cadastrado</p>
      ) : (
        dateTreatment(medicalRecords)
      )}
      <Link to="/cadastro">Adicionar novo prontuário</Link>
    </div>
  );
};

export default MedicalRecord;

/* [{"historico":"Criando um post e armazenando no contexto","queixa":{"label":"Vômito","id":1},"doencas":[{"label":"Câncer","id":1}],"created_at":"2020-09-06T14:48:02.086Z","_id":"nRR9kDrN5aMSGGJA"},{"historico":"Criando um post e armazenando no contexto","queixa":{"label":"Vômito","id":1},"doencas":[{"label":"Câncer","id":1}],"created_at":"2020-09-06T14:48:10.247Z","_id":"INwzesfwvSGIZaGz"}] */

/*
​
0: Array [ "2020-09-06" ]
​
0: Array [ "15:58:42" ]
*/

/*
date: (1) […]
​​​
0: "2020-09-06"
​​​
length: 1
​​​
<prototype>: Array []
​​
doencas: (1) […]
​​​
0: Object { label: "Diabetes", id: 2 }
​​​
length: 1
​​​
<prototype>: Array []
​​
historico: "asdadasdasd"
​​
queixa: {…}
​​​
id: 1
​​​
label: "Vômito"
​​​
<prototype>: Object { … }
​​
time: (1) […]
​​​
0: "16:11:34"
​​​
length: 1
​​​
<prototype>: Array []
​​
<prototype>: {…
*/ 