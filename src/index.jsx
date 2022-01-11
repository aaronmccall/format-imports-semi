import React from 'react'
import { render } from 'react-dom'

import Content from './Content'

export const Component = () => (
  <div style={{ paddingTop: '10vh' }}>
    <h1>Semi-colon bug repro</h1>
    <Content />
  </div>
)

render(<Component />, document.getElementById('root'))
