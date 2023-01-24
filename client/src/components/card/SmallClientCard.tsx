import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import style from "./smallCard.module.css";
import { Client } from "../../data";
import { formatName } from "../../utils/formatName";
import { formatPhone } from "../../utils/formatPhone";

export const SmallClientCard = ({ client }: { client: Client }) => {
  return (
    <Card
      className={style.container}
      style={{ marginBottom: "20px", backgroundColor: "#f0f9ff" }}
    >
      <CardHeader
        avatar={
          <Avatar
            style={{ background: "#2e3b65" }}
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            alt={formatName(client.imie + " " + client.nazwisko)}
            src={client.zdjecie}
          >
            R
          </Avatar>
        }
        title={formatName(client.imie + " " + client.nazwisko)}
        subheader={
          formatName(client.miasto) + ", " + formatPhone(client.telefon)
        }
      />
    </Card>
  );
};
