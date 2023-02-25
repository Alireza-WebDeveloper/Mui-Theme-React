import { colors, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useContext } from 'react';
import { createContext } from 'react';
import '../style.css';
import { IconContext } from 'react-icons';
import useLocalStorage from '../Hook/useLocalStorage';
const Context = createContext();

const ThemeStore = (props) => {
  const { data: mode, setData: setMode } = useLocalStorage({
    key: 'theme',
    defaultValue: false,
  });

  const theme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light',
      default: {
        main: mode ? colors.grey[900] : colors.grey[200],
      },
      footer: {
        main: mode ? colors.grey[900] : colors.grey[200],
      },
      primary: { main: mode ? colors.deepPurple[400] : colors.deepPurple[800] },
      secondary: { main: mode ? colors.red[300] : colors.red[800] },
      warning: { main: mode ? colors.orange[300] : colors.orange[800] },
      info: { main: mode ? colors.amber[400] : colors.amber[700] },
    },
    typography: {
      fontFamily: 'Oswald',
      body1: {
        fontFamily: 'Domine',
      },
      body2: {
        fontFamily: 'Domine',
      },
      subtitle2: {
        fontFamily: 'Oswald',
      },
      h5: {
        fontFamily: 'RobotoSlab',
      },
      h2: {
        fontFamily: 'RobotoSlab',
      },
      h3: {
        fontFamily: 'RobotoSlab',
        fontSize: '3rem',
      },
      subtitle1: {
        fontFamily: 'Oswald',
      },
    },
  });
  const changeTheme = () => {
    setMode(!mode);
  };
  return (
    <IconContext.Provider value={{ size: '2.4rem' }}>
      <Context.Provider value={{ theme, changeTheme, mode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </Context.Provider>
    </IconContext.Provider>
  );
};

const ThemeContext = () => {
  const { theme, changeTheme, mode } = useContext(Context);
  return { theme, changeTheme, mode };
};

export { ThemeStore, ThemeContext };
