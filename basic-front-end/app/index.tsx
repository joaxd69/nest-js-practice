import Login from "@/src/components/Auth/Login/Login";
import Register from "@/src/components/Auth/Register";
import { useState } from "react";

export default function AuthScreen() {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  return (
    <>
      {!isRegistered ? (
        <Login setIsRegistered={setIsRegistered} />
      ) : (
        <Register setIsRegistered={setIsRegistered} />
      )}
    </>
  );
}
