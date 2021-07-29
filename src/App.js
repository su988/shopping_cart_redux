import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';
import { ChakraProvider } from '@chakra-ui/react';
import { themeProvider } from './theme';

export const App = () => {
  return (
    <ChakraProvider theme={themeProvider}>
      <Router>
        <Routes />
      </Router>
    </ChakraProvider>
  );
};
