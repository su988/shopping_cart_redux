import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';
import { ChakraProvider } from '@chakra-ui/react';
import { themeProvider } from './theme';

export const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={themeProvider}>
        <Router>
          <Routes />
        </Router>
      </ChakraProvider>
    </Provider>
  );
};
