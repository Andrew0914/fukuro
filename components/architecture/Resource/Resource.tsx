import React, { FC, useState } from 'react'
import classes from './Resource.module.css'
import { DataTooltip } from '../../DataTooltip'
import { DataTable } from '../../DataTable/DataTable'
import { IResourceProps } from '../../../interfaces/IResource'
import { makeLabelPosition } from '../../../utils/utilities'
import { Modal } from '../../Modal/ModalResource'
import { Arrow } from '../../Arrow'
import { useModal } from '../../../hooks/useModal'

export const Resource: FC<IResourceProps> = ({
  id,
  title,
  x,
  y,
  minimumlatency = 1,
  maximlatency = 1,
  failurerate = 1,
  concurrencia = 1,
}) => {
  const { open, handleClick, handleClose } = useModal()
  const labelPostion = makeLabelPosition(x, y)

  const DataJSON: object[] = [
    {
      title: 'Min. latency',
      value: minimumlatency,
      field: 'minLatency',
      postfix: 'sec',
      abbv: 'sec',
    },
    {
      title: 'Max. latency',
      value: maximlatency,
      field: 'maxLatency',
      postfix: 'sec',
      abbv: 'sec',
    },
    {
      title: 'Failure rate',
      value: failurerate,
      field: 'failureRate',
      postfix: '%',
      abbv: '%',
    },
    {
      title: 'Concurrencia',
      value: concurrencia,
      field: 'concurrency',
      postfix: '',
      abbv: '',
    },
  ]

  return (
    <>
      <DataTooltip content={<DataTable body={DataJSON} />}>
        <g data-testid="arch-resource">
          <rect id={id} x={x} y={y} className={classes.resource} onClick={handleClick} />
          <Arrow x={210} y={y} x2={x} y2={y} />
          <text x={labelPostion.x} y={labelPostion.y} className={classes.resource_label}>
            {title}
          </text>
          <text x={x} y={y + 65} className={classes.resource_data}>
            Min latency: {minimumlatency} sec
          </text>
          <br />
          <text x={x} y={y + 85} className={classes.resource_data}>
            Max latency: {maximlatency} sec
          </text>
          <text x={x} y={y + 105} className={classes.resource_data}>
            Failure rate: {failurerate} %
          </text>
          <text x={x} y={y + 125} className={classes.resource_data}>
            Concurrencia: {concurrencia}
          </text>
        </g>
      </DataTooltip>
      {open && (
        <Modal
          open={open}
          data={[
            {
              title: 'title',
              value: title,
              field: 'label',
              postfix: '',
              abbv: '',
            },
            ...DataJSON,
          ]}
          handleClose={handleClose}
          handleSave={handleClose}
          title={'Edit Resource params'}
        />
      )}
    </>
  )
}
