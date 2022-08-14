import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const useUser = () => {
  return useContext(Context);
};

export default function UserContext({ children }) {
  const [user, setUser] = useState(null);

  const router = useRouter();

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(JSON.parse(token));
    }
  }, [router.query]);

  return (
    <Context.Provider value={{ user, logOut }}>{children}</Context.Provider>
  );
}
