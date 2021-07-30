import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';
import { ChakraProvider } from '@chakra-ui/react';
import { themeProvider } from './theme';
import { Header } from './components/Header';

export const App = () => {
  return (
    <ChakraProvider theme={themeProvider}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </ChakraProvider>
  );
};
