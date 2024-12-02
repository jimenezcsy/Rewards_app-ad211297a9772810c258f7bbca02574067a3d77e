import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [sharedData, setSharedData] = useState(null);

    return (
        <AppContext.Provider value={{ sharedData, setSharedData }}>
            {children}
        </AppContext.Provider>
    );
};
