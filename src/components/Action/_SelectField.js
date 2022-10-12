import Form from "react-bootstrap/Form"

const _SelectField = ({ options, ...props }) => {
  return (
    <Form.Select size="sm" className="select-field" {...props}>
      {options.map((e, i) => (
        <option value={e} key={i}>
          {e}
        </option>
      ))}
    </Form.Select>
  )
}

export default _SelectField
