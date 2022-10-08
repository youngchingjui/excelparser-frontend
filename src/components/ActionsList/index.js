import { useEffect, useState } from "react"
import Action from "../Action"
import Button from "react-bootstrap/Button"

const ActionsList = ({ actions, setActions }) => {
  const [activeAction, setActiveAction] = useState(0)
  // Load actions from database into state
  useEffect(() => {
    setTimeout(async () => {
      const fetched = await import(`../../pages/api/mocks/actions.json`)
      setActions(fetched.default)
    }, 1000)
  }, [setActions])

  const setSingleAction = (index, action) => {
    const actionsCopy = [...actions]
    actionsCopy[index] = action
    setActions(actionsCopy)
  }

  // TODO: Request sheet[id] from server, given this selected action and all before it
  // TODO: Load sheet[id] into ExcelTable component

  return (
    <>
      {actions &&
        actions.map((action, index) => (
          <Action
            action={action}
            key={index}
            id={index}
            setSingleAction={(value) => {
              setSingleAction(index, value)
            }}
            bg={activeAction == index && "primary"}
            text={activeAction == index && "white"}
            onClick={() => setActiveAction(index)}
          />
        ))}
      <Button variant="secondary">Add next instruction</Button>
    </>
  )
}

export default ActionsList
