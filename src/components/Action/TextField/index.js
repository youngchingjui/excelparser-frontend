import Form from "react-bootstrap/Form"

const TextColumn = ({ value, ...props }) => {
  return (
    <Form.Control
      id="b"
      size="sm"
      placeholder="null"
      className="control-column"
      {...props}
    />
  )
}

export default TextColumn
