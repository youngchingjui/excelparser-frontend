import Action from "."

const _RemoveAToBRows = ({ action, setSingleAction }) => {
  const handleChange = (e, field) => {
    const actionCopy = { ...action }
    actionCopy[field] = e.target.value
    setSingleAction(actionCopy)
  }
  return (
    <div id="removeAtoBRows">
      Remove rows
      <Action.TextField
        value={action.a}
        onChange={(e) => handleChange(e, "a")}
        type="number"
      />
      to
      <Action.TextField
        value={action.b}
        onChange={(e) => handleChange(e, "b")}
        type="number"
      />
    </div>
  )
}

export default _RemoveAToBRows
