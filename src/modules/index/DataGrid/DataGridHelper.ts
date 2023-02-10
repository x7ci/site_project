import { ItemSeverity, type DataGridRow } from './DataGrid';
import { sample } from 'lodash';

export const generateDataGrid = (): DataGridRow[] => {
  const data: DataGridRow[] = [];

  for (let i = 0; i < 6; i++) {
    const dataGridRow: DataGridRow = [];

    for (let j = 0; j < 27; j++) {
      const isActive: boolean = Math.random() > 0.8;

      const isHighSeverity: boolean = Math.random() > 0.7;

      dataGridRow.push({
        isActive,
        severity: isActive ? (isHighSeverity ? ItemSeverity.high : sample([ItemSeverity.low, ItemSeverity.medium]) ?? ItemSeverity.low) : undefined,
      });
    }

    data.push(dataGridRow);
  }

  return data;
};
