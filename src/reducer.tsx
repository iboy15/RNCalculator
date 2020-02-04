import { SAVE_EXPRESSION, CALCULATE_RESULT, CLEAR_RESULT } from "./constants";
import { createStore } from "redux";
const initialState = {
  expression: "0",
  result: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_RESULT:
      return initialState;
    case CALCULATE_RESULT: {
      let result;
      try {
        const temp = eval(state.expression);
        result = temp === parseInt(temp) ? temp : temp.toFixed(2);
      } catch (e) {
      } finally {
        if (!result || typeof +result !== "number") result = 0;
        return {
          ...state,
          result
        };
      }
    }
    case SAVE_EXPRESSION:
      const operator = ["+", "-", "*", "/"];
      const isOperator = operator.indexOf(action.payload) != -1;
      if (state.expression === "0" && isOperator) return state;
      return {
        ...state,
        expression:
          state.expression === "0" && !isOperator
            ? action.payload
            : isOperator
            ? operator.indexOf(state.expression[state.expression.length - 1]) !=
              -1
              ? state.expression.slice(0, -1) + action.payload
              : state.expression + action.payload
            : state.expression + action.payload,
        result:
          state.expression === "0" && !isOperator
            ? action.payload
            : isOperator
            ? state.result
            : operator.indexOf(state.expression[state.expression.length - 1]) !=
              -1
            ? action.payload
            : state.result + action.payload
      };

    default:
      return state;
  }
};
const store = createStore(rootReducer);
export default store;
