import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const savedUser = localStorage.getItem('user');  
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));  
      } catch (error) {
        console.log("Error loading user from localStorage:", error);
        localStorage.removeItem('user');
      }
    }
  }, []);


  const login = (userData) => {
    console.log("Saving user to localStorage:", userData);  
    setUser(userData);  
    localStorage.setItem('user', JSON.stringify(userData)); 
  };


  const logout = () => {
    console.log("Removing user from localStorage"); 
    setUser(null); 
    localStorage.removeItem('user'); 
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      setUser: login,
      logout
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;