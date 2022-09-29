import Table from "react-bootstrap/Table"
import { useEffect } from "react"
import { useSheetContext } from "../../context/SheetContext"

const ExcelTable = ({ setDownloadUrl }) => {
  const { sheet } = useSheetContext()

  useEffect(() => {
    // Update the download URL whenever sheet changes

    // Don't run if sheet is not yet set
    if (!sheet) {
      return
    }

    const blob = new Blob([sheet])
    setDownloadUrl(window.URL.createObjectURL(blob))
  }, [setDownloadUrl, sheet])

  return (
    <>
      {sheet && (
        <Table hover>
          <thead>
            <tr>
              {sheet
                .split("\n")[0]
                .split(",")
                .map((e, index) => (
                  <th key={index}>{e}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {sheet
              .split("\n")
              .splice(1)
              .map((row, index) => (
                <tr key={index}>
                  {row.split(",").map((cell, index) => (
                    <td key={index}>{cell}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default ExcelTable
