import React from 'react'
import Timer from './Timer'
import TimerForm from './TimerForm'

class EditableTimer extends React.Component {
  state = {
    editFormOpen: false,
  }
  render () {
    if (this.props.editFormOpen) {
      return (
        <TimerForm
          title={this.props.title}
          project={this.props.project}
        />
      )
    } else {
      return (
        <Timer
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
        />
      )
    }
  }
}

export default EditableTimer
