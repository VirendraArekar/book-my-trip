import React from 'react'

export default function index(props) {
    const {className = '', name, onClick , btn = 'btn-block' } = props
  return (
    <button className={`${className} btn ${btn}`} onClick={onClick}>{name}</button>
  )
}
