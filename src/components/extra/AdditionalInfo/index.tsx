import React, { FC, memo, useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/system';
import { TAdditionalInfoProps } from '@/components/extra/AdditionalInfo/index.types';
import { ADDITIONAL_INFO_TABLE_LABELS, getRows } from '@/components/extra/AdditionalInfo/helpers/common.helpers';


const TableCell = styled(MuiTableCell)({
  root: {
    borderBottom: 'none'
  }
});

const AdditionalInfo: FC<TAdditionalInfoProps> = memo(({ data, type }) => {
  const rows = useMemo(() => getRows(type, data), [type, data]);

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={`row-${index}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {Object.keys(row).map((key, _, keys) => {
                const title = ADDITIONAL_INFO_TABLE_LABELS[key as keyof typeof ADDITIONAL_INFO_TABLE_LABELS];
                const value = row[key as never];

                return (
                  <React.Fragment key={key}>
                    <TableCell
                      component="th"
                      scope="row"
                      width={keys.length === 1 ? '50%' : '25%'}
                      sx={{
                        ...value !== '-' && title?.includes?.('About') && { verticalAlign: 'baseline' }
                      }}
                    >
                      <b>{title}:</b>
                    </TableCell>
                    <TableCell
                      align="right"
                      width={keys.length === 1 ? '50%' : '25%'}
                      sx={{
                        ...title?.includes?.('About') && { verticalAlign: 'baseline' },
                        ...value !== '-' && title?.includes?.('About') && { textAlign: 'left' }
                      }}
                    >
                      {value}
                    </TableCell>
                  </React.Fragment>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

AdditionalInfo.displayName = 'AdditionalInfo';

export default AdditionalInfo;
