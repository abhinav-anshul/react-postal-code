import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { Pin } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<Pin pincode='845401' showCountry={false} showDistrict={false} showBlock={false} />)
  })
})
