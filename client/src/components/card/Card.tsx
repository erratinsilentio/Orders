import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

type ClientProps = {
  imie: string;
  nazwisko: string;
  zdjecie?: string;
  miasto: string;
  telefon?: string | number;
};

export const ClientCard: React.FC<ClientProps> = ({ imie, nazwisko, zdjecie, miasto, telefon }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            alt={imie + " " + nazwisko}
            src={zdjecie}
          >
            R
          </Avatar>
        }
        title={imie + " " + nazwisko}
        subheader={miasto + " " + telefon}
      />
    </Card>
  );
};
