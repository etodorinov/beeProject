import { createContext, useState } from "react";

export const HiveContext = createContext({});

export const HiveProvider = ({ children }) => {
  const [currentHive, setCurrentHive] = useState();

  const currentHiveFromDetails = (hiveFromDetails) => {
    setCurrentHive(hiveFromDetails);
  };

  return (
    <HiveContext.Provider value={{ currentHive, currentHiveFromDetails }}>
      {children}
    </HiveContext.Provider>
  );
};
