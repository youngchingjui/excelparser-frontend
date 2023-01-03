import { useState } from "react"

import CloseIcon from "../../../public/static/assets/svg/close.svg"
import actionList from "../../data/actionList.json"
import { ActionDispatch } from "../../helper/mappings"
import ActionMenuModal from "../ActionMenuModal"
import EmptyField from "../Fields/EmptyField"

const _ThenClause = ({ thenAction, setThenClause, ...props }) => {
  const [actionMenuModalShow, setActionMenuModalShow] = useState(false)

  const handleRemoveAction = (e) => {
    e.stopPropagation()
    setThenClause(null)
  }

  const addAction = (actionObject) => {
    setThenClause(actionObject)
    setActionMenuModalShow(false)
  }

  return (
    <div className="thenClause" {...props}>
      {thenAction ? (
        <>
          {ActionDispatch.hasOwnProperty(thenAction.type)
            ? ActionDispatch[thenAction.type](thenAction, setThenClause)
            : thenAction.mainText}
          <CloseIcon onClick={handleRemoveAction} className="closeIcon" />
        </>
      ) : (
        <EmptyField setModalShow={setActionMenuModalShow} text={"Add action"} />
      )}
      <ActionMenuModal
        show={actionMenuModalShow}
        actionList={actionList}
        addAction={addAction}
        onHide={() => setActionMenuModalShow(false)}
      />
    </div>
  )
}

export default _ThenClause
