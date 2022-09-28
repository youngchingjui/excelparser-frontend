import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import SelectColumn from "./SelectColumn"

const Action = ({ action }) => {
  return (
    <>
      <Card>
        {action.type == "if" && (
          <Card.Body>
            <span>
              If
              <SelectColumn
                id="if-subject"
                options={["date", "inflow", "outflow", "payee", "notes"]}
              />
              ==
              <Form.Control
                id="if-value"
                size="sm"
                placeholder="null"
                className="control-column"
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
        <Card.Body>{action.mainText}</Card.Body>
      </Card>
    </>
  )
}

export default Action
