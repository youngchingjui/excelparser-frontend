import Card from "react-bootstrap/Card"
import IfClause from "./IfClause"
import SelectColumn from "./SelectColumn"

const Action = ({ action, id, setSingleAction, ...props }) => {
  const setIfClause = (index, value) => {
    const actionCopy = { ...action }
    actionCopy.if[index] = value
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
            <SelectColumn
              id="then-subject"
              options={["date", "inflow", "outflow", "payee", "notes"]}
              value={action.then.a}
            />
            =
            <SelectColumn
              id="then-value"
              options={["date", "inflow", "outflow", "payee", "notes"]}
              value={action.then.b}
            />
          </span>
        </Card.Body>
      )}
      <Card.Body>{id + " " + action.mainText}</Card.Body>
    </Card>
  )
}

export default Action
