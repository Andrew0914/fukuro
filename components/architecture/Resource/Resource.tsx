import React, { FC, useEffect, Fragment } from 'react'
import classes from './Resource.module.css'
import { DataTooltip } from '../../DataTooltip'

export interface IResourceProps {
  x: number
  y: number
  requestinprogress?: number
  requestimaxcapacity?: number
  timeRate?: number
  hasConnection?: boolean
}

export const Resource: FC<IResourceProps> = ({
  x,
  y,
  requestinprogress = 1,
  requestimaxcapacity = 1,
  timeRate = 1,
  hasConnection,
}) => {
  const labelPostion = {
    x: x + 20,
    y: y + 30,
  }

  const dataTable: JSX.Element = (
    <table>
      <tr>
        <td>Req. in progress: </td>
        <td>{requestinprogress} requests</td>
      </tr>
      <tr>
        <td>Time rate: </td>
        <td>{timeRate} sec.</td>
      </tr>
    </table>
  )

  return (
    <DataTooltip content={dataTable}>
      <g data-testid="arch-resource">
        <rect x={x} y={y} className={classes.resource} />
        <text x={labelPostion.x} y={labelPostion.y} className={classes.resource_label}>
          Resource
        </text>
        <text x={x} y={y + 65} className={classes.resource_data}>
          Req. in progress: {requestinprogress} req / {timeRate} sec
        </text>
        <br />
        <text x={x} y={y + 85} className={classes.resource_data}>
          Max req. capacity: {requestimaxcapacity} req / {timeRate} sec
        </text>
      </g>
    </DataTooltip>
  )
}
