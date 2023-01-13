import { FullClientCard } from "../components/card/FullClientCard";
import { useParams } from "react-router-dom";
import { getClient } from "../api/clients";
import { useQuery } from "@tanstack/react-query";

export const ClientDetailsPage = () => {
  const params = useParams();

  const { data, isLoading, error } = useQuery(["client"], () => getClient(params.id as string));

  if (isLoading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return <FullClientCard client={data} />;
};
