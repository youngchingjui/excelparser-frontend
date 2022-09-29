import Action from "../Action"
import Button from "react-bootstrap/Button"
import DownloadButton from "../DownloadButton"
import FileUploadButton from "../FileUploadButton"
import { useActionsContext } from "../../context/ActionsContext"
import { useEffect } from "react"
import { useSheetContext } from "../../context/SheetContext"

const ActionsList = ({ downloadUrl }) => {
  const { sheet, setSheet } = useSheetContext()
  const { actions, setActions } = useActionsContext()

  // Load actions from database into context
  useEffect(() => {
    setTimeout(async () => {
      const fetched = await import(`../../pages/api/mocks/actions.json`)
      setActions(fetched.default)
    }, 1000)
  }, [setActions])

  const parseData = async (e) => {
    e.preventDefault
    const response = await fetch("/api/parse", {
      method: "POST",
      body: JSON.stringify({ actions, sheet }),
    })

    if (!response.ok) {
      console.error("did not get parsed data")
      return
    }

    const jsonData = await response.json()
    setSheet(jsonData)
  }

  return (
    <>
      <Button onClick={parseData}>Send to server to test parsing</Button>
      <FileUploadButton />
      {actions && actions.map((e) => <Action action={e} key={e.id} />)}
      <Button variant="secondary">Add next instruction</Button>
      <DownloadButton variant="secondary" downloadUrl={downloadUrl}>
        Download file
      </DownloadButton>
    </>
  )
}

export default ActionsList
