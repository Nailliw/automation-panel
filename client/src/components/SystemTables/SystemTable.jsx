import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme, status }) => ({
  backgroundColor: status == true ? "#a2f1a2" : "#efc4d3",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function SystemTable({ items }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sistema</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            {/* <StyledTableCell align="right">Ação</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" status={row.status}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right" status={row.status}>
                {row.status == true ? "ON" : "OFF"}
              </StyledTableCell>
              {/* <StyledTableCell align="right" status={row.status}>
                <Button variant="contained">Validar</Button>
              </StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SystemTable;
