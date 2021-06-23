export interface SimulatorState {
  clients: Client[]
  services: Service[]
  resources: Resource[]
}

export interface Client {
  reqRate: number
  timeRate: number
  hasConnection: boolean
  coordX: number
  coordY: number
}

export interface Service {
  reqinprogress: number
  reqmaxcapacity: number
  timeRate: number
  coordX: number
  coordY: number
}

export interface Resource {
  reqinprogress: number
  reqmaxcapacity: number
  timeRate: number
  coordX: number
  coordY: number
}

export const initialSimulatorState: SimulatorState = {
  clients: [],
  services: [],
  resources: [],
}
