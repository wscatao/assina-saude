import React, { useEffect, useContext, useState } from 'react';

import { getDiseases, getComplaints } from '../data/Data';
import MedicalContext from '../context/MedicalContext';
import Disease from '../components/Disease';
import Complaints from '../components/Complaints';

const RegisterRecord = () => {
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState('');
  const { complaints, diseases, setComplaints, setDiseases } = useContext(
    MedicalContext,
  );

  const createDisease = (e) => {
    setSelectedDiseases([...selectedDiseases, e.target.value]);
  };

  const createComplaint = (e) => {
    setSelectedComplaint(e.target.value);
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
      </form>
    </div>
  );
};

export default RegisterRecord;
