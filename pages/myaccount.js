import React, { useState } from "react";
import Edit from "../components/profile/Edit";
import Password from "../components/profile/Password";
import Profile from "../components/profile/Profile";
import { useUser } from "../context/UserContext";

export default function Myaccount() {
  const [current, setCurrent] = useState(0);

  const { user, getUser } = useUser();

  return (
    <>
      {current == 0 && <Profile user={user} setCurrent={setCurrent} />}
      {current == 1 && (
        <Edit user={user} getUser={getUser} setCurrent={setCurrent} />
      )}
      {current == 3 && <Password user={user} setCurrent={setCurrent} />}
    </>
  );
}
