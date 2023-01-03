import { Link } from "react-router-dom";
import style from "../styles/clients.module.css";
import { ClientCard } from "../components/card/Card";
import { Client } from "../data";
import { getAllClients } from "../api/clients";
import { useState, useEffect } from "react";

export const ClientsPage = () => {
  const [clients, setClients] = useState<Client[] | null>(null);

  useEffect(() => {
    getAllClients().then((response) => setClients(response));
  }, []);

  if (!clients) return <p>loading...</p>;

  return (
    <div className={style.container}>
      {" "}
      <button>
        <Link to={"/clients/add"}>Add Client</Link>
      </button>
      {clients.map((client) => (
        <Link to={`/clients/${client.id}`} state={client} className={style.link} key={client.id}>
          <ClientCard
            key={client.id}
            imie={client.imie}
            nazwisko={client.nazwisko}
            zdjecie={client.zdjecie}
            miasto={client.miasto}
            telefon={client.telefon}
          />
        </Link>
      ))}
    </div>
  );
};
