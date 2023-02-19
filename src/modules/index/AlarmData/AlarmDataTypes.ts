import { type ComponentProps } from 'react';
import { type SingleUnit } from './AlarmDataGrid';

export enum UnitCode {
  EVC = 'EVC',
  AXH = 'AXH',
  ERR = 'ERR',
  OBX = 'OBX',
  DCX = 'DCX',
  CTA = 'CTA',
}

export type UnitCodeColors = {
  [key in UnitCode]: {
    variant: ComponentProps<typeof SingleUnit>['variant']
  }
};

export const unitCodeColors: UnitCodeColors = {
  [UnitCode.EVC]: {
    variant: 'primary',
  },
  [UnitCode.AXH]: {
    variant: 'cyanSecondary',
  },
  [UnitCode.ERR]: {
    variant: 'orangePrimary',
  },
  [UnitCode.OBX]: {
    variant: 'yellowSecondary',
  },
  [UnitCode.DCX]: {
    variant: 'secondary',
  },
  [UnitCode.CTA]: {
    variant: 'cyanPrimary'
  }
};

export type UnitCodeRow = UnitCode[];

export type UnitCodeData = UnitCodeRow[];

export interface Alarm {
  id: number
  label: string
  dueDate: string
  description: string
  unitCodeData: UnitCodeData
}
