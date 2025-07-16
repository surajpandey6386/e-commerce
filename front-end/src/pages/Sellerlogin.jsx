import React from 'react'

const Sellerlogin = () => {
  return (
    <div class="login-container">
    <h2>Seller Login</h2>
    <form action="/seller-dashboard" method="POST">
      <input type="email" placeholder="Seller Email" name="email" required />
      <input type="password" placeholder="Password" name="password" required />
      <button type="submit">Login</button>
    </form>
     <p style="text-align:center; margin-top:10px;">if not have an account? <a href="#">Login</a></p>
  </div>

  )
}

export default Sellerlogin
