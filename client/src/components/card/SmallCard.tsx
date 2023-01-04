import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { grey, red } from "@mui/material/colors";
import style from "./smallCard.module.css";

type ClientProps = {
  imie: string;
  nazwisko: string;
  zdjecie?: string;
  miasto: string;
  telefon?: string | number;
};

export const SmallClientCard: React.FC<ClientProps> = ({
  imie,
  nazwisko,
  zdjecie,
  miasto,
  telefon,
}) => {
  return (
    <Card style={{ background: "#2e3b55" }}>
      <CardHeader
        className={style.container}
        avatar={
          <Avatar
            style={{ background: "#2e3b55" }}
            sx={{ bgcolor: grey[500] }}
            aria-label="recipe"
            alt={imie + " " + nazwisko}
            src={zdjecie}
          >
            A
          </Avatar>
        }
        title={imie + " " + nazwisko}
        subheader={miasto + " " + telefon}
      />
    </Card>
  );
};
