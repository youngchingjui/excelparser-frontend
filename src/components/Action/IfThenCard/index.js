import IfClause from "../IfClause"
import ThenClause from "../ThenClause"

const IfThenCard = ({ action, setSingleAction }) => {
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
        If
        {action.if.map((ifClause, index) => (
          <IfClause
            index={index}
            ifClause={ifClause}
            key={index}
            setIfClause={(value) => setIfClause(index, value)}
          />
        ))}
        ,
      </div>
      <div id="then">
        <span>
          Then
          <ThenClause action={action} setThenClause={setThenClause} />
        </span>
      </div>
    </>
  )
}

export default IfThenCard
