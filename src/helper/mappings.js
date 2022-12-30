import Action from "../components/Action"
import {
  applyArithmatic,
  deleteColumnsAToB,
  ifThenStatement,
  insertAColumnsAfterColumnB,
  removeAtoBRows,
  removeColumns,
  removeRows,
} from "./api/parseFunctions"
import setValue from "./api/setValue"

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
  setValue: (action, responseString) => setValue(action, responseString),
  applyArithmatic: (action, responseString) =>
    applyArithmatic(action, responseString),
  deleteColumnsAToB: (action, responseString) =>
    deleteColumnsAToB(action, responseString),
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
  setValue: (action, setSingleAction) => (
    <Action.SetValue action={action} setSingleAction={setSingleAction} />
  ),
  applyArithmatic: (action, setSingleAction) => (
    <Action.ApplyArithmatic action={action} setSingleAction={setSingleAction} />
  ),
  deleteColumnsAToB: (action, setSingleAction) => (
    <Action.DeleteColumnsAToB
      action={action}
      setSingleAction={setSingleAction}
    />
  ),
}

const relationalOperatorMapping = {
  equalTo: "==",
  greaterThan: ">",
  lessThan: "<",
  greaterThanOrEqualTo: "=>",
  lessThanOrEqualTo: "=<",
  startsWith: "starts with",
  includes: "includes",
  endsWith: "ends with",
}

export { ActionDispatch, actionFunctions, relationalOperatorMapping }
