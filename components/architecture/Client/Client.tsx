import React, { FC, useEffect, Fragment } from 'react'
import classes from './Client.module.css'
import { DataTooltip } from '../../DataTooltip'

export interface IClientProps {
  x: number
  y: number
  requestRate?: number
  timeRate?: number
  hasConnection?: boolean
}

export const Client: FC<IClientProps> = ({
  x,
  y,
  requestRate = 1,
  timeRate = 1,
  hasConnection,
}) => {
  const labelPostion = {
    x: x + 20,
    y: y + 30,
  }

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (hasConnection) {
      timer = setInterval(() => {
        for (const request of Array(requestRate))
          console.log({ id: 'some_id', payload: 'some payload', connectTo: 'some_id' })
      }, timeRate * 1000)
    }

    return () => clearInterval(timer)
  }, [hasConnection, requestRate, timeRate])

  const dataTable: JSX.Element = (
    <table>
      <tr>
        <td>Request rate: </td>
        <td>{requestRate} requests</td>
      </tr>
      <tr>
        <td>Time rate: </td>
        <td>{timeRate} sec.</td>
      </tr>
    </table>
  )

  return (
    <DataTooltip content={dataTable}>
      <g data-testid="arch-client">
        <rect x={x} y={y} className={classes.client} />
        <text x={labelPostion.x} y={labelPostion.y} className={classes.client_label}>
          Client
        </text>
        <text x={x} y={y + 65} className={classes.client_data}>
          Rate: {requestRate} req / {timeRate} sec
        </text>
      </g>
    </DataTooltip>
  )
}
