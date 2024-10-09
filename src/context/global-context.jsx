import { useContext, createContext, useState } from "react";

export const globalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // this is just an example
  return (
    <globalContext.Provider value={{ user, setUser }}>
      {children}
    </globalContext.Provider>
  );
};

