import { Link } from "react-router-dom";
import style from "../styles/clients.module.css";
import { SmallClientCard } from "../components/card/SmallClientCard";
import { Client } from "../data";
import { getAllClients } from "../api/clients";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useQuery } from "@tanstack/react-query";
import { useThemeContext } from "../utils/ThemeContext";

export const ClientsPage = () => {
  const { data, isLoading, error } = useQuery(["clients"], getAllClients);
  const { theme } = useThemeContext();

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
        />
      </section>
      <section className={style.cards}>
        {data?.map((client) => (
          <Link
            to={`/clients/${client.id}`}
            state={client}
            className={style.link}
            key={client.id}
          >
            <SmallClientCard key={client.id} client={client} />
          </Link>
        ))}
      </section>
    </div>
  );
};
