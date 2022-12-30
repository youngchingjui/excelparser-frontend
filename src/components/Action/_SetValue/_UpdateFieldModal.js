import Card from "react-bootstrap/Card"
import Modal from "react-bootstrap/Modal"

const _UpdateFieldModal = ({
  handleClose,
  setObject,
  fieldObjectList,
  title,
  ...props
}) => {
  const addField = (obj) => {
    setObject(obj)
    handleClose()
  }

  return (
    <Modal onHide={handleClose} {...props}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {fieldObjectList.map((obj, index) => {
          return (
            <Card key={index} onClick={() => addField(obj)}>
              <Card.Body>{obj.type}</Card.Body>
            </Card>
          )
        })}
      </Modal.Body>
    </Modal>
  )
}

export default _UpdateFieldModal
