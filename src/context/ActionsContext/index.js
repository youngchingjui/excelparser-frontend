import { createContext, useContext, useMemo, useState } from "react"

const ActionsContext = createContext({ actions: [], setActions: () => {} })

const ActionsContextProvider = ({ children }) => {
  const [actions, setActions] = useState([])
  const contextValue = useMemo(() => ({ actions, setActions }), [actions])

  return (
    <ActionsContext.Provider value={contextValue}>
      {children}
    </ActionsContext.Provider>
  )
}

const useActionsContext = () => {
  return useContext(ActionsContext)
}

export { ActionsContextProvider, useActionsContext }
