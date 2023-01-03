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
      {client.zdjecie && <img src={client.zdjecie} alt={client.imie} />}
      <p>{client.imie + " " + client.nazwisko}</p>
      <p>{client.miasto + " " + client.kod}</p>
      <p>{client.telefon}</p>
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
