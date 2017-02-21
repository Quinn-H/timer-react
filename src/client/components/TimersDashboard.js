import React from 'react'
import EditableTimerList from './EditableTimerList'
import TogglebleTimerForm from './TogglebleTimerForm'

class TimersDashboard extends React.Component {
  render () {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList />
          <TogglebleTimerForm
            isOpen
          />
        </div>
      </div>
    )
  }
}

export default TimersDashboard
