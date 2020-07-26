import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Libre Baskerville', serif",
    color:'#18242A',
  },
  
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        <Header />
    </div>
    </ThemeProvider>
  );
}

export default App;
