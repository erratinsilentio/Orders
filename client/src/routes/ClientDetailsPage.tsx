import { useEffect, useState } from "react";
import { FullClientCard } from "../components/card/FullClientCard";
import { useLocation, useParams } from "react-router-dom";
import { getClient } from "../api/clients";
import { Client } from "../data";

export const ClientDetailsPage = () => {
  const [client, setClient] = useState<Client | null>(null);
  const params = useParams();

  useEffect(() => {
    console.log(params.id);
    if (!!params.id) {
      getClient(params.id).then((data) => {
        setClient(data);
        console.log(client);
      });
    }
  }, [params]);

  if (!client) return <p>loading...</p>;
  return <FullClientCard client={client} />;
};
