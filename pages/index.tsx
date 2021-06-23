import React, { useEffect, useReducer } from 'react'
import { Main } from '../layout/Main'
import classes from '../styles/Home.module.css'
import { Client } from '../components/architecture/Client'
import { Service } from '../components/architecture/Service'
import { Resource } from '../components/architecture/Resource'
import { SimulatorContext } from '../state/context'
import { addResource, simulatorReducer } from '../state/reducer'
import { initialSimulatorState } from '../state/state'
import { formatWithValidation } from 'next/dist/next-server/lib/utils'

export default function Home(): JSX.Element {
  const [state, dispatch] = useReducer(simulatorReducer, initialSimulatorState)

  useEffect(() => {
    console.log(state)
  }, [state])
  return (
    <SimulatorContext.Provider value={{ state, dispatch }}>
      <Main>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1200"
          height="620"
          className={classes.canvas}
        >
          {state.clients.map((c, index) => (
            <Client
              x={c.coordX}
              y={c.coordY}
              requestRate={c.reqRate}
              timeRate={c.timeRate}
              hasConnection={c.hasConnection}
              key={`client-${index}`}
            />
          ))}
          {state.services.map((c, index) => (
            <Service
              x={c.coordX}
              y={c.coordY}
              requestinprogress={c.reqinprogress}
              requestimaxcapacity={c.reqmaxcapacity}
              timeRate={c.timeRate}
              hasConnection={false}
              key={`service-${index}`}
            />
          ))}
          {state.resources.map((c, index) => (
            <Resource
              x={c.coordX}
              y={c.coordY}
              requestinprogress={c.reqinprogress}
              requestimaxcapacity={c.reqmaxcapacity}
              timeRate={c.timeRate}
              hasConnection={false}
              key={`resource-${index}`}
            />
          ))}
        </svg>
      </Main>
    </SimulatorContext.Provider>
  )
}
