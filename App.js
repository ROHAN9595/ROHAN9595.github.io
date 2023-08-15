import React from 'react'

import { ExampleComponent } from 'updated'
import 'updated/dist/index.css'
import {ConfigurableComponent} from './ConfigurableComponent'
const App = () => {
  return (
  <div className="app">
  <ExampleComponent text="Create React Library Example 😄" />
    <ConfigurableComponent color="red" text="Hello, Red!" />
    <ConfigurableComponent color="blue" text="Hello, Blue!" />
  </div>
  )
}

export default App
