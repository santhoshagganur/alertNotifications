// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="app-bg-container">
        <h1 className="app-notifications"> Alert Notifications </h1>
        <Notification>
          <div className="each-warning">
            <AiFillCheckCircle className="success-icon" />
            <div>
              <h1 className="success-heading"> Success </h1>
              <p className="description">
                You can access all the files in the folder
              </p>
            </div>
            <GrFormClose className="form-close" />
          </div>
          <div className="each-warning">
            <RiErrorWarningFill className="error-icon" />
            <div>
              <h1 className="error-heading"> Error </h1>
              <p className="description">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
            <GrFormClose className="form-close" />
          </div>
          <div className="each-warning">
            <MdWarning className="warning-icon" />
            <div>
              <h1 className="warning-heading"> Warning </h1>
              <p className="description">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
            <GrFormClose className="form-close" />
          </div>
          <div className="each-warning">
            <MdInfo className="info-icon" />
            <div>
              <h1 className="info-heading"> Info </h1>
              <p className="description">
                Anyone on the internet can view these files
              </p>
            </div>
            <GrFormClose className="form-close" />
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
