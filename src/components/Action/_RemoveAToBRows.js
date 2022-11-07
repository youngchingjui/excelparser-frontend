import Action from "."

const _RemoveAToBRows = ({ action, setSingleAction }) => {
  const handleChange = (e, field) => {
    const actionCopy = { ...action }
    const value = parseInt(e.target.value)

    // Set minimum value to 1
    // TODO: Make minimum of field "b" to be greater than "a"
    if (value < 1) {
      actionCopy[field] = 1
    } else {
      actionCopy[field] = value
    }
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
