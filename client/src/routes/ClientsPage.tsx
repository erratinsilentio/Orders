import { Link } from "react-router-dom";
import style from "../styles/clients.module.css";
import { SmallClientCard } from "../components/card/SmallClientCard";
import { Client } from "../data";
import { getAllClients } from "../api/clients";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const ClientsPage = () => {
  const [clients, setClients] = useState<Client[] | null>(null);

  useEffect(() => {
    getAllClients().then((response) => setClients(response));
  }, []);

  if (!clients) return <p>loading...</p>;

  return (
    <div className={style.container}>
      <section className={style.action}>
        <Button variant="outlined" style={{ borderColor: "#2e3b55", marginRight: "25px" }}>
          <Link to={"/clients/add"} className={`${style.link} ${style.addLink}`}>
            Add Client
          </Link>
        </Button>
        <TextField id="outlined-basic" label="Search" variant="outlined" />
      </section>
      <section className={style.cards}>
        {clients.map((client) => (
          <Link to={`/clients/${client.id}`} state={client} className={style.link} key={client.id}>
            <SmallClientCard
              key={client.id}
              imie={client.imie}
              nazwisko={client.nazwisko}
              zdjecie={client.zdjecie}
              miasto={client.miasto}
              telefon={client.telefon}
            />
          </Link>
        ))}
      </section>
    </div>
  );
};
