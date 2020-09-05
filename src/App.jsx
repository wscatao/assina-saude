import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MedicalRecord from './pages/MedicalRecord';
import RegisterRecord from './pages/RegisterRecord';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={MedicalRecord} />
      <Route exact path="/cadastro" component={RegisterRecord} />
    </Switch>
  );
};

export default App;
