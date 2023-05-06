import { UnitCode, type Alarm } from './alarm-view.types';

export const mainBearingTemp: Alarm = {
  id: 42953,
  dueDate: '2023-12-28',
  label: 'MAIN_BEARING_TEMP',
  description: `The main bearing temperature of the unit has exceeded the upper limit of the recommended range of operational standards. 
These elevated temperatures may be due to a heated application, a recently greased bearing, oil level issues or early stages of bearing failure.`,
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

export const hydrPumpAeration: Alarm = {
  id: 42969,
  dueDate: '2024-01-28',
  label: 'HYDR_PUMP_AERATION',
  description: `Possible signs of aeration has been detected in the hydraulic system. Operating the system when air is present may 
result in the pump being unable to reach the pressures required to operate the system. Check for (1) defective seals allowing air into the pump inlet line, (2) damaged inlet hoses and connections.`,
  unitCodeData: [
    [UnitCode.OBX, UnitCode.EVC, UnitCode.ERR, UnitCode.OBX],
    [UnitCode.AXH, UnitCode.ERR, UnitCode.EVC, UnitCode.CTA],
    [UnitCode.DCX, UnitCode.DCX, UnitCode.EVC, UnitCode.EVC],
    [UnitCode.EVC, UnitCode.AXH, UnitCode.CTA, UnitCode.OBX],
  ]
};
