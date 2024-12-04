import React from 'react'

export default function index(props) {
    const {className = '', name, onClick} = props
  return (
    <button className={`${className} btn btn-block`} onClick={onClick}>{name}</button>
  )
}
