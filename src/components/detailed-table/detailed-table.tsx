import { styled } from '@stitches/react';
import type { ComponentProps, ReactNode } from 'react';
import { Table, TableBody, TableCell, TableRow, T } from '../stitches';

export interface TableData {
  id?: string
  label: string | ReactNode
  value: string | ReactNode
  valueColor?: ComponentProps<typeof T>['color']
  unit?: string
}

interface Props {
  data: TableData[]
}

const DetailedTable = ({ data }: Props) => {
  return (
    <Wrapper>
      <Table size="1" width="max">
        <TableBody>
          {data.map((dataItem: TableData) => {
            const dataItemKey = `${dataItem.id ?? dataItem.label}-${dataItem.value}-${dataItem.unit}`;

            return (
              <TableRow key={dataItemKey} animation="flash">
                <TableCell>
                  {typeof dataItem.label === 'string'
                    ? (
                      <T size="4" color="gray10">{dataItem.label}</T>
                      )
                    : (
                        dataItem.label
                      )
                  }
                </TableCell>
                <TableCell>
                  {typeof dataItem.label === 'string'
                    ? (
                      <T size="4" color={dataItem.valueColor ?? 'cyan1'}>{dataItem.value}</T>
                      )
                    : (
                        dataItem.value
                      )}
                </TableCell>
                <TableCell>
                  <T size="4" color="gray10">{dataItem.unit ?? '- -'}</T>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled('div');

export default DetailedTable;
