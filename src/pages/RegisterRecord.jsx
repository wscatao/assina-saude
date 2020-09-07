import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

import { getDiseases, getComplaints, newMedicalRecord } from '../data/Data';
import MedicalContext from '../context/MedicalContext';
import FormSelect from '../components/FormSelect';
import History from '../components/History';

// Estilização

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    listStyle: 'none',
    // padding: theme.spacing(0.3),
    margin: 0,
    height: '40px',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  saveButton: {
    marginTop: '2em',
  },
}));

const RegisterRecord = () => {
  const classes = useStyles();
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
    // Armazena o objeto inteiro do evento em selecionado
    const { id } = e.target.value;
    if (id === '0') return;
    setSelectedDiseases([...selectedDiseases, e.target.value]);
  };

  const createComplaint = (e) => {
    // Cria apenas uma queixa por requisição, armazena apenas o id.
    const { id } = e.target.value;
    if (id === '0') return;
    setSelectedComplaint(id);
  };

  const registerForm = () => {
    // Separa os Ids para enviar a requisição
    const getIds = selectedDiseases.map((dis) => dis.id);

    const responseSubmit = newMedicalRecord(selectedComplaint, getIds, history);
    responseSubmit.then((data) =>
      setMedicationRecords([...medicalRecords, data]),
    );

    hist.push('/');
  };

  const handleDelete = (listItem) => {
    setSelectedDiseases(
      selectedDiseases.filter((disease) => disease.id !== listItem.id),
    );
  };

  useEffect(() => {
    // Ao carregar a página faz uma requisição para API e cria um array com os dados no contexto.
    const diseasesData = getDiseases();
    diseasesData.then(({ data }) => setDiseases([...data]));

    const complaintsData = getComplaints();
    complaintsData.then(({ data }) => setComplaints([...data]));
  }, [setDiseases, setComplaints]);

  return (
    <Container maxWidth="md">
      <div>
        <h1>Cadastro de Prontuário</h1>
        <form>
          <FormSelect
            arrData={complaints}
            handleChange={createComplaint}
            label="Queixa Principal"
            helperText="Selecione a queixa"
          />
          <FormSelect
            arrData={diseases}
            handleChange={createDisease}
            label="Doenças Adulto"
            helperText="Selecione a doença"
          />
          <p>Doenças selecionadas:</p>
          <div component="ul" className={classes.root}>
            {selectedDiseases &&
              selectedDiseases.length > 0 &&
              selectedDiseases.map((dis) => (
                <li key={dis.id}>
                  <Chip
                    label={dis.label}
                    color="secondary"
                    onDelete={() => handleDelete(dis)}
                    className={classes.chip}
                  />
                </li>
              ))}
          </div>
          <History handleChange={setHistory} />
          <Button
            variant="contained"
            color="primary"
            onClick={registerForm}
            fullWidth
            className={classes.saveButton}
          >
            Salvar
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default RegisterRecord;
