const axios = require('axios').default;

const checkServerStatus = async () => {
  try {
    axios
      .get('https://assina-prontuario.herokuapp.com/')
      .then((response) => console.log(response));
  } catch (error) {
    console.log(error);
  }
};

const getComplaints = async () => {
  try {
    axios
      .get('https://assina-prontuario.herokuapp.com/queixas')
      .then(({ data }) => console.log(data));
  } catch (error) {
    console.log(error);
  }
};

const getDiseases = async () => {
  try {
    axios
      .get('https://assina-prontuario.herokuapp.com/doencas')
      .then(({ data }) => console.log(data));
  } catch (error) {
    console.log(error);
  }
};

const newMedicalRecord = async (queixa, doencas, historico) => {
  try {
    axios
      .post('https://assina-prontuario.herokuapp.com/prontuario', {
        queixa,
        doencas,
        historico,
      })
      .then((response) => console.log(response));
  } catch (error) {
    console.log(error);
  }
};

export { checkServerStatus, getComplaints, getDiseases, newMedicalRecord };
