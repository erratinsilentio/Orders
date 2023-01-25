import { Link } from "react-router-dom";
import style from "../styles/clients.module.css";
import { SmallClientCard } from "../components/card/SmallClientCard";
import { Client } from "../data";
import { getAllClients } from "../api/clients";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useQuery } from "@tanstack/react-query";
import { useThemeContext } from "../utils/ThemeContext";
import { useState } from "react";

export const ClientsPage = () => {
  const { data, isLoading, error } = useQuery(["clients"], getAllClients);
  const { theme } = useThemeContext();

  const [input, setInput] = useState<string>("");

  const searchClient = (client: Client) => {
    const clientName = client.imie + " " + client.nazwisko.toLowerCase();
    const searchName = input.toLowerCase();
    if (clientName.includes(searchName) || searchName === "") {
      return true;
    } else {
      return false;
    }
  };

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>error!</p>;

  return (
    <div className={style.container}>
      <section className={style.action}>
        <Button variant="outlined" style={{ marginRight: "25px" }}>
          <Link
            to={"/clients/add"}
            className={`${style.link} ${style.addLink}`}
          >
            Add Client
          </Link>
        </Button>
        <TextField
          sx={{
            border: `${theme === "dark" && "1px solid var(--primary)"}`,
            borderRadius: "5px",
          }}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </section>
      <section className={style.cards}>
        {data?.map(
          (client: Client) =>
            searchClient(client) && (
              <Link
                to={`/clients/${client.id}`}
                state={client}
                className={style.link}
                key={client.id}
              >
                <SmallClientCard key={client.id} client={client} />
              </Link>
            )
        )}
      </section>
    </div>
  );
};
