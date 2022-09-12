import { createContext, useState } from "react";

const Context = createContext({});

export const StaticContext = ({ children }) => {
  const [userContext, setUserContext] = useState([]);

  return (
    <Context.Provider
      value={{
        userContext,
        setUserContext,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
