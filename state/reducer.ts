import { ActionType, AddClient, AddResource, AddService, SimulatorActions } from './actions'
import { Client, Service, Resource, SimulatorState } from './state'

export const simulatorReducer = (state: SimulatorState, action: SimulatorActions) => {
  switch (action.type) {
    case ActionType.AddClient:
      if (state.clients.length < 1) {
        return {
          ...state,
          clients: [action.payload, ...state.clients],
        }
      }

      return state
    case ActionType.AddService:
      if (state.services.length < 1) {
        return {
          ...state,
          services: [action.payload, ...state.services],
        }
      }

      return state

    case ActionType.AddResource:
      if (state.resources.length < 1) {
        return {
          ...state,
          resources: [action.payload, ...state.resources],
        }
      }

      return state

    default:
      return state
  }
}

// helper functions to simplify the caller
export const addClient = (Client: Client): AddClient => ({
  type: ActionType.AddClient,
  payload: Client,
})

export const addService = (Service: Service): AddService => ({
  type: ActionType.AddService,
  payload: Service,
})

export const addResource = (Resource: Resource): AddResource => ({
  type: ActionType.AddResource,
  payload: Resource,
})
