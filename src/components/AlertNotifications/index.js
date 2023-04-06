// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import Notification from '../Notification'

import './index.css'

const alertList = [
  {
    icon: <AiFillCheckCircle />,
    heading: 'Success',
    description: 'You can access all the files in folder',
  },
  {
    icon: <RiErrorWarningFill />,
    heading: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    icon: <MdWarning />,
    heading: 'Warning',
    description: 'Viewers of this file can see comments and suggestion',
  },
  {
    icon: <MdInfo />,
    heading: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

class AlertNotifications extends Component {
  render() {
    return (
      <div className="app-bg-container">
        <h1 className="app-notifications"> Alert Notifications </h1>
        <ul className="notification-container">
          {alertList.map(each => (
            <Notification> {each} </Notification>
          ))}
        </ul>
      </div>
    )
  }
}

export default AlertNotifications
