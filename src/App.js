import './App.css';
import Home from "./home";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Home/>
  </ThemeProvider>
    </>
  );
}

export default App;
