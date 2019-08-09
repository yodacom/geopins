import { createContext } from 'react'

  const Context = createContext({
    currentUser: null,
    iAuth: false,
    draft: null
  })

export default Context;