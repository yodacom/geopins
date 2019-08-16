import { createContext } from 'react'

  const Context = createContext({
    currentUser: null,
    iAuth: false,
    draft: null,
    pins: [],
    currentPin: null
  })

export default Context;