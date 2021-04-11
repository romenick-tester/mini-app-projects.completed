import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  function removeItem(id) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }

  const vars = { ...state };
  const funcs = { clearCart, removeItem };
  return (
    <AppContext.Provider value={{ ...vars, ...funcs }}>
      {children}
    </AppContext.Provider>
  )
};

const useGlobalContext = () => {
  return useContext(AppContext);
}

export { useGlobalContext, AppProvider };
