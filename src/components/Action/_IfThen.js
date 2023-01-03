import Action from "."

const _IfThen = ({ action, setSingleAction }) => {
  const setIfClause = (index, value) => {
    const actionCopy = { ...action }
    actionCopy.if[index] = value
    setSingleAction(actionCopy)
  }

  const setThenClause = (value) => {
    const actionCopy = { ...action }
    actionCopy.then = value
    setSingleAction(actionCopy)
  }

  return (
    <>
      <div id="if">
        If{" "}
        {action.if.map((ifClause, index) => (
          <Action.IfClause
            index={index}
            ifClause={ifClause}
            key={index}
            setIfClause={(value) => setIfClause(index, value)}
          />
        ))}
        ,
      </div>
      <div id="then">
        Then{" "}
        <Action.ThenClause
          thenAction={action.then}
          setThenClause={setThenClause}
        />
      </div>
    </>
  )
}

export default _IfThen
