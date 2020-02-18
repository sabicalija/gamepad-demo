export const register = (state, { id, index }) => {
  const pos = state.gamepads.findIndex(gamepad => gamepad.index === index);
  if (pos >= 0) state.gamepads.splice(pos, 1, { id, index });
  else state.gamepads.push({ id, index });
};

export const unregister = (state, { index }) => {
  const pos = state.gamepads.findIndex(gamepad => gamepad.index === index);
  if (pos === state.selection) state.selection = state.gamepads.length > 0 ? 0 : -1;
  if (pos >= 0) state.gamepads.splice(pos, 1);
};

export const select = (state, position) => {
  state.selection = position;
};
