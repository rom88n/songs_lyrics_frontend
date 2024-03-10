import React, { Component, ElementType, FC, memo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/system';
import { Link } from '@mui/material';
import Chip from '@mui/material/Chip';

type TAdditionalInfoProps = {
  rows: any
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
          {rows.map((row: any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                width="25%"
                sx={{ verticalAlign: 'baseline' }}
              >
                <b>{row.name}:</b>
              </TableCell>
              <TableCell align="left" width="25%">{row.calories}</TableCell>
              <TableCell
                align="left"
                width="25%"
                sx={{ verticalAlign: 'baseline' }}
              >
                <b>{row.fat}:</b>
              </TableCell>
              <TableCell
                align="right"
                width="25%"
                sx={{
                  ...row.fat?.includes?.('About') && { textAlign: 'left' }
                }}
              >
                {row.carbs}
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
