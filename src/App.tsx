import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import Main from './pages/Main';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route to="/" exact component={Main} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
