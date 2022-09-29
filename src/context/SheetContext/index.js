import { createContext, useContext, useMemo, useState } from "react"

const SheetContext = createContext({ sheet: [], setSheet: () => {} })

const SheetContextProvider = ({ children }) => {
  const [sheet, setSheet] = useState(null)
  const contextValue = useMemo(() => ({ sheet, setSheet }), [sheet])

  return (
    <SheetContext.Provider value={contextValue}>
      {children}
    </SheetContext.Provider>
  )
}

const useSheetContext = () => {
  return useContext(SheetContext)
}

export { SheetContextProvider, useSheetContext }
