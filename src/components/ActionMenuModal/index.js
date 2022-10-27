import { Card, Modal } from "react-bootstrap"

const getActionList = () => {
  return [
    {
      type: "removeRows",
      mainText: "Remove first x rows",
      value: 2,
    },
    { type: "removeAtoBRows", mainText: "Remove rows from A to B", a: 1, b: 3 },
    {
      type: "removeColumns",
      mainText: "Remove first x columns",
      value: 2,
    },
    { type: "addRows", mainText: "Add first x rows", value: 2 },
    { type: "addColumns", mainText: "Add first x columns", value: 2 },
    {
      type: "ifThenStatement",
      if: [
        {
          a: {
            type: "column",
            value: "3",
          },
          relationalOperator: "==",
          b: {
            type: "text",
            value: "tes text",
          },
        },
      ],
      then: {
        type: "assignment",
        a: "4",
        b: "3",
      },
      mainText: "If-Then statement",
    },
  ]
}

const ActionMenuModal = ({ actions, setActions, handleClose, ...props }) => {
  // add this action to the action list state
  const addAction = (actionObject) => {
    actions.push(actionObject)
    setActions(actions)

    // close modal
    handleClose()
  }

  const actionList = getActionList()
  return (
    <Modal onHide={handleClose} {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Add action</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {actionList.map((e, index) => {
          return (
            <Card key={index} onClick={() => addAction(e)}>
              <Card.Body>{e.mainText}</Card.Body>
            </Card>
          )
        })}
      </Modal.Body>
    </Modal>
  )
}

export default ActionMenuModal
