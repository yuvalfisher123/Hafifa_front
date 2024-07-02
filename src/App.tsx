import React from 'react';
import './App.css';
import AdvancedSearch from './components/advancedSearch/AdvancedSearch'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8c8c8c',
      dark: '#303030',
    },
    secondary: {
      main: '#007883',
    },
    success: {
      main: '#7fd1ae'
    },
    error: {
      main: '#852500'
    },
    background: {
      paper: '#cccccc'
    }
  },
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <AdvancedSearch />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
