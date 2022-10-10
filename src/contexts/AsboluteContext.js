import React from "react";

export const AbsoluteDefaultState = {
  result: undefined,
  entities: [],
  values: "",
  hasError: false,
}

export const InputIntergersState = {
  value: [],
  error: false,
  button: 0,
}

export const AbsoluteContext = React.createContext(AbsoluteDefaultState);

export const AbsoluteActions = {
  resultData: "Result.Data",
  clearData: "Clear.Data",
}

export const AbsoluteReducer = (state, {type, payload}) => {
  switch(type) {
    case AbsoluteActions.resultData:
      return {...state, ...payload}
    case AbsoluteActions.clearData:
      return AbsoluteDefaultState
    default:
      return state
  }
}