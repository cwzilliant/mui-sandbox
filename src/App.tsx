import { Buttons } from "./components/Buttons";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Buttons />
    </ThemeProvider>
  );
};

export default App;
