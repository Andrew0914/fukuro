export interface SimulatorState {
  clients: Client[]
  servers: Client[]
  resources: Client[]
}

export interface Client {
  reqRate: number
  timeRate: number
  hasConnection: boolean
  coordX: number
  coordY: number
}

export const initialSimulatorState: SimulatorState = {
  clients: [],
  servers: [],
  resources: [],
}
