import React from 'react'
import ReactDOM from 'react-dom'
import TimersDashboard from './TimersDashboard'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TimersDashboard />,
    document.getElementById('app')
  )
})
