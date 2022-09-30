import Action from "../Action"
import Button from "react-bootstrap/Button"
import { useEffect } from "react"

const ActionsList = ({
  actions,
  setActions,
  activeAction,
  setActiveAction,
}) => {
  // Load actions from database into state
  useEffect(() => {
    setTimeout(async () => {
      const fetched = await import(`../../pages/api/mocks/actions.json`)
      setActions(fetched.default)
    }, 1000)
  }, [setActions])

  const setSingleAction = (i, action) => {
    const actionsCopy = [...actions]
    actionsCopy[i] = action
    setActions(actionsCopy)
  }

  return (
    <>
      {actions &&
        actions.map((e, i) => (
          <Action
            action={e}
            key={i}
            id={i}
            activeAction={activeAction}
            setActiveAction={setActiveAction}
            setSingleAction={(i) => {
              setSingleAction(i, e)
            }}
          />
        ))}
      <Button variant="secondary">Add next instruction</Button>
    </>
  )
}

export default ActionsList
