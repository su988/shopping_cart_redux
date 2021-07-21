import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';

function App() {
  return (
    <Box className="App">
      <Router>
        <Routes />
      </Router>
    </Box>
  );
}

export default App;
