import React from 'react'

export default function Disptask(prop) {
  return (
    <h2 style={prop.status === true ? {color: "green"} : {color : "red"}}>{prop.title}</h2>
  )
}
