import React from 'react'
import { Counter } from './Counter'
import { Button } from 'antd'

export { Page }

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      <Button>test antd</Button>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
