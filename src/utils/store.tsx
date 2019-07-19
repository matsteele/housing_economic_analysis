import React from "react";


const initialState: iState = {
   currentSlideNumber: 0 
//   allUsers: [],
//   currentUser: "",
//   newTransactions: []
};

export const store = React.createContext<i.State | any>(initialState);

export const reducer = (state: i.State, action: iAction): iState => {
  console.log(state,action,"instore")
    switch (action.type) {
    case "SET_SLIDE_NUMBER":
      return {
        ...state,
        currentSlideNumber: action.payload,
      };
    // case "SET_USR":
    //   return {
    //     ...state,
    //     currentUser: action.payload
    //   };
    // case "SET_USR_DATA":
    //   return {
    //     ...state,
    //     currentUserTransactions: action.payload
    //   };
    // case "SET_NEW_TRANS":
    //   return {
    //     ...state,
    //     newTransactions: [...state.newTransactions, action.payload]
    //   };
    case "RESET_STORE":
      return initialState;
    default:
      return state;
  }
};

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  window.state = state 
  return (
    <store.Provider value={{ state, dispatch }}>
      {props.children}
    </store.Provider>
  );
};


// TYPES
interface iAction {
  type: string;
  payload: any;
}
