import { Button } from "react-bootstrap"

const DownloadButton = ({ downloadUrl, children }) => {
  const downloadFile = (e) => {
    e.preventDefault()
    console.log("Downloading file")

    const link = document.createElement("a")
    link.href = downloadUrl
    link.setAttribute("download", "test.csv")
    document.body.appendChild(link)
    link.click()
    link.parentNode.removeChild(link)
  }
  return <Button onClick={downloadFile}>{children}</Button>
}

export default DownloadButton
