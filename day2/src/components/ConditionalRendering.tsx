import React from 'react'

function getLoginStatus() {
    const isLoggedIn = true;
  if (isLoggedIn) {
    return 'You are logged in!';
  } else {
    return 'You are not logged in!';
  }
}

const ConditionalRendering = () => {
    const isLoggedIn = true;


  return (
    <div>
        
        {isLoggedIn ? <p>Login successfully</p> : <p>You are not logged in</p>}
        {isLoggedIn && <p>Login successfully</p>}
       <p> {getLoginStatus()}</p>
    </div>
  )
}

export default ConditionalRendering;