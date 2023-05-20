'use client'
import { useState } from "react";
import { Login } from "./FormLogin";
import { Register } from "./FormRegister";

export function Form() {
  const [registeredUser, setRegisteredUser] = useState(true); 

  return (
    <> 
    {registeredUser?
      <Login setRegisteredUser={setRegisteredUser} /> :
      <Register setRegisteredUser={ setRegisteredUser } />
    }
    </>
  )
}