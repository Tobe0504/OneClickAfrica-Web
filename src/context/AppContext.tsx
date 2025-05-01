"use client";

import { createContext, RefObject, useRef } from "react";

type AppContextType = {
  children: React.ReactNode;
};

type AppContextValuesType = {
  containerRef: RefObject<HTMLDivElement | null>;
};

export const AppContext = createContext({} as AppContextValuesType);

const AppContextProvider = ({ children }: AppContextType) => {
  // refs
  const containerRef = useRef(null);

  console.log(containerRef);

  return (
    <AppContext.Provider value={{ containerRef }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
