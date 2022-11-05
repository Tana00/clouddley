import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { format } from "date-fns";
import { AppData } from "../global.interface";

function createData(
  name: string,
  url: string,
  region: string,
  created: string,
  environment: string
) {
  return { name, url, region, created, environment };
}

interface AppTableProps {
  lists: AppData[];
}

const AppTable = ({ lists }: AppTableProps) => {
  const rows: AppData[] = [];
  const getData = () => {
    lists.map((list: AppData) => {
      return rows.push(
        createData(
          list?.name,
          list?.url,
          list?.region,
          format(new Date(list?.created || ""), "dd/MM/yyyy"),
          list?.environment
        )
      );
    });
  };

  getData();

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
              <TableCell align="center">{row.created}</TableCell>
              <TableCell align="center">{row.environment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppTable;
