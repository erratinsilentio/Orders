import { FullDetailsCard } from "../components/card/FullDetailsCard";
import { useLocation } from "react-router-dom";

export const ClientDetailsPage = () => {
  let { state } = useLocation();
  console.log(state);
  return <FullDetailsCard client={state} />;
};
