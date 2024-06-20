import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("use어쩌구는 Auth내에서만 사용가능합니다.");
  }

  return context;
};
