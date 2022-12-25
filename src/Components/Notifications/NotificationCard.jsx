import React from 'react'

function Notifications({state}) {

  return (
    <div className="notification-card">

      <img className="notification-dp" src={state.imgLink} />
      <div>
      <p className="notification-title">{state.title}</p>
      <p className="notification-subtitle">{state.subtitle}</p>
      </div>
    </div>
  )
}

export default Notifications