import { Client } from './state'

export enum ActionType {
  AddClient,
}

export interface AddClient {
  type: ActionType.AddClient
  payload: Client
}

export type SimulatorActions = AddClient
