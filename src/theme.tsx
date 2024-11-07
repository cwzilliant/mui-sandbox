import { createTheme, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomPalette {
    anger: PaletteColorOptions;
    sunshine: PaletteColorOptions;
    steelBlue: PaletteColorOptions;
    violet: PaletteColorOptions;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Palette extends CustomPalette {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    anger: true;
    sunshine: true;
    steelBlue: true;
    violet: true;
  }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) =>
  augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    anger: createColor("#F40B27"),
    sunshine: createColor("#FFCE0B"),
    steelBlue: createColor("#5C76B7"),
    violet: createColor("#BC00A3"),
  },
});

export default theme;
