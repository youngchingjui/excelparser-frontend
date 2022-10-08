import Form from "react-bootstrap/Form"

const TextColumn = ({ ...props }) => {
  return (
    <Form.Control
      id="b"
      size="sm"
      placeholder="null"
      type="text"
      className="control-column"
      {...props}
    />
  )
}

export default TextColumn
