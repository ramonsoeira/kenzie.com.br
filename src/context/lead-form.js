import React, { createContext, useReducer } from "react";

const initialState = { open: false };
const LeadFormContext = createContext(initialState);

const LeadFormReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "open":
      return { ...state, open: true };
    case "close":
      return { ...state, open: false };
    default:
      return state;
  }
};

const LeadFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LeadFormReducer, initialState);

  return (
    <LeadFormContext.Provider value={[state, dispatch]}>
      {children}
    </LeadFormContext.Provider>
  );
};

export { LeadFormContext, LeadFormProvider };
