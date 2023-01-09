import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import style from "./smallCard.module.css";
import { Client } from "../../data";
import { formatName } from "../../utils/formatName";

export const SmallClientCard = ({ client }: { client: Client }) => {
  return (
    <Card className={style.container} style={{ marginBottom: "20px" }}>
      <CardHeader
        avatar={
          <Avatar
            style={{ background: "#2e3b65" }}
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            alt={formatName(client)}
            src={client.zdjecie}
          >
            R
          </Avatar>
        }
        title={formatName(client)}
        subheader={client.miasto + ", " + client.telefon}
      />
    </Card>
  );
};
