import { useSelector } from "react-redux";
import { RootState } from "../store/store";

import Button from "@mui/material/Button";
import { useState } from "react";
import { BasicSelect } from "../components/invoices/Select";
import BasicTable from "../components/invoices/Table";

export const InvoicesPage = () => {
  const orders = useSelector((state: RootState) => state.order);
  const [selected, setSelected] = useState<string>("");

  return (
    <>
      <BasicTable orders={orders} />
      <BasicSelect
        orders={orders}
        setSelected={setSelected}
        selected={selected}
      />
      <Button variant="outlined">ROZLICZ</Button>
    </>
  );
};
