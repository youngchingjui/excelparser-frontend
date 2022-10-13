import Form from "react-bootstrap/Form"

const FileUploadButton = ({ setSheets }) => {
  // TODO: Fix bug if user hits "cancel" when selecting file
  let fileReader

  const handleFileRead = (e) => {
    const content = fileReader.result
    setSheets([content])
  }

  const handleChosenFile = (file) => {
    // TODO: handle if user cancel's file loading
    fileReader = new FileReader()
    fileReader.onloadend = handleFileRead
    fileReader.readAsText(file)
  }

  return (
    <Form.Control
      type="file"
      accept=".csv"
      name="fileUpload"
      id="fileUpload"
      onChange={(e) => handleChosenFile(e.target.files[0])}
    ></Form.Control>
  )
}

export default FileUploadButton
