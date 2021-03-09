import React from "react";

var ExchangeStateContext = React.createContext();
var ExchangeDispatchContext = React.createContext();

function exchangeReducer(state, action) {
  switch (action.type) {
    case "setUserBalances":
      return {
        ...state,
        balance: action.payload.balance,
        tavanKharid: action.payload.tavanKharid,
      };
    case "setTackStocks":
      return { ...state, takeStocks: action.payload }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ExchangeProvider({ children }) {
  var [state, dispatch] = React.useReducer(exchangeReducer, {
    balance: undefined,
    tavanKharid: undefined,
    takeStocks: []
  });
  return (
    <ExchangeStateContext.Provider value={state}>
      <ExchangeDispatchContext.Provider value={dispatch}>
        {children}
      </ExchangeDispatchContext.Provider>
    </ExchangeStateContext.Provider>
  );
}

function useExchangeState() {
  var context = React.useContext(ExchangeStateContext);
  if (context === undefined) {
    throw new Error("useExchangeState must be used within a ExchangeProvider");
  }
  return context;
}

function useExchangeDispatch() {
  var context = React.useContext(ExchangeDispatchContext);
  if (context === undefined) {
    throw new Error("useExchangeDispatch must be used within a ExchangeProvider");
  }
  return context;
}

export { ExchangeProvider, useExchangeState, useExchangeDispatch, setUserBalances, setTackStocks };

// ###########################################################
function setUserBalances(dispatch, balance, tavanKharid) {
  dispatch({
    type: "setUserBalances",
    payload: {
      balance,
      tavanKharid
    }
  });
}

function setTackStocks(dispatch, list) {
  dispatch({
    type: "setTackStocks",
    payload: list
  });
}
