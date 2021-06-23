import { Client, Service, Resource } from './state'

export enum ActionType {
  AddClient,
  AddService,
  AddResource,
}

export interface AddClient {
  type: ActionType.AddClient
  payload: Client
}

export interface AddService {
  type: ActionType.AddService
  payload: Service
}

export interface AddResource {
  type: ActionType.AddResource
  payload: Resource
}

export type SimulatorActions = AddClient | AddService | AddResource
