import React from 'react'
import { render, screen } from '@testing-library/react'
import { Service, IServiceProps } from './Service'

describe('Architecture/Service', () => {
  test('Render service component as svg element and', () => {
    // Arrange
    const serviceProps: IServiceProps = {
      x: 1,
      y: 1,
    }
    // Act
    render(
      <svg>
        <Service {...serviceProps} />
      </svg>
    )
    // Assert
    const rect = screen.queryByTestId('arch-service')?.children[0]
    expect(rect?.tagName).toBe('rect')
    expect(screen.queryByText('Service')).toBeInTheDocument()
    expect(screen.queryByText('Req. in progress: 1 req / 1 sec')).toBeInTheDocument()
  })
})
