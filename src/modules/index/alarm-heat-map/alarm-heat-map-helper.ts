import { ItemSeverity, type HeatMapRow } from './alarm-heat-map';
import { sample } from 'lodash';
import dayjs from 'dayjs';

export const generateAlarmHeatMapData = (): HeatMapRow[] => {
  const data: HeatMapRow[] = [];

  // for (let i = 6; i >= 0; i--) {
  for (let i = 0; i < 7; i++) {
    const dataGridRow: HeatMapRow = {
      day: dayjs().subtract(i, 'days').toISOString(),
      data: [],
    };

    for (let j = 0; j < 24; j++) {
      const isActive: boolean = Math.random() > 0.75;

      // const isHighSeverity: boolean = Math.random() > 0.7;

      dataGridRow.data.push({
        isActive,
        severity: isActive ? (sample([ItemSeverity.low, ItemSeverity.medium, ItemSeverity.high])) : undefined,
      });
    }

    data.push(dataGridRow);
  }

  return data;
};
