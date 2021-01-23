import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route to="/" exact component={() => <Main />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
