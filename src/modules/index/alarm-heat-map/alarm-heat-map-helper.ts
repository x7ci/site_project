import { ItemSeverity, type HeatMapRow } from './alarm-heat-map';
import { sample } from 'lodash';

export const generateAlarmHeatMapData = (): HeatMapRow[] => {
  const data: HeatMapRow[] = [];

  for (let i = 0; i < 6; i++) {
    const dataGridRow: HeatMapRow = [];

    for (let j = 0; j < 27; j++) {
      const isActive: boolean = Math.random() > 0.75;

      // const isHighSeverity: boolean = Math.random() > 0.7;

      dataGridRow.push({
        isActive,
        severity: isActive ? (sample([ItemSeverity.low, ItemSeverity.medium, ItemSeverity.high])) : undefined,
      });
    }

    data.push(dataGridRow);
  }

  return data;
};
