import Form from "react-bootstrap/Form"

const SelectColumn = ({ options }) => {
  return (
    <Form.Select size="sm" className="select-column">
      {options.map((e, i) => (
        <option value={e} key={i}>
          {e}
        </option>
      ))}
    </Form.Select>
  )
}

export default SelectColumn
