import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AppData } from "../global.interface";

function createData(
  name: string,
  url: string,
  region: string,
  createdAt: string,
  environment: string
) {
  return { name, url, region, createdAt, environment };
}

const rows = [
  createData(
    "Journal",
    "https://journal-cloudley.app",
    "us-west-2",
    "21-10-22",
    "dev"
  ),
  createData(
    "Keefer",
    "https://journal-cloudley.app",
    "us-west-2",
    "21-10-22",
    "dev"
  ),
];

interface AppTableProps {
  list: AppData;
}

const AppTable = ({ list }: AppTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Url</TableCell>
            <TableCell align="center">Region</TableCell>
            <TableCell align="center">Created</TableCell>
            <TableCell align="center">App Environment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.url}</TableCell>
              <TableCell align="center">{row.region}</TableCell>
              <TableCell align="center">{row.createdAt}</TableCell>
              <TableCell align="center">{row.environment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppTable;
