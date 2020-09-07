import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import MedicalContext from '../context/MedicalContext';
import ProntCard from '../components/ProntCard';

const MedicalRecord = () => {
  const { medicalRecords } = useContext(MedicalContext);

  return (
    <Container maxWidth="md">
      <div>
        <h1>Prontuário Eletrônico</h1>
        <Grid container spacing={3}>
          {medicalRecords.length === 0 ? (
            <p>Nenhum prontuário cadastrado</p>
          ) : null}
          {medicalRecords &&
            medicalRecords.length > 0 &&
            medicalRecords.map((record) => (
              <Grid item xs={12} sm={6} md={3}>
                <ProntCard
                  created={record.created_at}
                  queixa={record.queixa}
                  doencas={record.doencas}
                  historico={record.historico}
                />
              </Grid>
            ))}

          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/cadastro"
            fullWidth
          >
            Adicionar novo prontuário
          </Button>
        </Grid>
      </div>
    </Container>
  );
};

export default MedicalRecord;
