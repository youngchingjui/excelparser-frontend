import { useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import SelectColumn from "./SelectColumn"

const Action = ({
  action,
  id,
  activeAction,
  setActiveAction,
  setSingleAction,
}) => {
  const [isActiveAction, setIsActiveAction] = useState(false)

  // Update isActiveAction
  useEffect(() => {
    if (id == activeAction) {
      setIsActiveAction(true)
    } else {
      setIsActiveAction(false)
    }
  }, [id, activeAction, setActiveAction])

  const handleCardClick = (e) => {
    // Set this card as the "active" action
    setActiveAction(id)

    // TODO: Request sheet[id] from server, given this selected action and all before it
    // TODO: Load sheet[id] into ExcelTable component
  }

  const updateValue = (e) => {
    e.preventDefault
    const actionCopy = { ...action }
    actionCopy.if[0].b.value = e.target.value
    setSingleAction(actionCopy)
  }

  return (
    <>
      <Card
        onClick={handleCardClick}
        bg={isActiveAction && "primary"}
        text={isActiveAction && "white"}
      >
        {action.type == "if" && (
          <Card.Body>
            <span>
              If
              <SelectColumn
                id="a"
                options={["date", "inflow", "outflow", "payee", "notes"]}
                value={action.if[0].a.value}
              />
              ==
              <Form.Control
                id="if-value"
                size="sm"
                placeholder="null"
                className="control-column"
                value={action.if[0].b.value}
                onChange={updateValue}
              ></Form.Control>
              ,
            </span>
            <span>
              Then
              <SelectColumn
                id="then-subject"
                options={["date", "inflow", "outflow", "payee", "notes"]}
              />
              =
              <SelectColumn
                id="then-value"
                options={["date", "inflow", "outflow", "payee", "notes"]}
              />
            </span>
          </Card.Body>
        )}
        <Card.Body>{id + " " + action.mainText}</Card.Body>
      </Card>
    </>
  )
}

export default Action
