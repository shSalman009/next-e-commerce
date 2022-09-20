import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const useUser = () => {
  return useContext(Context);
};

export default function UserContext({ children }) {
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState(null);

  const router = useRouter();

  const signUp = async (data) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();

    return response;
  };

  const login = async (data) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    if (response.success) {
      localStorage.setItem(
        "user",
        JSON.stringify({ email: data.email, token: response.token })
      );
    }

    return response;
  };

  const logOut = () => {
    localStorage.removeItem("user");
    setUserToken(null);
  };
  const getUser = async (emeil) => {
    const userToken = JSON.parse(localStorage.getItem("user"));
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUser`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userToken.email),
    });
    const response = await res.json();
    setUser(response.user);
  };
  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("user"));
    if (userToken) {
      setUserToken(userToken);
    }

    if (userToken) {
      getUser();
    }
  }, [router.query]);

  return (
    <Context.Provider
      value={{ user, userToken, getUser, signUp, login, logOut }}
    >
      {children}
    </Context.Provider>
  );
}
