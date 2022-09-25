import './styles/style.css';
import './styles/main.css';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx'

import { Provider } from 'react-redux';
import { store } from './store/rootReducer';

render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

