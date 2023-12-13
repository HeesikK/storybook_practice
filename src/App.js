import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homepage";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
