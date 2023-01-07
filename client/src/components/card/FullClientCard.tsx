import { Client } from "../../data";
import { Link } from "react-router-dom";
import style from "./fullCard.module.css";
import { deleteClient } from "../../api/clients";
import Button from "@mui/material/Button";
import { DataBox } from "./Box";
import Avatar from "@mui/material/Avatar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { formatName } from "../../utils/formatName";

type Props = {
  client: Client;
};

export const FullClientCard: React.FC<Props> = ({ client }) => {
  if (!client) return <p>loading...</p>;
  return (
    <DataBox className={style.box}>
      <div className={style.container}>
        <div className={style.left}>
          <Avatar
            style={{ background: "#2e3b65" }}
            aria-label="recipe"
            alt={client.imie + " " + client.nazwisko}
            src={client.zdjecie}
          >
            R
          </Avatar>
        </div>
        <div className={style.right}>
          <p>{formatName(client)}</p>
          <p>{"ul. " + client.ulica}</p>
          <p>{client.miasto + " " + client.kod}</p>
          <p>{client.telefon}</p>
          <p>
            {" "}
            <Accordion className={style.accord}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Orders</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 250 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Nr zamówienia</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {client.orders &&
                          client.orders.map((order) => (
                            <TableRow
                              key={order.id}
                              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                <Link to={`/orders/${order.id}`}>{"#" + order.id}</Link>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </p>
          <div className={style.buttons}>
            <Link to={`/clients/${client.id}/edit`} state={client} className={style.link}>
              <Button variant="outlined">Edit</Button>
            </Link>

            <Link to={"/clients"} className={style.link}>
              <Button onClick={() => deleteClient(client.id)} variant="outlined">
                DELETE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </DataBox>
  );
};
