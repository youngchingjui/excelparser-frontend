import Form from "react-bootstrap/Form"

import CloseIcon from "../../../public/static/assets/svg/close.svg"

const ItemField = ({
  fieldObject,
  removeFromField,
  removeField,
  setValue,
  setModalShow,
  ...props
}) => {
  const { type, value } = fieldObject

  const handleRemoveField = (e) => {
    e.stopPropagation()
    removeField()
  }

  return (
    <span onClick={() => setModalShow(true)} {...props}>
      {type}{" "}
      <Form.Control
        size="sm"
        placeholder="null"
        type="text"
        className="textForm"
        value={value}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => setValue(e.target.value)}
      />
      <CloseIcon onClick={handleRemoveField} />
    </span>
  )
}

export default ItemField
