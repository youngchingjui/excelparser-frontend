import Action from "../components/Action"
import {
  ifThenStatement,
  insertAColumnsAfterColumnB,
  removeAtoBRows,
  removeColumns,
  removeRows,
  setCellValue,
} from "./api/parseFunctions"

const actionFunctions = {
  removeRows: (action, responseString) => removeRows(action, responseString),
  removeColumns: (action, responseString) =>
    removeColumns(action, responseString),
  removeAtoBRows: (action, responseString) =>
    removeAtoBRows(action, responseString),
  ifThenStatement: (action, responseString) =>
    ifThenStatement(action, responseString),
  insertAColumnsAfterColumnB: (action, responseString) =>
    insertAColumnsAfterColumnB(action, responseString),
  setCellValue: (action, responseString) =>
    setCellValue(action, responseString),
}

const ActionDispatch = {
  ifThenStatement: (action, setSingleAction) => (
    <Action.IfThen action={action} setSingleAction={setSingleAction} />
  ),
  removeRows: (action, setSingleAction) => (
    <Action.RemoveRows action={action} setSingleAction={setSingleAction} />
  ),
  removeColumns: (action, setSingleAction) => (
    <Action.RemoveColumns action={action} setSingleAction={setSingleAction} />
  ),
  removeAtoBRows: (action, setSingleAction) => (
    <Action.RemoveAToBRows action={action} setSingleAction={setSingleAction} />
  ),
  insertAColumnsAfterColumnB: (action, setSingleAction) => (
    <Action.InsertAColumnsAfterColumnB
      action={action}
      setSingleAction={setSingleAction}
    />
  ),
  setCellValue: (action, setSingleAction) => (
    <Action.SetCellValue action={action} setSingleAction={setSingleAction} />
  ),
}

const relationalOperatorMapping = {
  equalTo: "==",
  greaterThan: ">",
  lessThan: "<",
  greaterThanOrEqualTo: "=>",
  lessThanOrEqualTo: "=<",
}

export { ActionDispatch, actionFunctions, relationalOperatorMapping }
