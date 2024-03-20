import React, { FC, memo, ReactNode } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/system';

type TAdditionalInfoProps = {
  rows: { title1: string; value1: ReactNode; title2: string; value2: ReactNode; }[]
}

const TableCell = styled(MuiTableCell)({
  root: {
    borderBottom: 'none'
  }
});

const AdditionalInfo: FC<TAdditionalInfoProps> = memo(({ rows }) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                width="25%"
                sx={{ verticalAlign: 'baseline' }}
              >
                <b>{row.title1}:</b>
              </TableCell>
              <TableCell align="left" width="25%">{row.value1}</TableCell>
              <TableCell
                align="left"
                width="25%"
                sx={{ verticalAlign: 'baseline' }}
              >
                <b>{row.title2}:</b>
              </TableCell>
              <TableCell
                align="right"
                width="25%"
                sx={{
                  ...row.title2?.includes?.('About') && { textAlign: 'left' }
                }}
              >
                {row.value2}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

AdditionalInfo.displayName = 'AdditionalInfo';

export default AdditionalInfo;
