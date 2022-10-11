import Card from "react-bootstrap/Card"
import IfClause from "./IfClause"
import ThenClause from "./ThenClause"

const ActionCard = ({ action, id, setSingleAction, ...props }) => {
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
    <Card {...props}>
      {action.type == "if" && (
        <Card.Body>
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
          <span>
            Then
            <ThenClause action={action} setThenClause={setThenClause} />
          </span>
        </Card.Body>
      )}
      <Card.Body>{id + " " + action.mainText}</Card.Body>
    </Card>
  )
}

export default ActionCard
