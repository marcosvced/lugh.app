export interface EnergyMeasure {
  suffix: string
  value: number
}

export const EnergyMeasures = {
  MWh: {
    suffix: 'MWh',
    value: 1,
  },
  KWh: {
    suffix: 'KWh',
    value: 1000,
  },
}
