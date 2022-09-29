import { useActionsContext } from "../../context/ActionsContext"

const TestComponent = () => {
  const { actions, setActions } = useActionsContext()

  const updateButton = (e) => {
    e.preventDefault
    setActions({ id: 1 })
  }
  return (
    <>
      <div>This is a test component</div>
      <button onClick={updateButton}>{actions.id}</button>
    </>
  )
}

export default TestComponent
