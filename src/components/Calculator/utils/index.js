export const calculatorsButtons = [
  ["DEL", "+/-", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ",", "="],
];

export const initialState = { expression: "", result: 0 };

const invalidInputs = ["DEL", "+/-", "%", "/", "*", "-", "+", ""];

export const reducer = (state, action) => {
  switch (action) {
    case "=":
      if (invalidInputs.some((el) => state.expression === el))
        return { result: 0, expression: "" };
      // eslint-disable-next-line no-eval
      return { expression: "", result: eval(state.expression) };
    case "DEL":
      return { result: 0, expression: "" };
    default:
      return { result: 0, expression: state.expression + action };
  }
};
