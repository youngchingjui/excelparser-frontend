import Table from "react-bootstrap/Table"
import { useEffect } from "react"

const ExcelTable = ({ sheets, setDownloadUrl }) => {
  useEffect(() => {
    // Update the download URL whenever sheet changes

    // Don't run if sheet is not yet set
    if (!sheets) {
      return
    }

    const blob = new Blob([sheets])
    setDownloadUrl(window.URL.createObjectURL(blob))
  }, [setDownloadUrl, sheets])

  return (
    <>
      {sheets[0] && (
        <Table hover>
          <thead>
            <tr>
              {sheets[0]
                .split("\n")[0]
                .split(",")
                .map((e, index) => (
                  <th key={index}>{e}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {sheets[0]
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
