import { createContext } from 'react'

  const Context = createContext({
    currentUser: null,
    iAuth: false
  })

export default Context;