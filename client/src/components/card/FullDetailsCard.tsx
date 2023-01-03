import { Client } from "../../data";
import { Link } from "react-router-dom";
import style from "./fullCard.module.css";

type Props = {
  client: Client;
};

export const FullDetailsCard: React.FC<Props> = ({ client }) => {
  return (
    <div className={style.container}>
      {client.Zdjecie && <img src={client.Zdjecie} alt={client.Imie} />}
      <p>{client.Imie + " " + client.Nazwisko}</p>
      <p>{client.Miasto + " " + client.Kod}</p>
      <p>{client.Telefon}</p>
      <p>zamówienia:</p>
      <button>
        <Link to={`/clients/${client.ID}/edit`} state={client}>
          Edit
        </Link>
      </button>
      <button>DELETE</button>
    </div>
  );
};
