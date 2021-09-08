import React from "react";

const Context = React.createContext();

function ProviderTheme({ children }) {
  const [theme, setTheme] = React.useState(
    JSON.parse(window.localStorage.getItem("th")) || "light"
  );
  return (
    <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>
  );
}

export { Context, ProviderTheme };
