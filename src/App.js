import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import MainGreet from "./components/mainGreet";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Varta', sans-serif",
    color:'#18242A',
  },
  
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        <Header />
        <MainGreet />
    </div>
    </ThemeProvider>
  );
}

export default App;
