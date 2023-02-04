import { styled } from '@stitches/react';
import type { ComponentProps, ReactNode } from 'react';
import { Table, TableBody, TableCell, TableRow, Text } from './stitches';

export interface TableData {
  id?: string
  label: string | ReactNode
  value: string | ReactNode
  valueColor?: ComponentProps<typeof Text>['color']
  unit?: string
}

interface Props {
  data: TableData[]
}

const DetailedTable = ({ data }: Props) => {
  return (
    <Wrapper>
      <Table size="1">
        <TableBody>
          {data.map((dataItem: TableData) => {
            const dataItemKey = `${dataItem.id ?? dataItem.label}-${dataItem.value}-${dataItem.unit}`;

            return (
              <TableRow key={dataItemKey} animation="flash">
                <TableCell>
                  {typeof dataItem.label === 'string'
                    ? (
                      <Text size="4" color="gray10">{dataItem.label}</Text>
                      )
                    : (
                        dataItem.label
                      )
                  }
                </TableCell>
                <TableCell>
                  {typeof dataItem.label === 'string'
                    ? (
                      <Text size="4" color={dataItem.valueColor ?? 'cyan'}>{dataItem.value}</Text>
                      )
                    : (
                        dataItem.value
                      )}
                </TableCell>
                <TableCell>
                  <Text size="4" color="gray10">{dataItem.unit ?? '- -'}</Text>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

DetailedTable.defaultProps = {

};

const Wrapper = styled('div', {

});

export default DetailedTable;
