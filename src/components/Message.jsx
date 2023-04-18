import {useEffect, useState } from "react";


export default function Message() {
  const[message, setMessage] = useState('Initial Message')
  useEffect(() => {
    setMessage('Component did Mount')
  }, [])
  return <h1>{message}</h1>
}