import React, { useReducer } from 'react'
import { Main } from '../layout/Main'
import classes from '../styles/Home.module.css'
import { Client } from '../components/architecture/Client'
import { SimulatorContext } from '../state/context'
import { simulatorReducer } from '../state/reducer'
import { initialSimulatorState } from '../state/state'

export default function Home(): JSX.Element {
  const [state, dispatch] = useReducer(simulatorReducer, initialSimulatorState);
  return (
    <SimulatorContext.Provider value={{ state, dispatch }}>
      <Main>
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="620" className={classes.canvas}>
          {state.clients.map((c, index) =>
            <Client x={c.coordX} y={c.coordY} requestRate={c.reqRate} timeRate={c.timeRate} hasConnection={c.hasConnection} key={`client-${index}`}/>
          )}
        </svg>
      </Main>
    </SimulatorContext.Provider>
  )
}
