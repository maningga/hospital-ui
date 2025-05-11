import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook to access the context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user state will hold logged-in user info

  const login = (role) => {
    return new Promise((resolve, reject) => {
      if (role) {
        setUser({ role }); // Set user state with role
        resolve();
      } else {
        reject(new Error("Login failed"));
      }
    });
  };

  const logout = () => {
    setUser(null); // Clear the user state on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
