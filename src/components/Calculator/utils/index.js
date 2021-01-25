export const calculatorsButtons = [
  ["DEL", "+/-", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ",", "="],
];

export const initialState = { expression: "", result: 0 };

export const reducer = (state, action) => {
  switch (action) {
    case "=":
      // eslint-disable-next-line no-eval
      return { ...state, result: eval(state.expression) };
    case "DEL":
      return { ...state, expression: "" };
    default:
      return { ...state, expression: state.expression + action };
  }
};
