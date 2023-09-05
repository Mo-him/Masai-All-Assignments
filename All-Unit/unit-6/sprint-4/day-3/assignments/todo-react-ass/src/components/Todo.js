import React from 'react'
import Disptask from './Disptask';
export default function Todo(prop) {
  let data = prop.task;
  return (
    <div id = "todo">
      <h1>TODO LIST</h1>
      {
        data.map((item) => (
          <Disptask title={item.title} status={item.status} key={item.id} />
        ))
      }
    </div>
  )
}
