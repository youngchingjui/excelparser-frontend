import Action from "."

const _RemoveRows = ({ action, setSingleAction }) => {
  const handleChange = (e) => {
    const actionCopy = { ...action }
    actionCopy.value = e.target.value
    setSingleAction(actionCopy)
  }
  return (
    <div id="removeRows">
      Remove first
      <Action.TextField
        value={action.value}
        onChange={handleChange}
        type="number"
      />
      rows
    </div>
  )
}

export default _RemoveRows
