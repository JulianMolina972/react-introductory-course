import React from 'react'
import { useStorageListener } from './useStorageListener'
import './styles.css'

export const ChangeAlert = ({ synchronize }) => {
  const { show, toggleShow } = useStorageListener(synchronize)
  
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
        <p>It looks like you changed your TODOs in another tab or browser window..</p>
        <p>Do you want to synchronize your TODOs?</p>
        <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
        >
            Yes!
        </button>
        </div>
    </div>
    )
  } else {
    return null;
  }
}


