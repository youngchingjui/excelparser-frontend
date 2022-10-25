import "bootstrap/dist/css/bootstrap.min.css"
import "../styles.css"

import React from "react"

import { ActionsContextProvider } from "../context/ActionsContext"
import { SheetContextProvider } from "../context/SheetContext"

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.StrictMode>
      <SheetContextProvider>
        <ActionsContextProvider>
          <Component {...pageProps} />
        </ActionsContextProvider>
      </SheetContextProvider>
    </React.StrictMode>
  )
}

export default MyApp
