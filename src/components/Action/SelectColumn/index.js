import Form from "react-bootstrap/Form"

const SelectColumn = ({ options, ...props }) => {
  return (
    <Form.Select size="sm" className="select-column" {...props}>
      {options.map((e, i) => (
        <option value={e} key={i}>
          {e}
        </option>
      ))}
    </Form.Select>
  )
}

export default SelectColumn
