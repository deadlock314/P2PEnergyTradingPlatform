import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ProfileMain() {
  const redirect=useNavigate();

  return (
    <div>
        <div>ProfileMain</div>
        <button onClick={()=>redirect("/authotp")} >Verify Mail</button>
        <button>Connect Wallet</button>
        <a href="https://metamask.io/" >Create Wallet</a>
    </div>
    
  )
}
