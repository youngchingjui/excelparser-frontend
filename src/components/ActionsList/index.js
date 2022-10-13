import { Card } from "react-bootstrap"

import ActionCard from "../ActionCard"

const ActionsList = ({
  actions,
  setActions,
  parseData,
  activeAction,
  setActiveAction,
}) => {
  const handleOnClick = (index) => {
    // Highlight action
    setActiveAction(index + 1)

    // Send all actions at index and above to server for parsing
    parseData(index)
  }

  const setSingleAction = (index, action) => {
    const actionsCopy = [...actions]
    actionsCopy[index] = action
    setActions(actionsCopy)
  }

  const deleteAction = (index) => {
    const actionsCopy = [...actions]
    actionsCopy.splice(index, 1)
    setActions(actionsCopy)
  }

  // TODO: Load sheet[id] into ExcelTable component

  return (
    <>
      <Card
        bg={activeAction == 0 && "primary"}
        text={activeAction == 0 && "white"}
        onClick={() => setActiveAction(0)}
      >
        <Card.Body>Original</Card.Body>
      </Card>
      {actions &&
        actions.map((action, index) => (
          <ActionCard
            action={action}
            key={index}
            id={index}
            setSingleAction={(value) => {
              setSingleAction(index, value)
            }}
            deleteAction={() => deleteAction(index)}
            bg={activeAction == index + 1 && "primary"}
            text={activeAction == index + 1 && "white"}
            onClick={() => handleOnClick(index)}
          />
        ))}
    </>
  )
}

export default ActionsList
