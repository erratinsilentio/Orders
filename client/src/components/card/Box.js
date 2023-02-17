import { jsx as _jsx } from "react/jsx-runtime";
import Box from "@mui/material/Box";
export function DataBox({ children }) {
    return (_jsx("div", { style: { width: "100%" }, children: _jsx(Box, { component: "span", sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 1,
                m: 1,
                bgcolor: (theme) => theme.palette.mode === "dark" ? "#101010" : "#fff",
                color: (theme) => theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                border: "1px solid",
                borderColor: (theme) => theme.palette.mode === "dark" ? "grey.800" : "grey.300",
                borderRadius: 2,
                fontSize: "0.875rem",
                fontWeight: "300",
            }, children: children }) }));
}
