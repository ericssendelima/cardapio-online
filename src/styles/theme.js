import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  colors: {
    red: [
      "#fff0f2",
      "#ffdde1",
      "#ffc1c8",
      "#ff95a1",
      "#ff596c",
      "#ff263f",
      "#fc0622",
      "#e2001a",
      "#af0519",
      "#900c1b",
      "#500009",
    ],
    black: [
      "#f6f6f6",
      "#e7e7e7",
      "#d1d1d1",
      "#b0b0b0",
      "#888888",
      "#6d6d6d",
      "#5d5d5d",
      "#4f4f4f",
      "#454545",
      "#3d3d3d",
      "#010101",
    ],

    // Cores de fonte
    fontColorRed: ["#e2001a"],
    fontColorDark: ["#0e101f"],
    fontColorLight: ["#f0f0f2"],
    // Cores de background
    backgroundRed: ["#e2001a"],
    backgroundLight: ["#f0f0f2"],
    backgroundDark: ["#0e101f"],
  },
  fontSizes: {
    xs: rem(10),
    sm: rem(11),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
  },
});
