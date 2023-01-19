import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./UserContext";

export const ProtectedWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isLoggedIn } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) navigate("/");
  });

  return <>{children}</>;
};
