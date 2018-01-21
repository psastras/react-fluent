import * as color from "color";

export const computeStylus = (c: string): "dark" | "light" => {
  const accentColor = color(c);
  const isDark =
    5 * accentColor.green() + 2 * accentColor.red() + accentColor.blue() <=
    8 * 128;
  return isDark ? "light" : "dark";
};
