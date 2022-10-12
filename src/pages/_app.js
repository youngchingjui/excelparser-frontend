import "bootstrap/dist/css/bootstrap.min.css"
import "../styles.css"

import { ActionsContextProvider } from "../context/ActionsContext"
import { SheetContextProvider } from "../context/SheetContext"

const MyApp = ({ Component, pageProps }) => {
  return (
    <SheetContextProvider>
      <ActionsContextProvider>
        <Component {...pageProps} />
      </ActionsContextProvider>
    </SheetContextProvider>
  )
}

export default MyApp
