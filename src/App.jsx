import React from 'react';
import './App.css';
import RoutesComponent from './routers/routes';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <RoutesComponent/>
    </Provider>
  );
}

export default App;

