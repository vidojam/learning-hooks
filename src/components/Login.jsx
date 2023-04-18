import { useState } from "react"


export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  if(isLoggedIn) {
    return (
      <section>
        <h1>Welcome Back!</h1>
        <button onClick={()=> setIsLoggedIn(false)}>Logout</button>
      </section>
    )
  }
  return (
    <section>
      <h1>Please Login...</h1>
      <button onClick={()=> setIsLoggedIn(true)}>Login</button>
    </section>
  )
  
}