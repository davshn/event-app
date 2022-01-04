export const SET_DARK_ACTIVE = 'SET_DARK_ACTIVE';
export const SET_DARK_INACTIVE = 'SET_DARK_INACTIVE';

//Acciones del estado para el modo oscuro

export function setDarkModeOn() {
    return { type: SET_DARK_ACTIVE};
  }
export function setDarkModeOff() {
    return { type: SET_DARK_INACTIVE};
  }

