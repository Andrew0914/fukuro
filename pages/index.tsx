import React from 'react'
import { Main } from '../layout/Main'
import classes from '../styles/Home.module.css'
import { Client } from '../components/architecture/Client'

export default function Home(): JSX.Element {
  return (
    <Main>
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="620" className={classes.canvas}>
        <Client x={10} y={10} requestRate={10} timeRate={2} hasConnection={false} />
      </svg>
    </Main>
  )
}
