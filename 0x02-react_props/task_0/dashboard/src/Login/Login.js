import React from 'react'

const Login = () => {
  return (
    <div className="App-body">
    <p>Login to access the full dashboard</p>
    <form>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email"></input>
      <label htmlFor="password">Password:</label>
      <input type="password" name="password"></input>
      <button>OK</button>
    </form>
  </div>
  )
}

export default Login