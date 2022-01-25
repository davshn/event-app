import theme from 'styled-theming';

//Guarda los colores para los diferentes temas

export const backgroundColor = theme('mode', {
    light: '#EDEDED',
    dark: '#292929',
  });

export const TextColor = theme('mode', {
  light: '#292929',
  dark: '#EDEDED',
});

export const ImputColor = theme('mode', {
  light: 'gray',
  dark: '#EDEDED',
});

export const CartBorder = theme('mode', {
  light: '#e2e2e2',
  dark: '#1F1F1F',
});