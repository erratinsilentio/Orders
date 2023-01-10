import { useEffect, useState } from "react";
import { FullClientCard } from "../components/card/FullClientCard";
import { useParams } from "react-router-dom";
import { getClient } from "../api/clients";
import { Client } from "../data";
import { useQuery } from "@tanstack/react-query";

export const ClientDetailsPage = () => {
  const params = useParams();

  const { data, isLoading, error } = useQuery(["client"], () =>
    getClient(params.id)
  );

  if (isLoading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return <FullClientCard client={data} />;
};
