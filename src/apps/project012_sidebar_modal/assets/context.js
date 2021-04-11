import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    return (
        <AppContext.Provider value="test">
            {children}
        </AppContext.Provider>
    )
}

export {
    AppContext, AppProvider
}