const axios = require('axios').default;

export const getComplaints = async () => {
  try {
    const response = await axios.get('https://assina-prontuario.herokuapp.com/queixas');
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getDiseases = async () => {
  try {
    const response = await axios.get('https://assina-prontuario.herokuapp.com/doencas');
    return response.data;
  } catch (error) {
    return error;
  }
};

export const newMedicalRecord = async (queixa, doencas, historico) => {
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
