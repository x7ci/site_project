import { UnitCode, type Alarm } from './AlarmDataTypes';

export const mainBearingTemp: Alarm = {
  id: 42953,
  dueDate: '2023-12-28',
  label: 'MAIN_BEARING_TEMP',
  description: `The main bearing temperature of the unit has exceeded the upper limit of the recommended range of operational standards. 
These elevated temperatures may be due to a heated application, a recently greased bearing, oil level issues, early stages of bearing failure.`,
  unitCodeData: [
    [UnitCode.EVC, UnitCode.CTA, UnitCode.ERR, UnitCode.EVC],
    [UnitCode.AXH, UnitCode.OBX, UnitCode.EVC, UnitCode.DCX],
    [UnitCode.ERR, UnitCode.EVC, UnitCode.ERR, UnitCode.AXH],
    [UnitCode.EVC, UnitCode.CTA, UnitCode.OBX, UnitCode.OBX],
  ]
};

export const mainBearingVibr: Alarm = {
  id: 42959,
  dueDate: '2024-01-28',
  label: 'MAIN_BEARING_VIBR',
  description: `Increase in bearing vibration has been detected. Check vibration analysis in monitoring system. Possible root causes: 
(1) geometrical imperfections during the manufacturing process, (2) defects on the rolling surfaces, (3) geometrical errors in associated components.`,
  unitCodeData: [
    [UnitCode.CTA, UnitCode.OBX, UnitCode.EVC, UnitCode.EVC],
    [UnitCode.EVC, UnitCode.AXH, UnitCode.AXH, UnitCode.ERR],
    [UnitCode.OBX, UnitCode.DCX, UnitCode.ERR, UnitCode.ERR],
    [UnitCode.EVC, UnitCode.AXH, UnitCode.CTA, UnitCode.OBX],
  ]
};
