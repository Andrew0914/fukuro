import React from 'react'
import { SimulatorState, initialSimulatorState } from './state'
import { SimulatorActions } from './actions'

export const SimulatorContext = React.createContext<{
  state: SimulatorState
  dispatch: React.Dispatch<SimulatorActions>
}>({
  state: initialSimulatorState,
  dispatch: () => undefined,
})
