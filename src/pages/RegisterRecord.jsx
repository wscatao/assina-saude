import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getDiseases, getComplaints, newMedicalRecord } from '../data/Data';
import MedicalContext from '../context/MedicalContext';
import Disease from '../components/Disease';
import Complaints from '../components/Complaints';
import History from '../components/History';

const RegisterRecord = () => {
  const hist = useHistory();
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState('');
  const [history, setHistory] = useState('');
  const {
    complaints,
    diseases,
    medicalRecords,
    setComplaints,
    setDiseases,
    setMedicationRecords,
  } = useContext(MedicalContext);

  const createDisease = (e) => {
    if (e.target.value === '0') return;
    setSelectedDiseases([...selectedDiseases, e.target.value]);
  };

  const createComplaint = (e) => {
    if (e.target.value === '0') return;
    setSelectedComplaint(e.target.value);
  };

  const registerForm = () => {
    const responseSubmit = newMedicalRecord(
      selectedComplaint,
      selectedDiseases,
      history,
    );
    responseSubmit.then((data) =>
      setMedicationRecords([...medicalRecords, data]),
    );

    hist.push('/');
  };

  useEffect(() => {
    const diseasesData = getDiseases();
    diseasesData.then(({ data }) => setDiseases([...data]));

    const complaintsData = getComplaints();
    complaintsData.then(({ data }) => setComplaints([...data]));
  }, [setDiseases, setComplaints]);

  return (
    <div>
      <h1>Cadastro de Prontuário</h1>
      <form>
        <Disease arrDiseases={diseases} handleChange={createDisease} />
        <Complaints arrComplaints={complaints} handleChange={createComplaint} />
        <History handleChange={setHistory} />
        <button type="button" onClick={registerForm}>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default RegisterRecord;
