import React from 'react'

const Adminlogin = () => {
  return (
    <div class="login-container">
    <h2>Admin Login</h2>
    <form action="/admin-dashboard" method="POST">
      <input type="text" placeholder="Admin Username" name="username" required />
      <input type="password" placeholder="Password" name="password" required />
      <button type="submit">Login</button>
    </form>
  </div>

  )
}

export default Adminlogin
