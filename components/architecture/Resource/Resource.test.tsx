import React from 'react'
import { render, screen } from '@testing-library/react'
import { Resource, IResourceProps } from './Resource'

describe('Architecture/Resource', () => {
  test('Render resource component as svg element and', () => {
    // Arrange
    const resourceProps: IResourceProps = {
      x: 1,
      y: 1,
    }
    // Act
    render(
      <svg>
        <Resource {...resourceProps} />
      </svg>
    )
    // Assert
    const rect = screen.queryByTestId('arch-resource')?.children[0]
    expect(rect?.tagName).toBe('rect')
    expect(screen.queryByText('Resource')).toBeInTheDocument()
    expect(screen.queryByText('Req. in progress: 1 req / 1 sec')).toBeInTheDocument()
  })
})
