import { Client } from "../../data";
import { Link } from "react-router-dom";
import style from "./fullCard.module.css";
import { deleteClient } from "../../api/clients";

type Props = {
  client: Client;
};

export const FullClientCard: React.FC<Props> = ({ client }) => {
  return (
    <div className={style.container}>
      {client.Zdjecie && <img src={client.Zdjecie} alt={client.Imie} />}
      <p>{client.Imie + " " + client.Nazwisko}</p>
      <p>{client.Miasto + " " + client.Kod}</p>
      <p>{client.Telefon}</p>
      <p>zamówienia:</p>
      <button>
        <Link to={`/clients/${client.id}/edit`} state={client}>
          Edit
        </Link>
      </button>
      <button onClick={() => deleteClient(client.id)}>
        <Link to={"/clients"}>DELETE</Link>
      </button>
    </div>
  );
};
