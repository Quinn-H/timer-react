import React from 'react'
import TimerForm from './TimerForm'

class ToggleableTimerForm extends React.Component {
  state = {
    isOpen: false,
  },
  handleFormOpen () {
    this.setState({ isOpen: true })
  },
  handFormClose () {
    this.setState({ isOpen: false })
  },
  handleFormSubmit () {
    this.props.onFormSubmit(timer)
    this.setState({ isOpen: false })
  },
  render () {
    if (this.props.isOpen) {
      return (
        <TimerForm />
      )
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          <button className='ui basic button icon'>
            <i className='plus icon' />
          </button>
        </div>
      )
    }
  }
}

export default ToggleableTimerForm
