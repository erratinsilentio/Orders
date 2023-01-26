import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { OrderSlice } from "../../store/orderSlice";

export function BasicSelect({
  orders,
  selected,
  setSelected,
}: {
  orders: OrderSlice[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Box sx={{ minWidth: 120 }} style={{ minWidth: "49%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Order</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label="order"
          onChange={(e) => setSelected(e.target.value)}
        >
          {orders.map(
            (order) =>
              String(order.id)?.length > 0 && (
                <MenuItem value={order.id} key={order.id}>
                  {order.id}
                </MenuItem>
              )
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
