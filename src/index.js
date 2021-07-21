import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { themeProvider } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={themeProvider}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
