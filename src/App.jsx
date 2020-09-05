import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MedicalRecord from './pages/MedicalRecord';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={ MedicalRecord } />
    </Switch>
  );
};

export default App;
