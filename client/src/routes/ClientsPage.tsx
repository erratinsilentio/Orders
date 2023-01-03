import { Link } from "react-router-dom";
import style from "../styles/clients.module.css";
import { ClientCard } from "../components/card/Card";
import { clientData } from "../data";

export const ClientsPage = () => {
  return (
    <div className={style.container}>
      {" "}
      <button>
        <Link to={"/clients/add"}>Add Client</Link>
      </button>
      {clientData.map((client) => (
        <Link to={`/clients/${client.ID}`} state={client} className={style.link} key={client.ID}>
          <ClientCard
            key={client.ID}
            imie={client.Imie}
            nazwisko={client.Nazwisko}
            zdjecie={client.Zdjecie}
            miasto={client.Miasto}
            telefon={client.Telefon}
          />
        </Link>
      ))}
    </div>
  );
};
