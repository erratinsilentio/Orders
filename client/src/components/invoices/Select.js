import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export function BasicSelect({ orders, selected, setSelected, }) {
    return (_jsx(Box, { sx: { minWidth: 120 }, style: { minWidth: "49%" }, children: _jsxs(FormControl, { fullWidth: true, children: [_jsx(InputLabel, { id: "demo-simple-select-label", children: "Order" }), _jsx(Select, { labelId: "demo-simple-select-label", id: "demo-simple-select", value: selected, label: "order", onChange: (e) => setSelected(e.target.value), children: orders.map((order) => order && (_jsx(MenuItem, { value: order.id, children: order.id }, order.id))) })] }) }));
}
