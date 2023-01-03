import { useState } from "react"

import EmptyField from "../../Fields/EmptyField"
import ItemField from "../../Fields/ItemField"
import _UpdateFieldModal from "./_UpdateFieldModal"

const _SetValue = ({ action, setSingleAction, ...props }) => {
  const [targetModalShow, setTargetModalShow] = useState(false)
  const [fromModalShow, setFromModalShow] = useState(false)

  const targetFieldObjectList = [
    { type: "cell", value: "a1" },
    { type: "column", value: "A" },
  ]

  const fromFieldObjectList = [
    { type: "text", value: "" },
    { type: "column", value: "A" },
  ]

  return (
    <div className="setValue" {...props}>
      Set value in{" "}
      {action.target ? (
        <ItemField
          fieldObject={action.target}
          setModalShow={setTargetModalShow}
          removeField={() => setSingleAction({ ...action, target: null })}
          setValue={(value) =>
            setSingleAction({
              ...action,
              target: { value, type: action.target.type },
            })
          }
          className="targetField"
        />
      ) : (
        <EmptyField setModalShow={setTargetModalShow} text={"Add field"} />
      )}{" "}
      to value from{" "}
      {action.from ? (
        <ItemField
          fieldObject={action.from}
          setModalShow={setFromModalShow}
          removeField={() => setSingleAction({ ...action, from: null })}
          setValue={(value) =>
            setSingleAction({
              ...action,
              from: { value, type: action.from.type },
            })
          }
          className="fromField"
        />
      ) : (
        <EmptyField setModalShow={setFromModalShow} text={"Add field"} />
      )}
      <_UpdateFieldModal
        handleClose={() => setTargetModalShow(false)}
        show={targetModalShow}
        setObject={(obj) => setSingleAction({ ...action, target: obj })}
        fieldObjectList={targetFieldObjectList}
        title="Select target field"
      />
      <_UpdateFieldModal
        handleClose={() => setFromModalShow(false)}
        show={fromModalShow}
        setObject={(obj) => setSingleAction({ ...action, from: obj })}
        fieldObjectList={fromFieldObjectList}
        title="Select from field"
      />
    </div>
  )
}

export default _SetValue
