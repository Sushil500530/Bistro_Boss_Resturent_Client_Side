import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
  const authConnect = useContext(AuthContext);
  return authConnect;
};

export default useAuth;